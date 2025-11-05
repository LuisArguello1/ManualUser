import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Alert from "../components/ui/Alert";
import Badge from "../components/ui/Badge";
import Table from "../components/ui/Table";
import BreadCrumbs from "../components/ui/BreadCrumbs";
import "./PageStyles.css";

function Dashboard() {
  return (
    <div className="page-container">
      <BreadCrumbs items={["Inicio", "Dashboard"]} />

      <div className="page-header">
        <i className="fas fa-chart-line page-icon"></i>
        <h1>Dashboard del Sistema</h1>
        <p className="page-description">
          Paneles de control personalizados para usuarios y administradores con
          estadísticas en tiempo real.
        </p>
      </div>

      <div className="page-content">
        {/* SECCIÓN 1: DASHBOARD DE USUARIO (OWNER/VET) */}
        <Section id="dashboard-usuario" title="1. Dashboard de Usuario (OWNER / VET)" icon="fa-home">
          <p className="section-intro">
            Vista personalizada del sistema al iniciar sesión. Diseñado para acceso
            rápido a funciones principales y resumen de información importante.
          </p>

          <Alert type="info">
            <strong>Acceso:</strong> Automático después del login exitoso. También
            disponible desde el menú lateral → "Dashboard".
          </Alert>

          <h3>
            <i className="fas fa-user"></i> Dashboard para OWNER (Propietario de
            Mascotas)
          </h3>

          <Card variant="primary">
            <h4>SECCIÓN 1: ENCABEZADO DE BIENVENIDA</h4>
            <ul>
              <li>
                <strong>Saludo personalizado:</strong> "¡Bienvenido/a, [Nombre]!"
              </li>
              <li>
                <strong>Fecha y hora actual</strong>
              </li>
              <li>
                <strong>Mensaje contextual:</strong> Según hora del día (Buenos
                días/Buenas tardes/Buenas noches)
              </li>
            </ul>
          </Card>

          <Card>
            <h4>SECCIÓN 2: TARJETAS DE ESTADÍSTICAS PERSONALES</h4>
            <p>4 tarjetas con información clave del usuario:</p>
            <Table
              headers={["Tarjeta", "Icono", "Contenido", "Color"]}
              rows={[
                [
                  "Mis Mascotas",
                  "🐶",
                  "Cantidad de mascotas registradas (0/2, 1/2, 2/2)",
                  "Azul",
                ],
                [
                  "Biometría Activa",
                  "📷",
                  "Cantidad de mascotas con biometría registrada vs total",
                  "Verde",
                ],
                [
                  "Escaneos Totales",
                  "🔍",
                  "Total de veces que tus mascotas fueron escaneadas",
                  "Naranja",
                ],
                [
                  "Notificaciones Pendientes",
                  "🔔",
                  "Cantidad de notificaciones sin leer",
                  "Rojo",
                ],
              ]}
            />
          </Card>

          <Card>
            <h4>SECCIÓN 3: MIS MASCOTAS</h4>
            <p>Vista de tarjetas (cards) con cada mascota registrada:</p>
            <ul>
              <li>
                <strong>Foto de perfil</strong>
              </li>
              <li>
                <strong>Nombre</strong>
              </li>
              <li>
                <strong>Raza, Edad, Sexo</strong>
              </li>
              <li>
                <Badge variant="success">✅ Biometría Activa</Badge> o{" "}
                <Badge variant="secondary">❌ Sin Biometría</Badge>
              </li>
              <li>
                <Badge variant="info">🆗 Normal</Badge> o{" "}
                <Badge variant="danger">🚨 PERDIDA</Badge>
              </li>
              <li>
                <strong>Botones de acción rápida:</strong>
                <ul>
                  <li>"Ver Detalles"</li>
                  <li>"Editar"</li>
                  <li>"Generar QR"</li>
                  <li>"Generar Carnet"</li>
                </ul>
              </li>
            </ul>
            <Alert type="warning">
              Si no tiene mascotas: Botón destacado "Registrar Mi Primera Mascota"
              (máximo 2)
            </Alert>
          </Card>

          <Card>
            <h4>SECCIÓN 4: ACCIONES RÁPIDAS</h4>
            <p>Botones grandes con iconos para acciones frecuentes:</p>
            <ul>
              <li>
                <Badge variant="primary">📷 Usar Escáner</Badge> → Reconocer
                mascotas con cámara o QR
              </li>
              <li>
                <Badge variant="success">➕ Registrar Mascota</Badge> → Agregar
                nueva (si &lt;2)
              </li>
              <li>
                <Badge variant="info">🔍 Ver Todas Mis Mascotas</Badge> → Lista
                completa
              </li>
              <li>
                <Badge variant="warning">🚨 Reportar Mascota Perdida</Badge> →
                Alerta en el sistema
              </li>
            </ul>
          </Card>

          <Card>
            <h4>SECCIÓN 5: COMUNIDAD DE MASCOTAS PERDIDAS</h4>
            <p>Feed con últimas mascotas reportadas como perdidas:</p>
            <ul>
              <li>Últimas 5 mascotas perdidas del sistema</li>
              <li>Foto + Nombre + Ubicación + Fecha del reporte</li>
              <li>Botón: "Reportar que la vi"</li>
              <li>Enlace: "Ver todas las mascotas perdidas"</li>
            </ul>
          </Card>

          <Card>
            <h4>SECCIÓN 6: NOTIFICACIONES RECIENTES</h4>
            <p>Últimas 5 notificaciones del usuario:</p>
            <ul>
              <li>Icono según tipo</li>
              <li>Título + Descripción corta</li>
              <li>Timestamp</li>
              <li>Enlace: "Ver todas las notificaciones"</li>
            </ul>
          </Card>

          <h3>
            <i className="fas fa-user-md"></i> Dashboard para VET (Veterinario)
          </h3>

          <Alert type="info">
            Similar al OWNER pero con diferencias en estadísticas y acciones.
          </Alert>

          <Card variant="success">
            <h4>TARJETAS DE ESTADÍSTICAS PARA VET:</h4>
            <Table
              headers={["Tarjeta", "Icono", "Contenido"]}
              rows={[
                [
                  "Total de Mascotas en el Sistema",
                  "🐶",
                  "Cantidad total de mascotas registradas",
                ],
                [
                  "Escaneos Realizados Hoy",
                  "🔍",
                  "Cantidad de escaneos hechos por el vet en el día",
                ],
                [
                  "Mascotas Reconocidas",
                  "✅",
                  "Cantidad de reconocimientos exitosos del vet",
                ],
                [
                  "Notificaciones Pendientes",
                  "🔔",
                  "Notificaciones sin leer",
                ],
              ]}
            />
          </Card>

          <Card variant="success">
            <h4>ACCIONES RÁPIDAS PARA VET:</h4>
            <ul>
              <li>
                <Badge variant="primary">📷 Usar Escáner</Badge> → Reconocer
                cualquier mascota
              </li>
              <li>
                <Badge variant="info">🔍 Buscar Mascota</Badge> → Por nombre, raza,
                propietario
              </li>
              <li>
                <Badge variant="success">📋 Ver Todas las Mascotas</Badge> →
                Catálogo completo
              </li>
              <li>
                <Badge variant="warning">🚨 Ver Mascotas Perdidas</Badge> → Alertas
                activas
              </li>
            </ul>
          </Card>

          <Alert type="success">
            <strong>NOTA:</strong> VET NO puede registrar, editar ni eliminar
            mascotas. Solo visualizar, escanear y consultar información.
          </Alert>
        </Section>

        {/* SECCIÓN 2: DASHBOARD ADMINISTRATIVO */}
        <Section id="dashboard-admin" title="2. Dashboard Administrativo (ADMIN)" icon="fa-user-shield">
          <p className="section-intro">
            Panel completo con estadísticas del sistema, gráficos en tiempo real y
            herramientas de gestión avanzadas.
          </p>

          <Alert type="danger">
            <strong>ACCESO EXCLUSIVO:</strong> Solo usuarios con rol ADMIN pueden
            ver este dashboard.
          </Alert>

          <h3>
            <i className="fas fa-chart-bar"></i> 1. TARJETAS DE ESTADÍSTICAS
            GENERALES
          </h3>
          <p>8 tarjetas principales con métricas del sistema:</p>

          <div className="stats-cards">
            <Card>
              <h4>
                <Badge variant="primary">📊 1. TOTAL DE USUARIOS</Badge>
              </h4>
              <ul>
                <li>
                  <strong>Número total:</strong> Cantidad de usuarios registrados
                </li>
                <li>
                  <strong>Desglose:</strong> ADMIN: X | VET: Y | OWNER: Z
                </li>
                <li>
                  <strong>Gráfico:</strong> Mini pie chart con distribución por rol
                </li>
                <li>
                  <strong>Tendencia:</strong> ↑ +5 nuevos esta semana
                </li>
              </ul>
            </Card>

            <Card>
              <h4>
                <Badge variant="success">🐶 2. TOTAL DE MASCOTAS</Badge>
              </h4>
              <ul>
                <li>
                  <strong>Número total:</strong> Mascotas registradas en el sistema
                </li>
                <li>
                  <strong>Desglose:</strong> Con biometría: X | Sin biometría: Y
                </li>
                <li>
                  <strong>Estado:</strong> Normales: A | Perdidas: B
                </li>
                <li>
                  <strong>Tendencia:</strong> ↑ +12 nuevas este mes
                </li>
              </ul>
            </Card>

            <Card>
              <h4>
                <Badge variant="info">📷 3. BIOMETRÍA ACTIVA</Badge>
              </h4>
              <ul>
                <li>
                  <strong>Usuarios:</strong> Cantidad con biometría facial
                  registrada
                </li>
                <li>
                  <strong>Mascotas:</strong> Cantidad con biometría canina activa
                </li>
                <li>
                  <strong>Porcentaje:</strong> X% de usuarios | Y% de mascotas
                </li>
              </ul>
            </Card>

            <Card>
              <h4>
                <Badge variant="warning">🔍 4. ESCANEOS TOTALES</Badge>
              </h4>
              <ul>
                <li>
                  <strong>Total histórico:</strong> Cantidad de escaneos realizados
                </li>
                <li>
                  <strong>Hoy:</strong> X escaneos
                </li>
                <li>
                  <strong>Esta semana:</strong> Y escaneos
                </li>
                <li>
                  <strong>Tasa de éxito:</strong> Z% reconocimientos exitosos
                </li>
              </ul>
            </Card>

            <Card>
              <h4>
                <Badge variant="danger">🚨 5. MASCOTAS PERDIDAS ACTIVAS</Badge>
              </h4>
              <ul>
                <li>
                  <strong>Actualmente perdidas:</strong> X mascotas
                </li>
                <li>
                  <strong>Encontradas este mes:</strong> Y mascotas
                </li>
                <li>
                  <strong>Tiempo promedio de búsqueda:</strong> Z días
                </li>
              </ul>
            </Card>

            <Card>
              <h4>
                <Badge variant="info">🔔 6. NOTIFICACIONES GENERADAS</Badge>
              </h4>
              <ul>
                <li>
                  <strong>Hoy:</strong> X notificaciones
                </li>
                <li>
                  <strong>Esta semana:</strong> Y notificaciones
                </li>
                <li>
                  <strong>Desglose por tipo:</strong> INFO: A | SUCCESS: B |
                  WARNING: C | ERROR: D
                </li>
              </ul>
            </Card>

            <Card>
              <h4>
                <Badge variant="success">📱 7. CÓDIGOS QR GENERADOS</Badge>
              </h4>
              <ul>
                <li>
                  <strong>Total:</strong> Cantidad de QR generados
                </li>
                <li>
                  <strong>Escaneos de QR:</strong> Cantidad de veces escaneados
                </li>
                <li>
                  <strong>Promedio por mascota:</strong> X escaneos
                </li>
              </ul>
            </Card>

            <Card>
              <h4>
                <Badge variant="primary">🎫 8. CARNETS GENERADOS</Badge>
              </h4>
              <ul>
                <li>
                  <strong>Total:</strong> Carnets digitales creados
                </li>
                <li>
                  <strong>Descargas en PDF:</strong> Cantidad de descargas
                </li>
                <li>
                  <strong>Hoy:</strong> X carnets generados
                </li>
              </ul>
            </Card>
          </div>

          <h3>
            <i className="fas fa-chart-pie"></i> 2. GRÁFICOS Y VISUALIZACIONES
          </h3>
          <p>9 gráficos interactivos para análisis detallado:</p>

          <div className="charts-grid">
            <Card variant="info">
              <h4>
                <i className="fas fa-chart-pie"></i> GRÁFICO 1: DISTRIBUCIÓN DE
                RAZAS
              </h4>
              <ul>
                <li>
                  <strong>Tipo:</strong> Pie Chart (Gráfico Circular)
                </li>
                <li>
                  <strong>Datos:</strong> Cantidad de mascotas por raza
                </li>
                <li>
                  <strong>Categorías:</strong> Bulldog, Chihuahua, Golden
                  Retriever, Otras razas
                </li>
                <li>
                  <strong>Interacción:</strong> Hover muestra cantidad y porcentaje
                </li>
              </ul>
            </Card>

            <Card variant="info">
              <h4>
                <i className="fas fa-chart-line"></i> GRÁFICO 2: ESCANEOS DIARIOS
                (ÚLTIMOS 30 DÍAS)
              </h4>
              <ul>
                <li>
                  <strong>Tipo:</strong> Line Chart (Gráfico de Línea)
                </li>
                <li>
                  <strong>Eje X:</strong> Fecha (último mes)
                </li>
                <li>
                  <strong>Eje Y:</strong> Cantidad de escaneos
                </li>
                <li>
                  <strong>Líneas:</strong> Escaneos totales | Reconocimientos
                  exitosos | Escaneos fallidos
                </li>
                <li>
                  <strong>Colores:</strong> Azul (total), Verde (exitosos), Rojo
                  (fallidos)
                </li>
              </ul>
            </Card>

            <Card variant="info">
              <h4>
                <i className="fas fa-chart-bar"></i> GRÁFICO 3: USUARIOS POR ROL
              </h4>
              <ul>
                <li>
                  <strong>Tipo:</strong> Bar Chart (Gráfico de Barras)
                </li>
                <li>
                  <strong>Categorías:</strong> ADMIN | VET | OWNER
                </li>
                <li>
                  <strong>Datos:</strong> Cantidad de usuarios en cada rol
                </li>
              </ul>
            </Card>

            <Card variant="info">
              <h4>
                <i className="fas fa-chart-area"></i> GRÁFICO 4: REGISTROS DE
                MASCOTAS POR MES
              </h4>
              <ul>
                <li>
                  <strong>Tipo:</strong> Area Chart (Gráfico de Área)
                </li>
                <li>
                  <strong>Eje X:</strong> Últimos 12 meses
                </li>
                <li>
                  <strong>Eje Y:</strong> Cantidad de registros
                </li>
                <li>
                  <strong>Tendencia:</strong> Crecimiento acumulado
                </li>
              </ul>
            </Card>

            <Card variant="info">
              <h4>
                <i className="fas fa-chart-bar"></i> GRÁFICO 5: ETAPAS DE VIDA
              </h4>
              <ul>
                <li>
                  <strong>Tipo:</strong> Horizontal Bar Chart
                </li>
                <li>
                  <strong>Categorías:</strong> Cachorro | Joven | Adulto | Senior
                </li>
                <li>
                  <strong>Datos:</strong> Cantidad de mascotas en cada etapa
                </li>
              </ul>
            </Card>

            <Card variant="info">
              <h4>
                <i className="fas fa-chart-pie"></i> GRÁFICO 6: CONDICIÓN CORPORAL
              </h4>
              <ul>
                <li>
                  <strong>Tipo:</strong> Doughnut Chart (Rosquilla)
                </li>
                <li>
                  <strong>Categorías:</strong> Delgado | Normal/Ideal |
                  Sobrepeso/Obeso
                </li>
                <li>
                  <strong>Colores:</strong> Amarillo, Verde, Rojo
                </li>
              </ul>
            </Card>

            <Card variant="info">
              <h4>
                <i className="fas fa-chart-line"></i> GRÁFICO 7: ADOPCIÓN DE
                BIOMETRÍA
              </h4>
              <ul>
                <li>
                  <strong>Tipo:</strong> Line Chart con 2 líneas
                </li>
                <li>
                  <strong>Línea 1:</strong> % Usuarios con biometría facial
                </li>
                <li>
                  <strong>Línea 2:</strong> % Mascotas con biometría canina
                </li>
                <li>
                  <strong>Periodo:</strong> Últimos 6 meses
                </li>
              </ul>
            </Card>

            <Card variant="info">
              <h4>
                <i className="fas fa-chart-bar"></i> GRÁFICO 8: NOTIFICACIONES POR
                CATEGORÍA
              </h4>
              <ul>
                <li>
                  <strong>Tipo:</strong> Stacked Bar Chart (Barras Apiladas)
                </li>
                <li>
                  <strong>Categorías:</strong> SYSTEM | MASCOTA | USER | SECURITY
                </li>
                <li>
                  <strong>Segmentos:</strong> INFO, SUCCESS, WARNING, ERROR
                </li>
                <li>
                  <strong>Periodo:</strong> Última semana (1 barra por día)
                </li>
              </ul>
            </Card>

            <Card variant="info">
              <h4>
                <i className="fas fa-chart-area"></i> GRÁFICO 9: MASCOTAS PERDIDAS
                VS ENCONTRADAS
              </h4>
              <ul>
                <li>
                  <strong>Tipo:</strong> Area Chart con 2 áreas
                </li>
                <li>
                  <strong>Área 1 (Roja):</strong> Mascotas reportadas como perdidas
                </li>
                <li>
                  <strong>Área 2 (Verde):</strong> Mascotas reportadas como
                  encontradas
                </li>
                <li>
                  <strong>Periodo:</strong> Últimos 6 meses
                </li>
                <li>
                  <strong>Métrica adicional:</strong> Tasa de recuperación (%)
                </li>
              </ul>
            </Card>
          </div>

          <h3>
            <i className="fas fa-cogs"></i> 3. HERRAMIENTAS DE ADMINISTRACIÓN
          </h3>
          <Card variant="primary">
            <h4>ACCIONES RÁPIDAS DEL ADMIN:</h4>
            <ul>
              <li>
                <Badge variant="success">➕ Crear Nuevo Usuario</Badge>
              </li>
              <li>
                <Badge variant="info">👥 Gestionar Usuarios</Badge> → Lista
                completa con edición/eliminación
              </li>
              <li>
                <Badge variant="warning">🐶 Gestionar Mascotas</Badge> → Eliminar,
                editar cualquier mascota
              </li>
              <li>
                <Badge variant="danger">🗑️ Eliminar Usuarios Inactivos</Badge> →
                Sin login en 6 meses
              </li>
              <li>
                <Badge variant="primary">📊 Exportar Reportes</Badge> → CSV/PDF de
                estadísticas
              </li>
              <li>
                <Badge variant="info">🔒 Logs de Seguridad</Badge> → Historial de
                accesos
              </li>
              <li>
                <Badge variant="success">💾 Backup del Sistema</Badge> → Respaldo
                de base de datos
              </li>
            </ul>
          </Card>

          <h3>
            <i className="fas fa-table"></i> 4. TABLAS DE DATOS
          </h3>

          <Card>
            <h4>TABLA 1: ÚLTIMOS USUARIOS REGISTRADOS (10 más recientes)</h4>
            <Table
              headers={[
                "Usuario",
                "Email",
                "Rol",
                "Fecha Registro",
                "Biometría",
                "Acciones",
              ]}
              rows={[
                [
                  "Juan Pérez",
                  "juan@email.com",
                  "OWNER",
                  "2025-01-15",
                  "✅",
                  "Ver | Editar | Eliminar",
                ],
                [
                  "María García",
                  "maria@email.com",
                  "VET",
                  "2025-01-14",
                  "❌",
                  "Ver | Editar | Eliminar",
                ],
              ]}
            />
          </Card>

          <Card>
            <h4>TABLA 2: ÚLTIMAS MASCOTAS REGISTRADAS (10 más recientes)</h4>
            <Table
              headers={[
                "Mascota",
                "Raza",
                "Propietario",
                "Fecha Registro",
                "Biometría",
                "Estado",
              ]}
              rows={[
                [
                  "Max",
                  "Golden Retriever",
                  "Juan Pérez",
                  "2025-01-15",
                  "✅",
                  "Normal",
                ],
                [
                  "Luna",
                  "Chihuahua",
                  "María García",
                  "2025-01-14",
                  "❌",
                  "Normal",
                ],
              ]}
            />
          </Card>

          <Card>
            <h4>TABLA 3: MASCOTAS PERDIDAS ACTUALMENTE (Tiempo real)</h4>
            <Table
              headers={[
                "Mascota",
                "Propietario",
                "Ubicación",
                "Fecha Reporte",
                "Días Perdida",
                "Acciones",
              ]}
              rows={[
                [
                  "Rocky",
                  "Carlos López",
                  "Zona Norte",
                  "2025-01-10",
                  "5 días",
                  "Ver Detalles | Contactar Dueño",
                ],
              ]}
            />
          </Card>

          <Alert type="success">
            <strong>ACTUALIZACIÓN AUTOMÁTICA:</strong> Todas las estadísticas,
            gráficos y tablas se actualizan en tiempo real sin necesidad de
            recargar la página.
          </Alert>
        </Section>

        {/* SECCIÓN 3: PERSONALIZACIÓN */}
        <Section id="personalizacion" title="3. Personalización del Dashboard" icon="fa-sliders-h">
          <p className="section-intro">
            Los usuarios pueden personalizar la visualización de su dashboard según
            sus preferencias.
          </p>

          <h3>
            <i className="fas fa-cog"></i> Opciones de Personalización (OWNER/VET)
          </h3>
          <Card>
            <ul>
              <li>
                <strong>Reordenar secciones:</strong> Drag and drop para cambiar
                orden de tarjetas
              </li>
              <li>
                <strong>Ocultar/Mostrar secciones:</strong> Toggle para cada
                sección
              </li>
              <li>
                <strong>Tamaño de tarjetas:</strong> Pequeño, Mediano, Grande
              </li>
              <li>
                <strong>Notificaciones automáticas:</strong> Activar/Desactivar
                alertas emergentes
              </li>
            </ul>
          </Card>

          <h3>
            <i className="fas fa-chart-line"></i> Opciones Adicionales para ADMIN
          </h3>
          <Card variant="primary">
            <ul>
              <li>
                <strong>Seleccionar gráficos visibles:</strong> Elegir cuáles de
                los 9 gráficos mostrar
              </li>
              <li>
                <strong>Periodo de datos:</strong> Última semana, Último mes,
                Últimos 3 meses, Último año
              </li>
              <li>
                <strong>Frecuencia de actualización:</strong> Tiempo real, Cada 5
                min, Cada 15 min, Manual
              </li>
              <li>
                <strong>Exportar configuración:</strong> Guardar preferencias para
                otros administradores
              </li>
            </ul>
          </Card>

          <Alert type="info">
            <strong>Persistencia:</strong> Todas las configuraciones se guardan
            automáticamente y se mantienen entre sesiones.
          </Alert>
        </Section>
      </div>
    </div>
  );
}

export default Dashboard;
