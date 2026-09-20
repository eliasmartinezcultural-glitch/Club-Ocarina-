# Panel privado de Lina — especificación V1

## Objetivo

El panel no es un CRM genérico ni un dashboard de métricas. Es la consola operativa de la Gerencia General.

Principio:

**Lina entra → entiende qué requiere atención → resuelve → sale.**

## Ruta

`/gestion`

La ruta es privada y debe exigir autenticación real.

No debe existir un enlace público visible hacia ella en la portada.

## Inicio: HOY

Orden de prioridad:

1. Acciones que requieren intervención.
2. Estado de membresías.
3. Actividad reciente.
4. Próximos encuentros.
5. Métricas breves.

### Tarjetas

- Pagos para registrar
- Membresías en gracia
- Renovaciones próximas
- Usos recientes
- Nuevos socios
- Próximo encuentro

## Acciones rápidas

### Registrar socio

Campos mínimos:
- nombre;
- número de socio generado por el sistema;
- teléfono opcional;
- fecha de ingreso.

### Registrar pago

Lina selecciona:
- socio;
- período;
- importe;
- medio informado;
- fecha.

El sistema registra quién lo hizo y cuándo.

**No procesa dinero.**

### Activar / renovar

Al confirmar el pago:
- crea/actualiza período;
- calcula vencimiento;
- elimina estado de gracia;
- registra actor;
- escribe auditoría.

### Validar socio

Entrada:
- número de socio.

Respuesta:
- activo / gracia / vencido;
- nombre;
- beneficios disponibles.

### Registrar uso

El sistema verifica:
- socio válido;
- beneficio activo;
- límite del período;
- disponibilidad.

Luego registra el consumo y la auditoría.

## Socios

Tabla operativa:

**Número · Nombre · Estado · Vencimiento · Usos del período · Última actividad**

Filtros:
- activos;
- gracia;
- vencidos;
- próximos a vencer.

## Aliados

Cada aliado tiene:
- identidad;
- categoría;
- estado;
- beneficios;
- reglas;
- historial de usos.

Los aliados siguen siendo independientes. Club Ocarina organiza la relación; no absorbe sus negocios.

## Beneficios

Cada beneficio debe expresar claramente:

**qué recibe · cuánto · cada cuánto · condiciones · qué no incluye**

Ejemplo:

Kiri Fotografía
- 3 fotos profesionales por mes;
- utilizables juntas;
- no acumulables.

## Encuentros

V1.5.

Crear:
- título;
- fecha;
- lugar;
- capacidad;
- descripción;
- estado.

Registrar asistentes sin convertirlo en una red social.

## Historial

Toda acción sensible debe dejar:

**quién · qué hizo · sobre qué · cuándo**

Ejemplos:
- alta de socio;
- confirmación de pago;
- renovación;
- cambio de beneficio;
- registro de uso;
- cancelación.

## Seguridad

Roles:

### gerente_general
Puede operar socios, membresías, pagos administrativos, beneficios, aliados, usos y encuentros.

### admin_tecnico
Puede administrar infraestructura y configuración técnica.

No debe existir un rol administrativo genérico compartido.

La autorización debe verificarse en backend/base de datos, no solamente ocultando botones.

## Estado de producción

Hasta que exista autenticación + PostgreSQL + RLS verificadas:

**NO cargar socios reales, pagos reales ni información sensible.**

