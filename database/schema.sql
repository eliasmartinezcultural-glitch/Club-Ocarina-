-- Club Ocarina — PostgreSQL / Supabase schema
-- V1: operational core. No online payment processing.

create extension if not exists pgcrypto;

create type public.app_role as enum ('socio','aliado','gerente_general','admin_tecnico');
create type public.member_status as enum ('activo','gracia','vencido','cancelado');
create type public.membership_status as enum ('pendiente','activa','gracia','vencida','cancelada');
create type public.event_status as enum ('borrador','publicado','cerrado','realizado','cancelado');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null,
  phone text,
  role public.app_role not null default 'socio',
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.members (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references public.profiles(id) on delete set null,
  member_number text unique not null,
  display_name text not null,
  status public.member_status not null default 'activo',
  joined_at date not null default current_date,
  internal_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.memberships (
  id uuid primary key default gen_random_uuid(),
  member_id uuid not null references public.members(id) on delete cascade,
  period_start date not null,
  period_end date not null,
  status public.membership_status not null default 'pendiente',
  grace_until date,
  confirmed_by uuid references public.profiles(id) on delete set null,
  confirmed_at timestamptz,
  created_at timestamptz not null default now(),
  constraint membership_period_valid check (period_end >= period_start)
);

create table public.payments (
  id uuid primary key default gen_random_uuid(),
  member_id uuid not null references public.members(id) on delete cascade,
  membership_id uuid references public.memberships(id) on delete set null,
  amount numeric(12,2) not null check (amount >= 0),
  method text not null,
  received_at timestamptz not null default now(),
  registered_by uuid not null references public.profiles(id) on delete restrict,
  reference_note text,
  created_at timestamptz not null default now()
);

create table public.allies (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text,
  contact_name text,
  active boolean not null default true,
  public_description text,
  internal_notes text,
  created_at timestamptz not null default now()
);

create table public.benefits (
  id uuid primary key default gen_random_uuid(),
  ally_id uuid not null references public.allies(id) on delete cascade,
  title text not null,
  description text not null,
  usage_limit integer,
  period_type text not null default 'monthly',
  active boolean not null default true,
  rules text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint benefit_limit_valid check (usage_limit is null or usage_limit >= 0)
);

create table public.benefit_usages (
  id uuid primary key default gen_random_uuid(),
  member_id uuid not null references public.members(id) on delete restrict,
  benefit_id uuid not null references public.benefits(id) on delete restrict,
  ally_id uuid not null references public.allies(id) on delete restrict,
  used_at timestamptz not null default now(),
  registered_by uuid not null references public.profiles(id) on delete restrict,
  notes text,
  created_at timestamptz not null default now()
);

create table public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  starts_at timestamptz not null,
  location text,
  capacity integer check (capacity is null or capacity > 0),
  status public.event_status not null default 'borrador',
  created_by uuid not null references public.profiles(id) on delete restrict,
  created_at timestamptz not null default now()
);

create table public.event_attendees (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.events(id) on delete cascade,
  member_id uuid not null references public.members(id) on delete cascade,
  status text not null default 'inscripto',
  registered_at timestamptz not null default now(),
  unique(event_id, member_id)
);

create table public.audit_log (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references public.profiles(id) on delete set null,
  action text not null,
  entity text not null,
  entity_id uuid,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index memberships_member_period_idx on public.memberships(member_id, period_start desc);
create index payments_member_date_idx on public.payments(member_id, received_at desc);
create index benefit_usages_member_date_idx on public.benefit_usages(member_id, used_at desc);
create index benefit_usages_benefit_date_idx on public.benefit_usages(benefit_id, used_at desc);
create index audit_log_entity_idx on public.audit_log(entity, entity_id, created_at desc);

-- RLS is mandatory before production data is loaded.
alter table public.profiles enable row level security;
alter table public.members enable row level security;
alter table public.memberships enable row level security;
alter table public.payments enable row level security;
alter table public.allies enable row level security;
alter table public.benefits enable row level security;
alter table public.benefit_usages enable row level security;
alter table public.events enable row level security;
alter table public.event_attendees enable row level security;
alter table public.audit_log enable row level security;

-- Policies must be created together with the authenticated production deployment.
-- Do not load real data until role-aware RLS policies are verified.
