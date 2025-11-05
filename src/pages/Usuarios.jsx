import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Alert from "../components/ui/Alert";
import Badge from "../components/ui/Badge";
import Table from "../components/ui/Table";
import StepList from "../components/ui/StepList";
import BreadCrumbs from "../components/ui/BreadCrumbs";
import "./PageStyles.css";

function Usuarios() {
  return (
    <div className="page-container">
      <BreadCrumbs items={["Inicio", "Gestión de Usuarios"]} />

      <div className="page-header">
        <i className="fas fa-users page-icon"></i>
        <h1>Gestión de Usuarios y Roles</h1>
        <p className="page-description">
          El sistema maneja 3 roles diferenciados con permisos específicos: ADMIN,
          VET y OWNER. Conoce sus características y cómo gestionar tu perfil.
        </p>
      </div>

      <div className="page-content">
        {/* SECCIÓN 1: TIPOS DE USUARIOS */}
        <Section id="tipos-roles" title="1. Tipos de Usuarios y Roles" icon="fa-id-badge">
          <p className="section-intro">
            El sistema maneja 3 roles diferenciados con permisos específicos para
            garantizar la seguridad y funcionalidad adecuada.
          </p>

          <h3>
            <i className="fas fa-user-shield"></i> 1.1 ADMIN (ADMINISTRADOR)
          </h3>
          <Card variant="danger">
            <div className="role-header">
              <Badge variant="danger">ADMIN</Badge>
              <p>Código interno: 'ADMIN'</p>
            </div>

            <h4>
              <i className="fas fa-check-circle"></i> PERMISOS COMPLETOS:
            </h4>
            <ul className="permissions-list">
              <li>✓ Acceso a dashboard administrativo especializado</li>
              <li>✓ Ver estadísticas globales del sistema</li>
              <li>✓ Gestionar todos los usuarios (crear, editar, eliminar)</li>
              <li>✓ Ver lista completa de usuarios</li>
              <li>✓ Cambiar roles de usuarios</li>
              <li>✓ Acceder a todas las mascotas del sistema</li>
              <li>✓ Ver métricas y reportes avanzados</li>
              <li>✓ Configurar parámetros del sistema</li>
            </ul>

            <h4>
              <i className="fas fa-chart-bar"></i> DASHBOARD EXCLUSIVO:
            </h4>
            <p>Muestra 9 gráficos y 8 estadísticas:</p>

            <div className="dashboard-stats">
              <h5>ESTADÍSTICAS:</h5>
              <ol>
                <li>Total de mascotas registradas</li>
                <li>Escaneos totales realizados</li>
                <li>Total de usuarios activos</li>
                <li>Tasa de éxito de reconocimiento</li>
                <li>Registros biométricos activos</li>
                <li>Mascotas reportadas como perdidas</li>
                <li>Autenticaciones faciales de usuarios</li>
                <li>Total de notificaciones generadas</li>
              </ol>

              <h5>GRÁFICOS:</h5>
              <ol>
                <li>TOP 10 razas más registradas (gráfico de barras)</li>
                <li>Escaneos diarios (últimos 30 días - línea)</li>
                <li>Mascotas por etapa de vida (pie chart)</li>
                <li>Distribución de condición corporal (doughnut)</li>
                <li>Registros mensuales de mascotas (barras)</li>
                <li>Actividad por hora del día (línea)</li>
                <li>Distribución de roles de usuarios (pie)</li>
                <li>Tasa de éxito de reconocimiento (gauge)</li>
                <li>Notificaciones por categoría (barras horizontales)</li>
              </ol>
            </div>

            <h4>
              <i className="fas fa-bars"></i> MENÚ EXCLUSIVO:
            </h4>
            <ul>
              <li>Dashboard Admin</li>
              <li>Gestión de Usuarios</li>
            </ul>

            <Alert type="danger">
              <strong>Protección:</strong> Con decorador @user_passes_test(is_admin).
              Redirige a /dashboard/ si no es admin. Acceso completo a logs y
              auditoría.
            </Alert>
          </Card>

          <h3>
            <i className="fas fa-user-md"></i> 1.2 VET (VETERINARIO)
          </h3>
          <Card variant="info">
            <div className="role-header">
              <Badge variant="info">VET</Badge>
              <p>Código interno: 'VET'</p>
            </div>

            <h4>
              <i className="fas fa-id-card"></i> CAMPOS ADICIONALES:
            </h4>
            <ul>
              <li>
                <strong>Especialización:</strong> (ej: Cirugía, Dermatología)
              </li>
              <li>
                <strong>Número de licencia:</strong> (license_number)
              </li>
            </ul>

            <h4>
              <i className="fas fa-check-circle"></i> PERMISOS:
            </h4>
            <ul className="permissions-list">
              <li>✓ Ver todas las mascotas del sistema</li>
              <li>✓ Acceder a información completa de cualquier mascota</li>
              <li>✓ Ver historiales médicos</li>
              <li>✓ Agregar notas veterinarias</li>
              <li>✓ Acceder a scanner de reconocimiento</li>
              <li>✓ Registrar sus propias mascotas (máximo 2)</li>
              <li>✓ Recibir notificaciones de mascotas perdidas</li>
            </ul>

            <h4>
              <i className="fas fa-times-circle"></i> RESTRICCIONES:
            </h4>
            <ul className="restrictions-list">
              <li>✗ No puede eliminar mascotas de otros usuarios</li>
              <li>✗ No puede editar información de mascotas ajenas</li>
              <li>✗ No puede gestionar usuarios</li>
              <li>✗ No accede a dashboard administrativo</li>
            </ul>

            <h4>
              <i className="fas fa-lightbulb"></i> USO TÍPICO:
            </h4>
            <ul>
              <li>Consultorios veterinarios</li>
              <li>Identificación rápida de mascotas</li>
              <li>Seguimiento de pacientes</li>
              <li>Respuesta a alertas de mascotas perdidas</li>
            </ul>
          </Card>

          <h3>
            <i className="fas fa-user"></i> 1.3 OWNER (DUEÑO DE MASCOTA)
          </h3>
          <Card variant="success">
            <div className="role-header">
              <Badge variant="success">OWNER</Badge>
              <p>Código interno: 'OWNER'</p>
            </div>

            <Alert type="info">
              <strong>Rol predeterminado:</strong> Al registrarse, todos los
              usuarios reciben automáticamente este rol.
            </Alert>

            <h4>
              <i className="fas fa-check-circle"></i> PERMISOS:
            </h4>
            <ul className="permissions-list">
              <li>✓ Registrar hasta 2 mascotas máximo</li>
              <li>✓ Editar sus propias mascotas</li>
              <li>✓ Eliminar sus propias mascotas</li>
              <li>✓ Registrar biometría de sus mascotas</li>
              <li>✓ Eliminar biometría de sus mascotas</li>
              <li>✓ Reportar mascotas como perdidas</li>
              <li>✓ Generar código QR de sus mascotas</li>
              <li>✓ Usar scanner para identificar mascotas</li>
              <li>✓ Reportar mascotas encontradas</li>
              <li>✓ Generar y descargar carnets</li>
              <li>✓ Ver información pública de otras mascotas (vía QR)</li>
              <li>✓ Recibir notificaciones del sistema</li>
            </ul>

            <h4>
              <i className="fas fa-times-circle"></i> RESTRICCIONES:
            </h4>
            <ul className="restrictions-list">
              <li>✗ No puede ver mascotas de otros usuarios (solo en scanner)</li>
              <li>✗ No puede editar/eliminar mascotas ajenas</li>
              <li>✗ No puede gestionar usuarios</li>
              <li>✗ No accede a dashboard administrativo</li>
              <li>✗ LÍMITE ESTRICTO: Solo 2 mascotas por usuario</li>
            </ul>

            <h4>
              <i className="fas fa-lightbulb"></i> USO TÍPICO:
            </h4>
            <ul>
              <li>Dueños de mascotas domésticas</li>
              <li>Registro y seguimiento de sus perros</li>
              <li>Sistema de localización si se pierden</li>
              <li>Generación de identificación (QR + carnet)</li>
            </ul>
          </Card>
        </Section>

        {/* SECCIÓN 2: GESTIÓN DE PERFIL */}
        <Section id="perfil" title="2. Gestión de Perfil de Usuario" icon="fa-user-circle">
          <h3>
            <i className="fas fa-eye"></i> 2.1 Ver Perfil
          </h3>
          <p>
            Acceso: <strong>Solo usuario autenticado</strong>
          </p>

          <Card>
            <h4>
              <i className="fas fa-info-circle"></i> INFORMACIÓN MOSTRADA:
            </h4>
            <ul>
              <li>Foto de perfil (o avatar predeterminado)</li>
              <li>Nombre completo</li>
              <li>Username</li>
              <li>Email</li>
              <li>Cédula</li>
              <li>Dirección</li>
              <li>Teléfono</li>
              <li>Rol actual</li>
              <li>Fecha de registro</li>
              <li>Estado de biometría facial (registrada o no)</li>
            </ul>

            <h4>CAMPOS ESPECÍFICOS POR ROL:</h4>
            <p>
              <strong>Para VET:</strong>
            </p>
            <ul>
              <li>Especialización</li>
              <li>Número de licencia</li>
            </ul>

            <h4>
              <i className="fas fa-cogs"></i> ACCIONES DISPONIBLES:
            </h4>
            <ul>
              <li>✓ Editar perfil</li>
              <li>✓ Cambiar contraseña</li>
              <li>✓ Registrar/Eliminar biometría facial</li>
              <li>✓ Cerrar sesión</li>
            </ul>
          </Card>

          <h3>
            <i className="fas fa-edit"></i> 2.2 Editar Perfil
          </h3>

          <Card variant="info">
            <h4>CAMPOS EDITABLES:</h4>
            <ul>
              <li>Foto de perfil (imagen)</li>
              <li>Nombre (first_name)</li>
              <li>Apellido (last_name)</li>
              <li>Email (debe seguir siendo único)</li>
              <li>Cédula (debe seguir siendo única)</li>
              <li>Dirección</li>
              <li>Teléfono</li>
            </ul>

            <h4>PARA VETERINARIOS:</h4>
            <ul>
              <li>Especialización</li>
              <li>Número de licencia</li>
            </ul>

            <h4>CAMPOS NO EDITABLES:</h4>
            <ul className="restrictions-list">
              <li>✗ Username (permanente)</li>
              <li>✗ Rol (solo administrador puede cambiar)</li>
              <li>✗ Fecha de registro</li>
            </ul>
          </Card>

          <Table
            headers={["Validación", "Requisito"]}
            rows={[
              ["Email", "Único en el sistema"],
              ["Cédula", "Única en el sistema"],
              ["Formato de email", "Válido"],
              ["Tamaño de imagen", "≤ 5MB"],
            ]}
          />

          <Alert type="success">
            <strong>Resultado:</strong> Mensaje "Perfil actualizado exitosamente" +
            Notificación in-app de cambio + Redirección a vista de perfil
          </Alert>
        </Section>

        {/* SECCIÓN 3: CAMBIAR CONTRASEÑA */}
        <Section id="cambiar-password" title="3. Cambiar Contraseña" icon="fa-key">
          <Card variant="warning">
            <h4>CAMPOS REQUERIDOS:</h4>
            <ul>
              <li>Contraseña actual (verificación)</li>
              <li>Nueva contraseña</li>
              <li>Confirmar nueva contraseña</li>
            </ul>

            <h4>
              <i className="fas fa-shield-alt"></i> VALIDACIONES:
            </h4>
            <ul>
              <li>✓ Contraseña actual debe ser correcta</li>
              <li>✓ Nueva contraseña ≥ 8 caracteres</li>
              <li>✓ Nueva contraseña debe incluir letras y números</li>
              <li>✓ Confirmación debe coincidir con nueva contraseña</li>
              <li>✓ Nueva contraseña debe ser diferente a la actual</li>
            </ul>

            <h4>
              <i className="fas fa-lock"></i> SEGURIDAD:
            </h4>
            <ul>
              <li>Contraseña hasheada con Django's PBKDF2</li>
              <li>No se almacena en texto plano</li>
              <li>Sesiones anteriores se invalidan</li>
              <li>Notificación de cambio enviada</li>
            </ul>
          </Card>

          <Alert type="warning">
            <strong>Resultado:</strong> Mensaje "Contraseña cambiada exitosamente" +
            Logout automático (debe iniciar sesión con nueva contraseña)
          </Alert>
        </Section>

        {/* SECCIÓN 4: GESTIÓN DE BIOMETRÍA FACIAL */}
        <Section
          id="gestionar-biometria"
          title="4. Gestión de Biometría Facial del Usuario"
          icon="fa-fingerprint"
        >
          <h3>
            <i className="fas fa-plus-circle"></i> REGISTRAR BIOMETRÍA
          </h3>
          <p>
            Proceso completo descrito en la sección de Autenticación → Registro de
            Biometría Facial (2.2)
          </p>

          <Card variant="primary">
            <h4>RESUMEN DEL PROCESO:</h4>
            <StepList
              steps={[
                {
                  number: 1,
                  title: "Acceso al módulo",
                  description:
                    'Dashboard → Perfil → "Registrar Biometría Facial"',
                  icon: "fa-door-open",
                },
                {
                  number: 2,
                  title: "Captura de rostro",
                  description:
                    "Sistema activa cámara web, usuario se posiciona de frente",
                  icon: "fa-camera",
                },
                {
                  number: 3,
                  title: "Validaciones automáticas",
                  description:
                    "Rostro único, calidad ≥70%, iluminación, nitidez, rostro de frente",
                  icon: "fa-check-double",
                },
                {
                  number: 4,
                  title: "Procesamiento con IA",
                  description:
                    "ArcFace ResNet100 (99.77% precisión), extracción de descriptor facial (512 números)",
                  icon: "fa-brain",
                },
                {
                  number: 5,
                  title: "Confirmación",
                  description:
                    'Mensaje: "Biometría facial registrada exitosamente"',
                  icon: "fa-check-circle",
                },
              ]}
            />
          </Card>

          <h3>
            <i className="fas fa-trash-alt"></i> ELIMINAR BIOMETRÍA
          </h3>

          <Card variant="danger">
            <h4>CONFIRMACIÓN REQUERIDA:</h4>
            <ul>
              <li>Modal de confirmación antes de eliminar</li>
              <li>
                Advertencia: "Deberás volver a registrarla para usar login facial"
              </li>
            </ul>

            <h4>RESULTADO:</h4>
            <ul>
              <li>Descriptor facial eliminado de BD</li>
              <li>Mensaje: "Biometría facial eliminada correctamente"</li>
              <li>Login facial deshabilitado</li>
              <li>Usuario debe usar login tradicional</li>
            </ul>
          </Card>

          <Alert type="info">
            <strong>Límites:</strong> Solo 1 rostro permitido por usuario. Se
            puede eliminar y volver a registrar. Requiere condiciones mínimas de
            calidad.
          </Alert>
        </Section>

        {/* SECCIÓN 5: MEDIDAS DE SEGURIDAD */}
        <Section id="seguridad" title="5. Medidas de Seguridad" icon="fa-shield-alt">
          <h3>
            <i className="fas fa-clock"></i> Rate Limiting (Límites de Intentos)
          </h3>
          <Table
            headers={["Operación", "Límite", "Período"]}
            rows={[
              ["Detectar rostro facial", "30 intentos", "Minuto"],
              ["Registrar biometría usuario", "10 intentos", "Hora"],
              ["Login facial", "10 intentos", "Minuto"],
              ["Eliminar biometría usuario", "5 intentos", "Hora"],
              ["Login tradicional", "5 intentos", "15 min"],
              ["Solicitar reset de password", "3 intentos", "Hora"],
            ]}
          />
          <Alert type="danger">
            <strong>Importante:</strong> Exceder límites resulta en bloqueo
            temporal.
          </Alert>

          <h3>
            <i className="fas fa-file-image"></i> Validaciones de Archivos
          </h3>
          <div className="two-column-list">
            <Card>
              <h4>IMÁGENES DE PERFIL:</h4>
              <ul>
                <li>Formatos: JPG, JPEG, PNG, WEBP</li>
                <li>Tamaño máximo: 5 MB</li>
                <li>Validación de tipo MIME</li>
                <li>Verificación de contenido real</li>
              </ul>
            </Card>

            <Card>
              <h4>FOTOS BIOMÉTRICAS:</h4>
              <ul>
                <li>Tamaño mínimo: 50x50 píxeles</li>
                <li>Confianza mínima: 70%</li>
                <li>Solo 1 rostro permitido</li>
              </ul>
            </Card>
          </div>

          <h3>
            <i className="fas fa-lock"></i> Protección y Encriptación
          </h3>
          <Card variant="success">
            <h4>PROTECCIÓN CSRF:</h4>
            <ul>
              <li>Tokens CSRF en todos los formularios</li>
              <li>Validación en cada POST request</li>
              <li>Timeout de tokens: 1 hora</li>
            </ul>

            <h4>PASSWORDS:</h4>
            <ul>
              <li>Hashing: PBKDF2 con SHA256</li>
              <li>Salt único por usuario</li>
              <li>Iteraciones: 216,000</li>
              <li>No se almacenan en texto plano</li>
            </ul>
          </Card>
        </Section>
      </div>
    </div>
  );
}

export default Usuarios;
