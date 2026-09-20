# Club Ocarina

Club Ocarina es una membresía local de San Patricio del Chañar. La Gerencia General está a cargo de **Lina Lucero**.

Sitio: https://eliasmartinezcultural-glitch.github.io/Club-Ocarina-/

## Dirección del producto

No queremos construir un “sitio de descuentos”. Queremos construir una **infraestructura local de pertenencia**: socio → membresía → beneficio → validación → uso → historial.

## Ley mundial inviolable

**La regla operativa de Club Ocarina es contrastar cada decisión con una matriz de 10 referentes internacionales/nacionales de membresías, clubes y loyalty.**

No se copia código, marca ni contenido propietario. Se estudian públicamente sus patrones operativos y se adaptan al contexto real de San Patricio del Chañar.

Referentes auditados:
1. Club LA NACION — credencial virtual, beneficios por categorías, cercanía/mapa, beneficios flash y alta de establecimientos.
2. Costco — membresía como puerta de acceso a valor, servicios y ahorro; control de credencial.
3. Tesco Clubcard — beneficios, puntos, cupones y ofertas segmentadas desde una cuenta/app.
4. American Express Membership Rewards — cuenta centralizada, acumulación/canje y consulta de saldo/recompensas.
5. Rakuten — cuenta de miembro, programas de incentivos y servicios conectados a una identidad.
6. Club Personal — referencia argentina de ecosistema de beneficios ligado a membresía.
7. Club Movistar — referencia argentina de beneficios ligados a una base de clientes.
8. Club Comafi — referencia argentina de beneficios financieros y comerciales.
9. Club Macro — referencia argentina de beneficios para clientes.
10. Nectar — referencia internacional de loyalty y beneficios asociados a una identidad de miembro.

Fuentes públicas consultadas para esta edición: Club LA NACION, Costco, Tesco, American Express y Rakuten. La matriz queda como documento vivo y se actualizará antes de decisiones estructurales importantes.

### Patrones que adoptamos

- **Identidad única:** un socio tiene un número estable.
- **Estado claro:** activo / gracia / inactivo.
- **Credencial:** digital primero, pero nunca obligatoria.
- **Descubrimiento:** beneficios visibles y entendibles.
- **Validación:** el aliado debe poder resolver una atención en segundos.
- **Consumo controlado:** cada beneficio tiene una regla y un contador.
- **Historial:** todo uso relevante deja registro.
- **Automatización:** Lina no debe hacer tareas repetitivas.
- **Cercanía:** el Club nace local; la experiencia debe priorizar Chañar.
- **Valor comprobable:** el sistema debe poder mostrar si los beneficios realmente se usan.

## Reglas congeladas

- $5.000 mensuales.
- Mercado Pago principal; efectivo alternativo.
- Transferencia bancaria no prioritaria.
- Lina registra pagos.
- 48 horas de gracia.
- Beneficios no acumulables entre meses.
- QR opcional; nombre + número como alternativa.
- QR no contiene datos personales.
- Market Studio: 10% de descuento, máximo 10 planchas de stickers por mes.
- Estudio Jurídico RH: 1 orientación jurídica mensual de 20 minutos.
- Kiri Fotografía: 3 fotos profesionales mensuales, utilizables juntas.
- Ocarina Manager: 1 charla mensual, individual o para equipos.

## Arquitectura objetivo

**Socios → Membresías → Beneficios → Validación → Usos → Historial → Reportes**

Roles:
- Socio
- Aliado
- Gerencia General (Lina)
- Administrador técnico (solo infraestructura)

Infraestructura objetivo:
- Frontend web mobile-first.
- Base de datos PostgreSQL/Supabase o equivalente.
- Autenticación por rol.
- API de validación.
- Mercado Pago para cobro.
- Automatizaciones de vencimiento/gracia.
- Auditoría de usos y cambios.
- Copias de seguridad.
- Mínima recolección de datos.
- Panel de Lina centrado en “Hoy”.

## Lo que NO se construye todavía

Puntos, niveles, rankings, marketplace, chat interno, billetera, gamificación, app nativa obligatoria, QR obligatorio, métricas decorativas ni funciones que aumenten el trabajo de Lina sin aportar valor.

## V2 actual

Esta versión es un prototipo público funcional de flujo. El contador de usos usa almacenamiento local del navegador para demostrar la lógica; **no es todavía una base de datos real y no debe cargarse con datos reales**.

Próxima capa: base de datos + autenticación + permisos + membresías reales + alta de socios + panel de Lina + registro de pagos + motor de beneficios + auditoría.


## Ley mundial inviolable — Benchmark 10

Antes de incorporar una función, contrastarla con: Club LA NACION, Costco, Tesco Clubcard, American Express Membership Rewards, Rakuten, Club Personal, Club Movistar, Club Comafi, Club Macro y Nectar.

No se copia código, marca ni contenido propietario. Se adaptan patrones operativos: identidad única, credencial, catálogo, validación, consumo, historial, promociones y automatización. Una función entra solo si supera tres pruebas: útil para el socio + útil para el aliado + fácil para Lina.

## Arquitectura objetivo
SOCIOS → MEMBRESÍAS → BENEFICIOS → VALIDACIÓN → USOS → HISTORIAL → REPORTES.

Roles: Socio / Aliado / Gerencia General (Lina Lucero) / Administrador técnico. Infraestructura futura: base segura, autenticación por rol, Mercado Pago, automatizaciones, auditoría y backups.

No se construyen todavía puntos, rankings, gamificación, marketplace, chat interno, billetera ni app obligatoria.