import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Alert from "../components/ui/Alert";
import Badge from "../components/ui/Badge";
import Table from "../components/ui/Table";
import StepList from "../components/ui/StepList";
import CodeBlock from "../components/ui/CodeBlock";
import BreadCrumbs from "../components/ui/BreadCrumbs";
import "./PageStyles.css";

function Funcionalidades() {
  return (
    <div className="page-container">
      <BreadCrumbs items={["Inicio", "Funcionalidades"]} />

      <div className="page-header">
        <i className="fas fa-cogs page-icon"></i>
        <h1>Funcionalidades del Sistema</h1>
        <p className="page-description">
          Escáner de reconocimiento, generación de códigos QR, carnets digitales y
          sistema de mascotas perdidas.
        </p>
      </div>

      <div className="page-content">
        {/* SECCIÓN 1: ESCÁNER DE RECONOCIMIENTO */}
        <Section id="scanner" title="1. Escáner de Reconocimiento de Mascotas" icon="fa-camera">
          <p className="section-intro">
            <strong>Propósito:</strong> Identificar mascotas mediante reconocimiento
            facial
          </p>

          <h3>
            <i className="fas fa-clipboard-check"></i> Requisitos para Reconocimiento
            Facial
          </h3>
          <Card variant="info">
            <h4>MASCOTA A IDENTIFICAR:</h4>
            <ul>
              <li>✓ Debe tener biometría registrada (≥5 imágenes)</li>
              <li>✓ Modelo global debe estar entrenado</li>
            </ul>

            <h4>USUARIO DEL ESCÁNER:</h4>
            <ul>
              <li>Puede ser cualquier usuario autenticado</li>
              <li>No necesita ser el propietario</li>
              <li>
                Útil para: Veterinarios, refugios, personas que encuentran mascota
              </li>
            </ul>
          </Card>

          <h3>
            <i className="fas fa-qrcode"></i> Métodos de Escaneo
          </h3>
          <div className="methods-grid">
            <Card variant="primary">
              <h4>
                <i className="fas fa-camera"></i> MODO 1: RECONOCIMIENTO FACIAL
              </h4>
              <p>Captura foto del perro y el sistema lo identifica automáticamente</p>
            </Card>

            <Card variant="success">
              <h4>
                <i className="fas fa-qrcode"></i> MODO 2: ESCANEO DE QR
              </h4>
              <p>Lee el código QR de la placa/carnet de la mascota</p>
            </Card>
          </div>

          <h3>
            <i className="fas fa-tasks"></i> Proceso de Reconocimiento Facial
          </h3>

          <Card>
            <h4>PASO 1: CAPTURA DE IMAGEN</h4>
            <p>
              <strong>A) TOMAR FOTO CON CÁMARA:</strong>
            </p>
            <ul>
              <li>Sistema activa cámara web</li>
              <li>Usuario posiciona el rostro del perro</li>
              <li>Presiona "Capturar y Reconocer"</li>
            </ul>

            <p>
              <strong>B) SUBIR FOTO EXISTENTE:</strong>
            </p>
            <ul>
              <li>Selecciona archivo desde dispositivo</li>
              <li>Vista previa se muestra</li>
              <li>Presiona "Reconocer"</li>
            </ul>
          </Card>

          <Card>
            <h4>PASO 2: PROCESAMIENTO</h4>
            <StepList
              steps={[
                {
                  number: 1,
                  title: 'Loading: "Identificando mascota..."',
                  icon: "fa-spinner",
                },
                {
                  number: 2,
                  title: "Extracción de características faciales",
                  description: "EfficientNet B0 genera descriptor de 1,280 dimensiones",
                  icon: "fa-brain",
                },
                {
                  number: 3,
                  title: "Comparación con base de datos",
                  description:
                    "Clasificador K-NN compara con todas las mascotas registradas",
                  icon: "fa-database",
                },
                {
                  number: 4,
                  title: "Cálculo de similitud",
                  description: "Se determina el porcentaje de confianza",
                  icon: "fa-percentage",
                },
              ]}
            />
          </Card>

          <h3>
            <i className="fas fa-chart-bar"></i> Resultados del Reconocimiento
          </h3>

          <Card variant="success">
            <h4>
              <i className="fas fa-check-circle"></i> CASO A: IDENTIFICACIÓN
              EXITOSA (≥30%)
            </h4>
            <p>Panel de resultados muestra:</p>
            <div className="result-panel">
              <ul>
                <li>
                  <Badge variant="success">✅ MASCOTA IDENTIFICADA</Badge>
                </li>
                <li>Foto de perfil grande</li>
                <li>Nombre de la mascota</li>
                <li>Confianza: XX.X% (Alta/Media/Baja)</li>
                <li>
                  <strong>📊 INFORMACIÓN:</strong>
                  <ul>
                    <li>Raza</li>
                    <li>Edad</li>
                    <li>Sexo</li>
                    <li>Condición corporal</li>
                    <li>Características especiales</li>
                  </ul>
                </li>
                <li>
                  <strong>👤 PROPIETARIO:</strong>
                  <ul>
                    <li>Nombre completo</li>
                    <li>Email</li>
                    <li>Teléfono</li>
                  </ul>
                </li>
                <li>
                  <strong>🚨 ESTADO:</strong> NORMAL o ⚠️ REPORTADA COMO PERDIDA
                </li>
              </ul>
            </div>

            <Alert type="warning">
              Si está perdida, aparece botón destacado:{" "}
              <Badge variant="danger">📍 Reportar como Encontrada</Badge>
            </Alert>
          </Card>

          <Card variant="danger">
            <h4>
              <i className="fas fa-times-circle"></i> CASO B: NO IDENTIFICADA
              (&lt;30%)
            </h4>
            <p>Mensaje: "No se pudo reconocer a esta mascota"</p>
            <h5>Posibles razones:</h5>
            <ul>
              <li>No tiene biometría registrada</li>
              <li>Foto de baja calidad</li>
              <li>Ángulo difícil</li>
              <li>Cambios físicos (corte de pelo)</li>
            </ul>
            <h5>Sugerencias:</h5>
            <ul>
              <li>Toma otra foto de mejor calidad</li>
              <li>Prueba otro ángulo</li>
            </ul>
          </Card>

          <h3>
            <i className="fas fa-map-marker-alt"></i> Reportar Mascota como
            Encontrada
          </h3>
          <Alert type="info">
            Disponible solo si: Mascota está reportada como perdida
          </Alert>

          <StepList
            steps={[
              {
                number: 1,
                title: 'Botón destacado: "📍 Reportar como Encontrada"',
                icon: "fa-hand-pointer",
              },
              {
                number: 2,
                title: "Modal se abre solicitando:",
                description:
                  "Confirmación + Opción de compartir ubicación GPS (opcional)",
                icon: "fa-location-arrow",
              },
              {
                number: 3,
                title: "Si usuario permite ubicación:",
                description:
                  "Se capturan coordenadas GPS del dispositivo para enviar al propietario",
                icon: "fa-map-marked-alt",
              },
              {
                number: 4,
                title: "Al confirmar:",
                description:
                  "Sistema registra el encuentro + Envía notificación in-app al propietario + Envía EMAIL al propietario con ubicación y detalles",
                icon: "fa-envelope",
              },
            ]}
          />

          <Card variant="success">
            <h4>PROPIETARIO RECIBE:</h4>
            <ul>
              <li>
                <strong>Email:</strong> "✅ ¡Alguien encontró a [Nombre]!"
              </li>
              <li>Coordenadas GPS donde fue encontrada</li>
              <li>Timestamp del encuentro</li>
              <li>Información del dispositivo (IP, navegador)</li>
            </ul>
          </Card>

          <h3>
            <i className="fas fa-database"></i> Registro de Escaneos
          </h3>
          <p>Cada reconocimiento exitoso se registra en la base de datos:</p>
          <Table
            headers={["Campo", "Descripción"]}
            rows={[
              ["mascota_id", "ID de la mascota reconocida"],
              ["fecha_reconocimiento", "Timestamp del escaneo"],
              ["confianza", "Porcentaje de confianza (%)"],
              ["metodo", "facial"],
              ["usuario_escaner_id", "Usuario que realizó el escaneo (opcional)"],
              [
                "ubicacion",
                "Coordenadas GPS si se autorizó geolocalización",
              ],
            ]}
          />
        </Section>

        {/* SECCIÓN 2: CÓDIGOS QR */}
        <Section id="codigos-qr" title="2. Generación de Código QR" icon="fa-qrcode">
          <h3>
            <i className="fas fa-info-circle"></i> Propósito
          </h3>
          <p>Generar código QR que contiene:</p>
          <ul>
            <li>Enlace público a información de la mascota</li>
            <li>
              <strong>NO requiere login</strong> para ver
            </li>
            <li>Útil para: Placas de identificación, carnets, compartir</li>
          </ul>

          <h3>
            <i className="fas fa-tasks"></i> Proceso de Generación
          </h3>
          <StepList
            steps={[
              {
                number: 1,
                title: "Usuario accede desde detalle de mascota",
                icon: "fa-dog",
              },
              {
                number: 2,
                title: 'Presiona "Generar Código QR"',
                icon: "fa-mouse-pointer",
              },
              {
                number: 3,
                title: "Sistema genera:",
                description:
                  "URL pública: /mascota/public/<uuid>/ + Imagen QR en formato PNG (512x512px) + Vista previa en pantalla",
                icon: "fa-cogs",
              },
            ]}
          />

          <h3>
            <i className="fas fa-download"></i> Opciones Disponibles
          </h3>
          <div className="options-grid">
            <Card>
              <h4>
                <i className="fas fa-eye"></i> VISTA PREVIA
              </h4>
              <ul>
                <li>QR se muestra en pantalla</li>
                <li>Código en formato base64</li>
                <li>Vista previa del enlace</li>
              </ul>
            </Card>

            <Card>
              <h4>
                <i className="fas fa-share-alt"></i> COMPARTIR
              </h4>
              <ul>
                <li>Copiar enlace público</li>
                <li>Compartir por WhatsApp</li>
                <li>Compartir por email</li>
                <li>Compartir en redes sociales</li>
              </ul>
            </Card>
          </div>

          <h3>
            <i className="fas fa-globe"></i> Información Pública (vía QR)
          </h3>
          <Alert type="info">
            Acceso: Sin login requerido - Cualquier persona puede ver la información
          </Alert>

          <div className="two-column-list">
            <Card variant="success">
              <h4>✓ INFORMACIÓN VISIBLE:</h4>
              <ul>
                <li>Nombre de la mascota</li>
                <li>Foto de perfil</li>
                <li>Raza</li>
                <li>Edad</li>
                <li>Sexo</li>
                <li>Color</li>
                <li>Características especiales</li>
                <li>
                  Información de contacto del propietario:
                  <ul>
                    <li>Nombre</li>
                    <li>Email</li>
                    <li>Teléfono</li>
                  </ul>
                </li>
                <li>Estado (perdida o normal)</li>
              </ul>
            </Card>

            <Card variant="danger">
              <h4>✗ INFORMACIÓN NO VISIBLE:</h4>
              <ul>
                <li>Peso</li>
                <li>Condición corporal</li>
                <li>Fecha de nacimiento exacta</li>
                <li>Historial veterinario</li>
              </ul>
            </Card>
          </div>

          <Alert type="danger">
            <strong>SI MASCOTA ESTÁ PERDIDA:</strong> Alerta destacada en rojo +
            Botón: "Reportar como Encontrada" + Proceso igual que en escáner
          </Alert>
        </Section>

        {/* SECCIÓN 3: CARNETS */}
        <Section id="carnets" title="3. Generación de Carnets" icon="fa-id-card">
          <h3>
            <i className="fas fa-info-circle"></i> Propósito
          </h3>
          <p>
            Generar carnet digital/físico de identificación de la mascota, similar
            a una cédula de identidad.
          </p>

          <h3>
            <i className="fas fa-list"></i> Lista de Carnets
          </h3>
          <p>Vista: Tarjetas de todas las mascotas del usuario</p>
          <Card>
            <h4>Cada tarjeta muestra:</h4>
            <ul>
              <li>Vista previa del carnet</li>
              <li>Nombre de la mascota</li>
              <li>
                Acciones:
                <ul>
                  <li>Ver carnet</li>
                  <li>Descargar PDF</li>
                  <li>Imprimir</li>
                </ul>
              </li>
            </ul>
          </Card>

          <h3>
            <i className="fas fa-cogs"></i> Opciones del Carnet
          </h3>
          <div className="carnet-options">
            <Card variant="info">
              <h4>
                <i className="fas fa-eye"></i> VER CARNET
              </h4>
              <ul>
                <li>Vista completa en pantalla</li>
                <li>Diseño responsivo</li>
                <li>Todos los datos visibles</li>
              </ul>
            </Card>

            <Card variant="success">
              <h4>
                <i className="fas fa-file-pdf"></i> DESCARGAR PDF
              </h4>
              <ul>
                <li>Formato: PDF de alta calidad</li>
                <li>Tamaño: A4 o carta</li>
                <li>Listo para imprimir</li>
                <li>Nombre archivo: carnet_[nombre_mascota].pdf</li>
              </ul>
            </Card>

            <Card variant="warning">
              <h4>
                <i className="fas fa-print"></i> IMPRIMIR
              </h4>
              <ul>
                <li>Abre diálogo de impresión</li>
                <li>CSS optimizado para impresión</li>
                <li>Sin márgenes innecesarios</li>
                <li>Colores ajustados para tinta</li>
              </ul>
            </Card>
          </div>

          <h3>
            <i className="fas fa-lightbulb"></i> Uso del Carnet
          </h3>
          <Card variant="success">
            <h4>UTILIDAD:</h4>
            <ul>
              <li>✓ Identificación física de la mascota</li>
              <li>✓ Llevar en collar o arnés</li>
              <li>✓ Presentar en veterinarias</li>
              <li>✓ Trámites de viaje</li>
              <li>✓ Registros municipales</li>
              <li>✓ Identificación en caso de pérdida</li>
            </ul>
          </Card>
        </Section>

        {/* SECCIÓN 4: MASCOTAS PERDIDAS */}
        <Section
          id="mascotas-perdidas"
          title="4. Sistema de Mascotas Perdidas"
          icon="fa-exclamation-triangle"
        >
          <h3>
            <i className="fas fa-plus-circle"></i> Reportar Mascota como Perdida
          </h3>

          <StepList
            steps={[
              {
                number: 1,
                title: 'Detalle de mascota → Botón "Reportar como Perdida"',
                icon: "fa-hand-pointer",
              },
              {
                number: 2,
                title: "Modal de confirmación se abre",
                description:
                  '¿Estás seguro de reportar a [Nombre] como perdida? + Campo opcional: Ubicación donde se perdió (texto libre) + Botón: "Confirmar Reporte"',
                icon: "fa-question-circle",
              },
              {
                number: 3,
                title: "Al confirmar:",
                description:
                  "Campo reportar_perdida = True + fecha_reporte_perdida = timestamp actual + ubicacion_perdida = texto ingresado + Estado cambia en toda la interfaz + NOTIFICACIÓN IN-APP a TODOS los usuarios del sistema + EMAIL a TODOS los usuarios del sistema",
                icon: "fa-bell",
              },
              {
                number: 4,
                title: "Confirmación al propietario:",
                description:
                  'Mensaje: "[Nombre] ha sido reportada como perdida" + Notificación: "Se ha enviado alerta a todos los usuarios"',
                icon: "fa-check-circle",
              },
            ]}
          />

          <Alert type="danger">
            <strong>EMAIL MASIVO:</strong>
            <ul>
              <li>
                Asunto: "🚨 Alerta: [Nombre mascota] ha sido reportada como
                perdida"
              </li>
              <li>Foto de la mascota</li>
              <li>Nombre y descripción</li>
              <li>Ubicación donde se perdió</li>
              <li>Datos de contacto del propietario</li>
              <li>Características especiales</li>
            </ul>
          </Alert>

          <h3>
            <i className="fas fa-eye"></i> Visualización de Mascotas Perdidas
          </h3>

          <Card>
            <h4>UBICACIONES:</h4>
            <ol>
              <li>
                <strong>DASHBOARD GENERAL</strong> (todos los usuarios):
                <ul>
                  <li>Sección destacada: "Mascotas Perdidas (Comunidad)"</li>
                  <li>Tarjetas con foto, nombre, ubicación</li>
                  <li>Badge rojo: "🚨 PERDIDA"</li>
                </ul>
              </li>
              <li>
                <strong>DASHBOARD ADMIN:</strong>
                <ul>
                  <li>Estadística: Total de mascotas perdidas actualmente</li>
                  <li>Historial de mascotas perdidas (resueltas)</li>
                  <li>Tiempo promedio de localización</li>
                </ul>
              </li>
              <li>
                <strong>LISTA DE MASCOTAS</strong> (propietario):
                <ul>
                  <li>Tarjeta con borde rojo parpadeante</li>
                  <li>Badge: "🚨 PERDIDA"</li>
                  <li>Botón: "Marcar como Encontrada"</li>
                </ul>
              </li>
            </ol>
          </Card>

          <h3>
            <i className="fas fa-search"></i> Cuando Alguien Encuentra la Mascota
          </h3>

          <Card variant="success">
            <h4>ESCENARIO A: VÍA ESCÁNER</h4>
            <ol>
              <li>Alguien usa el escáner (facial)</li>
              <li>Mascota es identificada</li>
              <li>Sistema detecta: mascota.reportar_perdida = True</li>
              <li>
                Alerta destacada en pantalla: "⚠️ ESTA MASCOTA ESTÁ REPORTADA COMO
                PERDIDA"
              </li>
              <li>Botón grande: "Reportar como Encontrada"</li>
              <li>Proceso descrito en sección 1 (Scanner)</li>
            </ol>
          </Card>

          <h3>
            <i className="fas fa-envelope"></i> Notificación al Propietario
          </h3>

          <Card variant="success">
            <h4>CUANDO ALGUIEN REPORTA ENCONTRARLA:</h4>

            <h5>EMAIL:</h5>
            <ul>
              <li>Asunto: "✅ ¡Alguien encontró a [Nombre]!"</li>
              <li>
                Contenido:
                <ul>
                  <li>Mensaje de buenas noticias</li>
                  <li>Coordenadas GPS (si se compartieron)</li>
                  <li>Timestamp del reporte</li>
                  <li>Link al mapa de ubicación</li>
                  <li>Instrucciones para contactar</li>
                </ul>
              </li>
            </ul>

            <h5>NOTIFICACIÓN IN-APP:</h5>
            <ul>
              <li>Alerta destacada (notificación SUCCESS)</li>
              <li>Título: "¡Alguien encontró a [Nombre]!"</li>
              <li>
                Mensaje: "Alguien reportó haber encontrado a [Nombre] cerca de
                [coordenadas]. Revisa tu email para más detalles."
              </li>
              <li>Icono: ✅ verde parpadeante</li>
            </ul>
          </Card>

          <h3>
            <i className="fas fa-check-double"></i> Marcar como Encontrada
            (Propietario)
          </h3>

          <StepList
            steps={[
              {
                number: 1,
                title: "Propietario recupera a su mascota",
                icon: "fa-dog",
              },
              {
                number: 2,
                title: "Va a detalle de mascota",
                icon: "fa-info-circle",
              },
              {
                number: 3,
                title: 'Botón: "Marcar como Encontrada"',
                icon: "fa-hand-pointer",
              },
              {
                number: 4,
                title: "Modal de confirmación",
                icon: "fa-question-circle",
              },
              {
                number: 5,
                title: "Al confirmar:",
                description:
                  "reportar_perdida = False + fecha_reporte_perdida = null + ubicacion_perdida = null + Estado se actualiza en toda la interfaz + Notificación de éxito + Desaparece de alertas de comunidad",
                icon: "fa-check-circle",
              },
            ]}
          />

          <h3>
            <i className="fas fa-chart-line"></i> Estadísticas (Admin)
          </h3>
          <p>Dashboard administrativo muestra:</p>
          <ul>
            <li>Total de mascotas perdidas actualmente</li>
            <li>Historial de mascotas perdidas (resueltas)</li>
            <li>Tiempo promedio de localización</li>
            <li>Tasa de éxito de recuperación</li>
            <li>Usuarios más activos en reportes</li>
          </ul>
        </Section>
      </div>
    </div>
  );
}

export default Funcionalidades;
