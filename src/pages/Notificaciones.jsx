import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Alert from "../components/ui/Alert";
import Badge from "../components/ui/Badge";
import Table from "../components/ui/Table";
import BreadCrumbs from "../components/ui/BreadCrumbs";
import "./PageStyles.css";

function Notificaciones() {
  return (
    <div className="page-container">
      <BreadCrumbs items={["Inicio", "Sistema de Notificaciones"]} />

      <div className="page-header">
        <i className="fas fa-bell page-icon"></i>
        <h1>Sistema de Notificaciones</h1>
        <p className="page-description">
          Mantente informado sobre eventos importantes del sistema con
          notificaciones en tiempo real y alertas por email.
        </p>
      </div>

      <div className="page-content">
        {/* SECCIÓN 1: TIPOS DE NOTIFICACIONES */}
        <Section id="tipos" title="1. Tipos de Notificaciones por Nivel" icon="fa-tags">
          <p className="section-intro">
            El sistema clasifica las notificaciones en 4 niveles de severidad para
            ayudarte a identificar la importancia de cada mensaje.
          </p>

          <div className="notification-types">
            <Card variant="info">
              <h3>
                <Badge variant="info">INFO</Badge> Informativa
              </h3>
              <p>
                <strong>Color:</strong> Azul
              </p>
              <p>
                <strong>Icono:</strong> <i className="fas fa-info-circle"></i>
              </p>
              <p>
                <strong>Descripción:</strong> Mensajes informativos generales que
                no requieren acción inmediata.
              </p>
              <h4>Ejemplos:</h4>
              <ul>
                <li>"Tu perfil ha sido actualizado correctamente"</li>
                <li>"Nueva mascota registrada exitosamente"</li>
                <li>"Código QR generado para tu mascota"</li>
                <li>"Carnet digital creado correctamente"</li>
              </ul>
            </Card>

            <Card variant="success">
              <h3>
                <Badge variant="success">SUCCESS</Badge> Éxito
              </h3>
              <p>
                <strong>Color:</strong> Verde
              </p>
              <p>
                <strong>Icono:</strong> <i className="fas fa-check-circle"></i>
              </p>
              <p>
                <strong>Descripción:</strong> Confirmación de acciones completadas
                exitosamente.
              </p>
              <h4>Ejemplos:</h4>
              <ul>
                <li>"¡Tu mascota ha sido reconocida por el escáner!"</li>
                <li>"Registro biométrico completado (15/20 imágenes)"</li>
                <li>"¡Tu mascota fue escaneada exitosamente!"</li>
                <li>"Cambio de contraseña realizado correctamente"</li>
                <li>"Biometría facial actualizada exitosamente"</li>
              </ul>
            </Card>

            <Card variant="warning">
              <h3>
                <Badge variant="warning">WARNING</Badge> Advertencia
              </h3>
              <p>
                <strong>Color:</strong> Amarillo/Naranja
              </p>
              <p>
                <strong>Icono:</strong>{" "}
                <i className="fas fa-exclamation-triangle"></i>
              </p>
              <p>
                <strong>Descripción:</strong> Situaciones que requieren atención
                pero no son críticas.
              </p>
              <h4>Ejemplos:</h4>
              <ul>
                <li>
                  "Has alcanzado el límite de 2 mascotas. No puedes registrar más."
                </li>
                <li>
                  "El reconocimiento biométrico tiene baja confianza. Considera
                  agregar más imágenes."
                </li>
                <li>
                  "No tienes registro biométrico. Tus funcionalidades están
                  limitadas."
                </li>
                <li>"Tu mascota no fue reconocida con certeza (60% confianza)"</li>
                <li>"Recomendamos cambiar tu contraseña periódicamente"</li>
              </ul>
            </Card>

            <Card variant="danger">
              <h3>
                <Badge variant="danger">ERROR</Badge> Error/Crítico
              </h3>
              <p>
                <strong>Color:</strong> Rojo
              </p>
              <p>
                <strong>Icono:</strong>{" "}
                <i className="fas fa-exclamation-circle"></i>
              </p>
              <p>
                <strong>Descripción:</strong> Problemas críticos que requieren
                acción inmediata o eventos importantes.
              </p>
              <h4>Ejemplos:</h4>
              <ul>
                <li>
                  "🚨 ALERTA: Tu mascota ha sido reportada como perdida por otro
                  usuario"
                </li>
                <li>
                  "⚠️ Intento de inicio de sesión fallido en tu cuenta desde
                  ubicación desconocida"
                </li>
                <li>
                  "❌ Error al procesar la imagen. No se detectó un perro en la
                  foto."
                </li>
                <li>"🔒 Tu cuenta ha sido bloqueada temporalmente por seguridad"</li>
                <li>"🚫 No tienes permisos para realizar esta acción"</li>
              </ul>
            </Card>
          </div>
        </Section>

        {/* SECCIÓN 2: CATEGORÍAS */}
        <Section id="categorias" title="2. Categorías de Notificaciones" icon="fa-folder-open">
          <p className="section-intro">
            Además del nivel, las notificaciones se clasifican por categoría según
            el módulo del sistema que las genera.
          </p>

          <Table
            headers={[
              "Categoría",
              "Icono",
              "Descripción",
              "Eventos Típicos",
              "Usuarios Afectados",
            ]}
            rows={[
              [
                "SYSTEM",
                "🖥️",
                "Notificaciones del sistema",
                "Mantenimiento, actualizaciones, cambios de configuración",
                "Todos",
              ],
              [
                "MASCOTA",
                "🐶",
                "Eventos relacionados con mascotas",
                "Registro, edición, escaneo, biometría, reporte de pérdida/encuentro",
                "Propietario específico",
              ],
              [
                "USER",
                "👤",
                "Gestión de cuenta de usuario",
                "Cambio de perfil, contraseña, biometría facial, eliminación de cuenta",
                "Usuario específico",
              ],
              [
                "SECURITY",
                "🔒",
                "Seguridad y accesos",
                "Inicios de sesión, intentos fallidos, bloqueos, cambios de permisos",
                "Usuario específico + ADMIN",
              ],
            ]}
          />

          <h3>
            <i className="fas fa-filter"></i> Filtros Disponibles en Panel de
            Notificaciones
          </h3>
          <Card>
            <ul>
              <li>
                <strong>Por Nivel:</strong> INFO, SUCCESS, WARNING, ERROR
              </li>
              <li>
                <strong>Por Categoría:</strong> SYSTEM, MASCOTA, USER, SECURITY
              </li>
              <li>
                <strong>Por Estado:</strong> Leídas / No leídas
              </li>
              <li>
                <strong>Por Fecha:</strong> Hoy, Última semana, Último mes,
                Personalizado
              </li>
            </ul>
          </Card>
        </Section>

        {/* SECCIÓN 3: EVENTOS QUE GENERAN NOTIFICACIONES */}
        <Section id="eventos" title="3. Eventos que Generan Notificaciones" icon="fa-bolt">
          <Alert type="info">
            El sistema genera notificaciones automáticamente cuando ocurren estos
            eventos. No requieren configuración previa.
          </Alert>

          <div className="events-grid">
            <Card>
              <h4>
                <i className="fas fa-user-plus"></i> AUTENTICACIÓN Y REGISTRO
              </h4>
              <ul>
                <li>✓ Registro exitoso de usuario</li>
                <li>✓ Login exitoso</li>
                <li>✓ Intento de login fallido</li>
                <li>✓ Recuperación de contraseña solicitada</li>
                <li>✓ Contraseña cambiada exitosamente</li>
                <li>✓ Email de recuperación enviado</li>
              </ul>
            </Card>

            <Card>
              <h4>
                <i className="fas fa-camera"></i> BIOMETRÍA FACIAL DE USUARIO
              </h4>
              <ul>
                <li>✓ Registro biométrico iniciado</li>
                <li>
                  ✓ X de 20 imágenes capturadas (cada captura genera
                  notificación)
                </li>
                <li>✓ Modelo biométrico entrenado exitosamente</li>
                <li>✓ Reconocimiento facial exitoso en login</li>
                <li>✓ Reconocimiento facial fallido (baja confianza)</li>
                <li>✓ Biometría eliminada del sistema</li>
              </ul>
            </Card>

            <Card>
              <h4>
                <i className="fas fa-dog"></i> REGISTRO Y GESTIÓN DE MASCOTAS
              </h4>
              <ul>
                <li>✓ Mascota registrada exitosamente</li>
                <li>✓ Predicción de IA completada</li>
                <li>✓ Información de mascota actualizada</li>
                <li>✓ Mascota eliminada del sistema</li>
                <li>
                  ✓ Límite de 2 mascotas alcanzado (al intentar registrar una 3ª)
                </li>
              </ul>
            </Card>

            <Card>
              <h4>
                <i className="fas fa-paw"></i> BIOMETRÍA CANINA
              </h4>
              <ul>
                <li>✓ Imágenes biométricas subidas (X de 20 completadas)</li>
                <li>
                  ✓ Entrenamiento biométrico iniciado (mínimo 5 imágenes
                  alcanzado)
                </li>
                <li>✓ Modelo canino entrenado correctamente</li>
                <li>
                  ✓ Error: No se pudo entrenar modelo (menos de 5 imágenes
                  válidas)
                </li>
                <li>✓ Biometría canina eliminada</li>
              </ul>
            </Card>

            <Card>
              <h4>
                <i className="fas fa-qrcode"></i> ESCÁNER Y RECONOCIMIENTO
              </h4>
              <ul>
                <li>✓ Tu mascota fue escaneada con éxito por un usuario</li>
                <li>✓ Reconocimiento facial: [Nombre Mascota] (95% confianza)</li>
                <li>✓ Código QR escaneado correctamente</li>
                <li>✓ Error: No se reconoció ninguna mascota en la imagen</li>
                <li>✓ QR generado para tu mascota</li>
              </ul>
            </Card>

            <Card>
              <h4>
                <i className="fas fa-exclamation-triangle"></i> MASCOTAS PERDIDAS
              </h4>
              <ul>
                <li>
                  🚨 Tu mascota "[Nombre]" ha sido reportada como perdida en
                  [Ubicación]
                </li>
                <li>
                  🎉 ¡Buenas noticias! Tu mascota "[Nombre]" ha sido reportada como
                  encontrada
                </li>
                <li>
                  🔔 Un usuario reportó haber visto a tu mascota perdida en
                  [Ubicación]
                </li>
                <li>✓ Tu reporte de mascota perdida fue publicado exitosamente</li>
              </ul>
            </Card>

            <Card>
              <h4>
                <i className="fas fa-id-card"></i> CARNETS Y CÓDIGOS QR
              </h4>
              <ul>
                <li>✓ Carnet digital generado para [Nombre Mascota]</li>
                <li>✓ Código QR generado correctamente</li>
                <li>✓ Carnet descargado como PDF</li>
                <li>✓ QR compartido exitosamente</li>
              </ul>
            </Card>

            <Card>
              <h4>
                <i className="fas fa-user-shield"></i> ADMINISTRACIÓN (Solo ADMIN)
              </h4>
              <ul>
                <li>✓ Nuevo usuario registrado en el sistema</li>
                <li>✓ Usuario eliminado del sistema</li>
                <li>✓ Mascota eliminada por administrador</li>
                <li>✓ Estadísticas del sistema actualizadas</li>
                <li>✓ Backup del sistema completado</li>
                <li>🔒 Intento de acceso no autorizado detectado</li>
              </ul>
            </Card>
          </div>
        </Section>

        {/* SECCIÓN 4: VISUALIZACIÓN */}
        <Section id="visualizacion" title="4. Visualización de Notificaciones" icon="fa-eye">
          <h3>
            <i className="fas fa-bell"></i> Icono de Campana en Navbar
          </h3>
          <Card variant="primary">
            <p>
              <strong>Ubicación:</strong> Esquina superior derecha del navbar,
              junto al menú de usuario.
            </p>
            <ul>
              <li>
                <strong>Badge rojo con número:</strong> Indica cantidad de
                notificaciones NO LEÍDAS
              </li>
              <li>
                <strong>Ejemplo:</strong> 🔔 [5] = 5 notificaciones sin leer
              </li>
              <li>
                <strong>Icono sin badge:</strong> No hay notificaciones pendientes
                de lectura
              </li>
            </ul>
          </Card>

          <h3>
            <i className="fas fa-window-maximize"></i> Panel Desplegable
          </h3>
          <p>Al hacer clic en el icono de campana se abre un panel con:</p>

          <div className="panel-preview">
            <Card>
              <h4>ENCABEZADO:</h4>
              <ul>
                <li>Título: "Notificaciones"</li>
                <li>Contador: "X sin leer"</li>
                <li>
                  Botón: "Marcar todas como leídas" (solo si hay no leídas)
                </li>
              </ul>
            </Card>

            <Card>
              <h4>FILTROS RÁPIDOS:</h4>
              <ul>
                <li>Todas</li>
                <li>No leídas</li>
                <li>Por categoría (SYSTEM, MASCOTA, USER, SECURITY)</li>
              </ul>
            </Card>

            <Card>
              <h4>LISTA DE NOTIFICACIONES (últimas 10):</h4>
              <p>Cada notificación muestra:</p>
              <ul>
                <li>
                  <strong>Icono según tipo</strong> (coloreado según nivel)
                </li>
                <li>
                  <strong>Título:</strong> Resumen del evento
                </li>
                <li>
                  <strong>Descripción:</strong> Detalles adicionales
                </li>
                <li>
                  <strong>Timestamp:</strong> "Hace 2 minutos", "Hace 1 hora",
                  "Hace 3 días"
                </li>
                <li>
                  <strong>Estado visual:</strong> Fondo más claro si no está leída
                </li>
                <li>
                  <strong>Botón:</strong> "Marcar como leída" (si no está leída)
                </li>
              </ul>
            </Card>

            <Card>
              <h4>PIE DE PANEL:</h4>
              <ul>
                <li>Enlace: "Ver todas las notificaciones" → Página completa</li>
              </ul>
            </Card>
          </div>

          <h3>
            <i className="fas fa-list"></i> Página Completa de Notificaciones
          </h3>
          <p>Ruta: <code>/notificaciones</code></p>
          <p>Acceso desde:</p>
          <ul>
            <li>Panel desplegable → "Ver todas"</li>
            <li>Menú lateral → "Notificaciones"</li>
          </ul>

          <p>
            <strong>Funcionalidades adicionales:</strong>
          </p>
          <ul>
            <li>✓ Paginación (20 notificaciones por página)</li>
            <li>✓ Filtros avanzados (nivel, categoría, fecha, estado)</li>
            <li>✓ Búsqueda por texto</li>
            <li>✓ Marcar individualmente como leída/no leída</li>
            <li>✓ Eliminar notificación individual</li>
            <li>✓ Eliminar todas las notificaciones leídas</li>
            <li>✓ Exportar historial (CSV o PDF)</li>
          </ul>

          <Alert type="success">
            <strong>AUTOACTUALIZACIÓN:</strong> El panel se actualiza en tiempo
            real. Cuando llega una nueva notificación, el badge se incrementa
            automáticamente sin necesidad de recargar la página.
          </Alert>
        </Section>

        {/* SECCIÓN 5: INTERACCIÓN */}
        <Section id="interaccion" title="5. Interacción con Notificaciones" icon="fa-hand-pointer">
          <h3>
            <i className="fas fa-mouse-pointer"></i> Acciones Disponibles
          </h3>

          <Table
            headers={["Acción", "Cómo", "Resultado"]}
            rows={[
              [
                "Ver detalles",
                "Clic en la notificación",
                "Se expande mostrando información completa. Si tiene enlace relacionado (ej: mascota, usuario), aparece botón 'Ver más'.",
              ],
              [
                "Marcar como leída",
                'Botón "✓" o clic en notificación',
                "Cambia estado visual (fondo más oscuro). Badge del navbar se reduce en 1.",
              ],
              [
                "Marcar como no leída",
                "Menú contextual (⋮) → 'Marcar como no leída'",
                "Vuelve al estado no leído. Badge aumenta en 1.",
              ],
              [
                "Eliminar notificación",
                "Menú contextual (⋮) → 'Eliminar' + confirmación",
                "Notificación eliminada permanentemente del historial.",
              ],
              [
                "Marcar todas como leídas",
                'Botón en encabezado del panel',
                "Todas las notificaciones sin leer cambian a estado leído. Badge se pone en 0.",
              ],
              [
                "Ir a recurso relacionado",
                "Botón 'Ver más' o 'Ver detalles' en notificación",
                "Redirige a: Detalle de mascota, Perfil de usuario, Dashboard, Configuración (según el tipo de notificación).",
              ],
            ]}
          />

          <h3>
            <i className="fas fa-trash-alt"></i> Eliminación Automática
          </h3>
          <Alert type="warning">
            <strong>RETENCIÓN DE NOTIFICACIONES:</strong> El sistema elimina
            automáticamente las notificaciones leídas después de 30 días. Las
            notificaciones no leídas se mantienen indefinidamente hasta que el
            usuario las lea o las elimine manualmente.
          </Alert>
        </Section>

        {/* SECCIÓN 6: NOTIFICACIONES POR EMAIL */}
        <Section id="email" title="6. Notificaciones por Email" icon="fa-envelope">
          <Alert type="info">
            Solo ciertos eventos críticos envían notificaciones por correo
            electrónico además de mostrarse en el sistema.
          </Alert>

          <h3>
            <i className="fas fa-mail-bulk"></i> Eventos que Envían Email
          </h3>

          <div className="email-events">
            <Card variant="danger">
              <h4>🚨 MASCOTA PERDIDA</h4>
              <p>
                <strong>Destinatario:</strong> Propietario de la mascota
              </p>
              <p>
                <strong>Asunto:</strong> "🚨 ALERTA: Tu mascota [Nombre] ha sido
                reportada como perdida"
              </p>
              <p>
                <strong>Contenido:</strong>
              </p>
              <ul>
                <li>Nombre y foto de la mascota</li>
                <li>Ubicación del reporte</li>
                <li>Fecha y hora del reporte</li>
                <li>Usuario que reportó</li>
                <li>
                  Enlace directo: "Ver en el sistema" → Detalle de mascota perdida
                </li>
                <li>Botón: "Contactar al usuario que la vio"</li>
              </ul>
            </Card>

            <Card variant="success">
              <h4>🎉 MASCOTA ENCONTRADA</h4>
              <p>
                <strong>Destinatario:</strong> Propietario de la mascota
              </p>
              <p>
                <strong>Asunto:</strong> "🎉 ¡Buenas noticias! Tu mascota [Nombre]
                ha sido reportada como encontrada"
              </p>
              <p>
                <strong>Contenido:</strong>
              </p>
              <ul>
                <li>Nombre y foto de la mascota</li>
                <li>Ubicación del encuentro</li>
                <li>Fecha y hora del reporte</li>
                <li>Usuario que la encontró</li>
                <li>Información de contacto (si el usuario la proporcionó)</li>
                <li>
                  Enlace directo: "Ver detalles" → Página de mascota encontrada
                </li>
                <li>Botón: "Contactar al rescatista"</li>
              </ul>
            </Card>

            <Card variant="info">
              <h4>🔑 RECUPERACIÓN DE CONTRASEÑA</h4>
              <p>
                <strong>Destinatario:</strong> Usuario que solicitó recuperación
              </p>
              <p>
                <strong>Asunto:</strong> "🔑 Recuperación de contraseña - [Nombre
                Sistema]"
              </p>
              <p>
                <strong>Contenido:</strong>
              </p>
              <ul>
                <li>Mensaje de bienvenida con nombre del usuario</li>
                <li>Instrucciones claras</li>
                <li>
                  Token/Enlace seguro de recuperación (válido por 1 hora)
                </li>
                <li>Advertencia de seguridad</li>
                <li>Fecha y hora de la solicitud</li>
                <li>Dirección IP desde donde se solicitó (seguridad)</li>
                <li>
                  Nota: "Si no fuiste tú, ignora este email y tu contraseña
                  permanecerá sin cambios."
                </li>
              </ul>
            </Card>

            <Card variant="warning">
              <h4>🔒 INTENTO DE ACCESO SOSPECHOSO (Opcional - Seguridad)</h4>
              <p>
                <strong>Destinatario:</strong> Usuario afectado
              </p>
              <p>
                <strong>Asunto:</strong> "⚠️ Alerta de seguridad: Intento de
                acceso a tu cuenta"
              </p>
              <p>
                <strong>Contenido:</strong>
              </p>
              <ul>
                <li>Descripción del intento</li>
                <li>Fecha, hora y ubicación aproximada (IP)</li>
                <li>Botón: "Cambiar contraseña inmediatamente"</li>
                <li>Enlace para revisar actividad de la cuenta</li>
              </ul>
            </Card>
          </div>

          <h3>
            <i className="fas fa-cog"></i> Configuración de Emails
          </h3>
          <Alert type="info">
            <strong>Configuración del Usuario:</strong> En{" "}
            <code>Perfil → Preferencias de Notificaciones</code>, el usuario puede:
          </Alert>
          <ul>
            <li>✓ Activar/Desactivar emails para mascotas perdidas</li>
            <li>✓ Activar/Desactivar emails para mascotas encontradas</li>
            <li>
              ✗ NO SE PUEDE DESACTIVAR: Emails de recuperación de contraseña
              (siempre se envían)
            </li>
            <li>
              ✗ NO SE PUEDE DESACTIVAR: Emails de alertas de seguridad (siempre se
              envían)
            </li>
          </ul>

          <h3>
            <i className="fas fa-check-double"></i> Garantía de Entrega
          </h3>
          <Card>
            <ul>
              <li>
                ✓ Sistema reintenta envío hasta 3 veces en caso de fallo temporal
              </li>
              <li>
                ✓ Si falla definitivamente, se muestra notificación en el sistema:
                "No se pudo enviar email de notificación. Revisa tu bandeja de
                spam."
              </li>
              <li>✓ Email de confirmación visible en historial del usuario</li>
            </ul>
          </Card>

          <Alert type="warning">
            <strong>IMPORTANTE:</strong> Los emails pueden tardar hasta 5 minutos
            en llegar. Si no lo recibes, revisa tu carpeta de spam o correo no
            deseado.
          </Alert>
        </Section>
      </div>
    </div>
  );
}

export default Notificaciones;
