# Arquitectura profesional — Club Ocarina

## 1. Definición del producto

Club Ocarina es un **club local contemporáneo** de San Patricio del Chañar.

No es solamente un sistema de descuentos. Su producto central es facilitar vínculos útiles entre personas, emprendimientos, profesionales y aliados locales.

Modelo institucional:

**PERSONA → SOCIO → MEMBRESÍA → BENEFICIO → ENCUENTRO → VÍNCULO → OPORTUNIDAD**

La tecnología acompaña. No excluye.

---

## 2. Principios bloqueados

1. **Cercanía:** primero las personas.
2. **Utilidad:** cada función debe resolver algo.
3. **Reciprocidad:** el valor circula entre socios y aliados.
4. **Respeto:** no importa profesión, edad o tamaño del emprendimiento.
5. **Local:** prioridad a Chañar y su entorno.
6. **Simplicidad:** nadie necesita conocimientos técnicos para participar.
7. **Cuidado:** el Club debe sentirse humano y bien gestionado.
8. **Inclusión:** teléfono, email, smartphone o QR nunca deben ser requisitos para recibir un beneficio.
9. **Privacidad:** el sitio no publica datos bancarios ni procesa pagos.
10. **No relleno:** una función entra solamente si aporta valor al socio, utilidad al aliado y operación simple para Lina.

### Ley de producto

Una nueva función debe mejorar simultáneamente:

**VALOR PARA EL SOCIO + UTILIDAD PARA EL ALIADO + OPERABILIDAD PARA LINA**

Si falla una de las tres, se rediseña o se elimina.

---

## 3. Producto en cinco capas

### A. Pertenencia
El socio debe sentir que forma parte de algo local y cuidado.

### B. Beneficios
Ventajas concretas, claras, limitadas y verificables.

### C. Encuentro
Pequeñas experiencias que permitan conocerse: cafés, talleres, charlas, visitas, salidas y actividades.

### D. Oportunidades
Espacio para facilitar conexiones de colaboración, compra, contratación, recomendación o aprendizaje.

### E. Confianza
Identidad, reglas, validación, historial y gestión responsable.

---

## 4. Nueva capa: Vida del Club

La web debe aportar valor incluso cuando una persona no está usando un beneficio.

La portada puede ofrecer piezas breves y renovables:

- **Consejo:** una idea práctica.
- **Idea de la semana:** una acción concreta.
- **Desafío:** una pequeña acción comunitaria.
- **Persona del Club:** conocer a un socio.
- **Aliado destacado:** conocer a la persona detrás del emprendimiento.
- **Una cosa de Chañar:** una historia, lugar, dato o mirada local.
- **Oportunidad:** BUSCO / OFREZCO.
- **Próximo encuentro:** actividad pequeña y concreta.

### Ley de contenido

Todo contenido debe cumplir al menos una función:

**ENSEÑAR · CONECTAR · INSPIRAR · DESCUBRIR · ACTIVAR**

Si no cumple ninguna, no se publica.

El contenido debe ser breve, local, útil y humano. No se convierte al Club en una revista, red social ni portal de noticias.

---

## 5. Arquitectura pública

La navegación principal debe permanecer pequeña:

- El Club
- Vida del Club
- Soy socio
- Soy aliado
- Encuentros
- Quiero sumarme

Las oportunidades pueden aparecer dentro de Vida del Club y Encuentros, sin crear una navegación excesiva.

La portada prioriza:

**HOY EN CLUB OCARINA**

1. pieza editorial breve;
2. persona/aliado;
3. oportunidad o encuentro;
4. beneficios;
5. membresía;
6. contacto con Lina.

Objetivo de experiencia:

**LEER → DESCUBRIR → CONOCER → PARTICIPAR → VOLVER**

---

## 6. Roles

### Socio
Puede consultar su membresía, beneficios, usos y encuentros disponibles.

### Aliado
Puede conocer el funcionamiento, validar socios y registrar usos autorizados.

### Gerencia General — Lina Lucero
Es el centro operativo del Club. Confirma pagos, activa o renueva membresías, administra socios, aliados, beneficios, usos y encuentros, y atiende excepciones.

### Administrador técnico
Administra infraestructura y configuración. No reemplaza las decisiones de gestión de Lina.

---

## 7. Flujo de membresía

Estados:

**PENDIENTE → ACTIVA → GRACIA → VENCIDA → CANCELADA**

Reglas:

- La membresía se activa únicamente después de que Lina confirme el pago.
- La gracia dura 48 horas después del vencimiento.
- Después de la gracia queda vencida.
- Los beneficios no utilizados no se acumulan.
- El sistema nunca inventa ni confirma un pago.
- El sitio no procesa pagos.
- El sitio no publica alias, CBU, tarjetas ni otros datos financieros.
- Las consultas de pago y asociación se canalizan con Lina.

Canal operativo de Lina:

**+54 9 2994 02-1395**

---

## 8. Beneficios

Cada beneficio debe tener:

- aliado;
- título;
- descripción;
- límite;
- período;
- reglas;
- estado;
- registro de uso.

Motor:

1. verificar socio;
2. verificar membresía activa;
3. verificar beneficio activo;
4. comprobar límite del período;
5. registrar uso;
6. dejar trazabilidad.

No se deben registrar datos financieros sensibles.

---

## 9. Encuentros

Los encuentros son pequeños y operables.

Ejemplos:

- café entre emprendedores;
- visita a un emprendimiento;
- charla práctica;
- taller;
- salida fotográfica;
- encuentro cultural.

Modelo:

**evento → cupo → inscripción → asistencia → historial**

La plataforma debe favorecer grupos pequeños antes que eventos masivos.

---

## 10. Oportunidades

La capa BUSCO / OFREZCO facilita conexiones locales.

Ejemplos:

- busco proveedor;
- ofrezco servicio;
- busco colaboración;
- recomiendo emprendimiento;
- busco aprendizaje.

Regla: no es un marketplace ni una red social. El Club facilita el encuentro; las partes deciden libremente si avanzan.

---

## 11. Contenido

Modelo mínimo:

- id
- type
- title
- body
- image_url opcional
- author opcional
- published_at
- expires_at opcional
- status
- created_by
- created_at
- updated_at

Tipos:

**consejo / idea / desafío / persona / aliado / chañar / oportunidad**

El contenido debe poder programarse, publicarse, despublicarse y auditarse.

---

## 12. Datos

Entidades principales:

- profiles
- members
- memberships
- payments
- allies
- benefits
- benefit_usages
- events
- event_attendees
- content
- opportunities
- audit_log

Se aplica mínima recolección de datos.

---

## 13. Gestión de Lina

La interfaz privada debe comenzar con:

# HOY

Indicadores:

- socios activos;
- membresías en gracia;
- pagos para registrar;
- renovaciones próximas;
- usos recientes;
- nuevos socios;
- próximo encuentro;
- contenidos pendientes.

Lina debe ver primero excepciones y acciones. La tecnología absorbe tareas repetitivas.

Acciones rápidas:

- registrar socio;
- registrar pago;
- activar/renovar;
- validar socio;
- registrar uso;
- publicar contenido;
- crear encuentro;
- revisar oportunidad.

---

## 14. Seguridad

Producción requiere:

- autenticación real;
- autorización por rol;
- PostgreSQL/Supabase o equivalente;
- RLS correctamente probado;
- auditoría de operaciones sensibles;
- backups;
- recuperación;
- HTTPS;
- mínima exposición de datos;
- ningún dato real antes de validar seguridad.

Ocultar botones no constituye seguridad. La autorización debe existir también en backend/base de datos.

---

## 15. Qué NO debe entrar en V1

- pagos online;
- billetera;
- sistema de puntos;
- marketplace completo;
- chat interno;
- red social;
- feed infinito;
- publicidad masiva;
- rankings de socios;
- gamificación excesiva;
- recopilación innecesaria de datos;
- funciones que obliguen a Lina a trabajar más de lo que automatizan.

---

## 16. Métricas de salud

No medir solamente cantidad de socios.

Medir:

- socios activos;
- renovación;
- beneficios utilizados;
- aliados activos;
- usos por beneficio;
- encuentros realizados;
- asistencia;
- conexiones/opportunities publicadas;
- contenido visto;
- retorno a la web;
- consultas a Lina;
- carga operativa de Lina.

La pregunta central:

**¿El Club está generando vínculos y utilidad reales?**

---

## 17. Estado actual

La web pública funciona como prototipo V2.

El esquema PostgreSQL inicial ya existe.

El panel conceptual de Lina ya está definido.

La siguiente fase es convertir la fachada en producto operativo mediante:

**CONTENIDO + OPORTUNIDADES + ENCUENTROS + AUTH + RLS + BACKEND**

No cargar datos reales hasta completar autenticación y seguridad.

---

## 18. Identidad

Club Ocarina debe sentirse:

**cercano + profesional + local + útil + humano**

Nunca:

**VIP + nocturno + elitista + burocrático + corporativo frío + red social genérica**

Frase guía:

> **Un club para encontrarnos, ayudarnos y hacer crecer lo local.**

