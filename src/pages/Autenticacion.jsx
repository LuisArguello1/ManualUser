import BreadCrumbs from '../components/ui/BreadCrumbs';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Alert from '../components/ui/Alert';
import Table from '../components/ui/Table';
import StepList, { Step } from '../components/ui/StepList';
import CodeBlock from '../components/ui/CodeBlock';
import './PageStyles.css';

function Autenticacion() {
  return (
    <div className="page-container">
      <BreadCrumbs items={['Autenticación']} />
      
      <div className="page-header">
        <i className="fas fa-lock page-icon"></i>
        <h1>Autenticación y Acceso</h1>
        <p className="page-description">
          Aprende cómo registrarte, iniciar sesión y utilizar el reconocimiento facial biométrico para acceder al sistema de forma segura.
        </p>
      </div>

      <div className="page-content">
        <Section id="registro" title="Registro de Usuarios" icon="fa-user-plus">
          <p className="section-intro">
            El proceso de registro es <strong>libre y abierto</strong> para cualquier persona. Al completar el registro, 
            automáticamente se te asigna el rol de <strong>OWNER</strong> (Dueño de mascota).
          </p>

          <h3>Campos del Formulario de Registro</h3>
          <Table>
            <thead>
              <tr>
                <th>Campo</th>
                <th>Tipo</th>
                <th>Obligatorio</th>
                <th>Validación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Username</strong></td>
                <td>Texto</td>
                <td>✅ Sí</td>
                <td>Único en el sistema</td>
              </tr>
              <tr>
                <td><strong>Email</strong></td>
                <td>Email</td>
                <td>✅ Sí</td>
                <td>Único y formato válido</td>
              </tr>
              <tr>
                <td><strong>Contraseña</strong></td>
                <td>Password</td>
                <td>✅ Sí</td>
                <td>Mínimo 8 caracteres, letras y números</td>
              </tr>
              <tr>
                <td><strong>Confirmar Contraseña</strong></td>
                <td>Password</td>
                <td>✅ Sí</td>
                <td>Debe coincidir</td>
              </tr>
              <tr>
                <td><strong>Nombre Completo</strong></td>
                <td>Texto</td>
                <td>✅ Sí</td>
                <td>first_name + last_name</td>
              </tr>
              <tr>
                <td><strong>Cédula (DNI)</strong></td>
                <td>Texto</td>
                <td>✅ Sí</td>
                <td>Única, 10 dígitos</td>
              </tr>
              <tr>
                <td><strong>Foto de Perfil</strong></td>
                <td>Imagen</td>
                <td>❌ No</td>
                <td>JPG/PNG, máx 5MB</td>
              </tr>
              <tr>
                <td><strong>Dirección</strong></td>
                <td>Texto</td>
                <td>❌ No</td>
                <td>-</td>
              </tr>
              <tr>
                <td><strong>Teléfono</strong></td>
                <td>Texto</td>
                <td>❌ No</td>
                <td>-</td>
              </tr>
            </tbody>
          </Table>

          <h3>Proceso de Registro</h3>
          <StepList>
            <Step number="1" icon="fa-link">
              Accede a la URL <code>/register/</code> desde cualquier navegador
            </Step>
            <Step number="2" icon="fa-edit">
              Completa todos los campos obligatorios del formulario
            </Step>
            <Step number="3" icon="fa-eye">
              Usa el icono de "ojo" para mostrar/ocultar tu contraseña mientras la escribes
            </Step>
            <Step number="4" icon="fa-check">
              El sistema valida en tiempo real: username único, email válido, contraseñas coincidentes
            </Step>
            <Step number="5" icon="fa-paper-plane">
              Presiona "Registrarse" - el botón se desactiva temporalmente para evitar doble envío
            </Step>
            <Step number="6" icon="fa-user-check">
              Tu cuenta se crea con rol <strong>OWNER</strong>
            </Step>
            <Step number="7" icon="fa-sign-in-alt">
              Eres redirigido automáticamente a la página de login
            </Step>
          </StepList>

          <Alert type="success">
            <strong>Resultado exitoso:</strong> Verás el mensaje "Cuenta creada exitosamente. Por favor inicia sesión."
          </Alert>

          <Card>
            <h4><i className="fas fa-shield-alt"></i> Características de Seguridad</h4>
            <ul>
              <li>✓ Validación en tiempo real de username y email</li>
              <li>✓ Verificación de fortaleza de contraseña</li>
              <li>✓ Contraseña hasheada con PBKDF2 (216,000 iteraciones)</li>
              <li>✓ Protección CSRF en formularios</li>
              <li>✓ Rate limiting: máximo 10 intentos de registro por hora</li>
            </ul>
          </Card>
        </Section>

        <Section id="biometria-facial-registro" title="Registro de Biometría Facial (Post-Registro)" icon="fa-fingerprint">
          <p className="section-intro">
            Después de tu primer login, puedes opcionalmente registrar tu rostro para usar <strong>autenticación biométrica</strong> 
            en futuros inicios de sesión.
          </p>


          <Alert type="warning">
            <strong>Requisitos previos:</strong>
            <ul>
              <li>✓ Cámara web funcional</li>
              <li>✓ Buena iluminación (preferiblemente natural)</li>
              <li>✓ Rostro visible de frente</li>
              <li>✓ Solo una persona en el encuadre</li>
            </ul>
          </Alert>

          <h3>Proceso Completo</h3>
          <StepList>
            <Step number="1" icon="fa-user">
              Accede desde Dashboard → Perfil → "Registrar Biometría Facial"
            </Step>
            <Step number="2" icon="fa-camera">
              El sistema activa tu cámara web y muestra vista previa en tiempo real
            </Step>
            <Step number="3" icon="fa-user-circle">
              Posiciónate de frente a la cámara con buena iluminación
            </Step>
            <Step number="4" icon="fa-camera-retro">
              Presiona el botón "Capturar Rostro"
            </Step>
            <Step number="5" icon="fa-search">
              <strong>Validaciones Automáticas:</strong>
              <ul>
                <li>Detección de rostro único (solo 1 persona)</li>
                <li>Calidad de imagen ≥ 70% de confianza</li>
                <li>Iluminación adecuada</li>
                <li>Rostro de frente (no de perfil)</li>
              </ul>
            </Step>
            <Step number="6" icon="fa-brain">
              <strong>Procesamiento con IA:</strong>
              <p>Tecnología: <code>ArcFace ResNet100</code> (99.77% precisión)</p>
              <ul>
                <li>Detección de rostro con YuNet</li>
                <li>Identificación de 5 puntos clave (landmarks): ojos, nariz, comisuras de boca</li>
                <li>Alineación facial automática</li>
                <li>Extracción de descriptor facial (embedding de 512 números)</li>
                <li>Normalización del vector</li>
                <li>Almacenamiento seguro en base de datos</li>
              </ul>
            </Step>
            <Step number="7" icon="fa-check-circle">
              Mensaje de confirmación: "Biometría facial registrada exitosamente"
            </Step>
          </StepList>

          <Card variant="success">
            <h4><i className="fas fa-unlock-alt"></i> Ahora puedes usar:</h4>
            <p>Login con reconocimiento facial sin necesidad de recordar tu contraseña.</p>
          </Card>

          <h3>Límites y Restricciones</h3>
          <div className="info-box">
            <h4><i className="fas fa-exclamation-circle"></i> Importante</h4>
            <ul>
              <li>Solo 1 rostro permitido por usuario</li>
              <li>Se puede eliminar y volver a registrar</li>
              <li>No funciona con fotos impresas o en pantalla (debe ser persona real)</li>
              <li>Requiere condiciones mínimas de calidad</li>
              <li>Rate limiting: 10 intentos por hora</li>
            </ul>
          </div>

          <Alert type="info">
            <strong>Medidas de Seguridad:</strong> El descriptor facial está encriptado y solo se compara matemáticamente 
            mediante similitud coseno. Nunca se almacena la imagen original.
          </Alert>
        </Section>

        <Section id="login-tradicional" title="Inicio de Sesión Tradicional" icon="fa-sign-in-alt">
          <p className="section-intro">
            Método estándar de autenticación usando email y contraseña.
          </p>

          <h3>Campos Requeridos</h3>
          <div className="field-table">
            <div className="field-row">
              <div><strong>Campo</strong></div>
              <div><strong>Tipo</strong></div>
              <div><strong>Obligatorio</strong></div>
              <div><strong>Descripción</strong></div>
            </div>
            <div className="field-row">
              <div>Email</div>
              <div>Email</div>
              <div>✅ Sí</div>
              <div>Email registrado en el sistema</div>
            </div>
            <div className="field-row">
              <div>Contraseña</div>
              <div>Password</div>
              <div>✅ Sí</div>
              <div>Contraseña con icono de "ojo" para mostrar/ocultar</div>
            </div>
          </div>

          <h3>Proceso de Login</h3>
          <StepList>
            <Step number="1" icon="fa-keyboard">
              Ingresa tu email y contraseña
            </Step>
            <Step number="2" icon="fa-eye">
              Usa el icono de "ojo" si necesitas ver la contraseña mientras la escribes
            </Step>
            <Step number="3" icon="fa-paper-plane">
              Presiona "Iniciar Sesión"
            </Step>
            <Step number="4" icon="fa-server">
              El sistema valida:
              <ul>
                <li>Email existe en el sistema</li>
                <li>Contraseña coincide</li>
                <li>Usuario está activo (is_active=True)</li>
              </ul>
            </Step>
            <Step number="5" icon="fa-bell">
              Se crea notificación in-app: "Bienvenido de vuelta, [nombre]"
            </Step>
            <Step number="6" icon="fa-route">
              Redirección según tu rol:
              <ul>
                <li><strong>ADMIN</strong> → /admin-dashboard/</li>
                <li><strong>OWNER/VET</strong> → /dashboard/</li>
              </ul>
            </Step>
          </StepList>

          <Alert type="success">
            <strong>Login exitoso:</strong> Tu sesión queda activa y puedes comenzar a usar el sistema.
          </Alert>

          <Card>
            <h4><i className="fas fa-shield-alt"></i> Sistema Anti-Duplicación</h4>
            <p>
              El sistema previene notificaciones duplicadas verificando si existe una notificación de login 
              en los últimos 10 segundos, evitando crear múltiples notificaciones por recargas accidentales.
            </p>
          </Card>

          <h3>Enlaces Adicionales</h3>
          <ul>
            <li><i className="fas fa-key"></i> Link a recuperación de contraseña</li>
            <li><i className="fas fa-user-plus"></i> Link a registro de nuevo usuario</li>
            <li><i className="fas fa-fingerprint"></i> Botón para login con reconocimiento facial</li>
          </ul>
        </Section>

        <Section id="login-facial" title="Login con Reconocimiento Facial" icon="fa-camera">
          <p className="section-intro">
            Inicia sesión sin contraseña utilizando reconocimiento facial biométrico de alta precisión.
          </p>


          <Alert type="warning">
            <strong>Requisito previo:</strong> Debes haber registrado tu biometría facial previamente en <code>/facial-biometry/</code>
          </Alert>

          <h3>Proceso Completo</h3>
          <StepList>
            <Step number="1" icon="fa-fingerprint">
              En la página de login, presiona "Iniciar sesión con reconocimiento facial"
            </Step>
            <Step number="2" icon="fa-camera">
              Se abre interfaz de cámara con vista previa en tiempo real
            </Step>
            <Step number="3" icon="fa-user-circle">
              Posiciónate de frente a la cámara
            </Step>
            <Step number="4" icon="fa-camera-retro">
              El sistema detecta tu rostro automáticamente
            </Step>
            <Step number="5" icon="fa-hand-pointer">
              Presiona "Autenticar" o espera captura automática
            </Step>
            <Step number="6" icon="fa-brain">
              <strong>Procesamiento con IA:</strong>
              <p>Tecnología: <code>ArcFace ResNet100</code></p>
              <ul>
                <li>Detección de rostro con YuNet</li>
                <li>Extracción de descriptor facial (512 números)</li>
                <li>Comparación con TODOS los descriptores en base de datos</li>
                <li>Cálculo de similitud coseno con cada usuario</li>
              </ul>
            </Step>
            <Step number="7" icon="fa-check-circle">
              <strong>Validaciones:</strong>
              <ul>
                <li>Solo 1 rostro en la imagen</li>
                <li>Calidad suficiente (≥70%)</li>
                <li>Similitud ≥ 40% con algún usuario</li>
              </ul>
            </Step>
            <Step number="8" icon="fa-unlock">
              <strong>Decisión:</strong>
              <ul>
                <li>Similitud ≥ 0.40 (40%) → <span style={{color: 'var(--accent-success)'}}>LOGIN EXITOSO ✓</span></li>
                <li>Similitud &lt; 0.40 → <span style={{color: 'var(--accent-danger)'}}>ACCESO DENEGADO ✗</span></li>
              </ul>
            </Step>
          </StepList>

          <Card variant="success">
            <h4><i className="fas fa-check-circle"></i> Login Exitoso</h4>
            <ul>
              <li>Autenticación automática sin contraseña</li>
              <li>Notificación: "Autenticación facial exitosa"</li>
              <li>Registro del reconocimiento con timestamp</li>
              <li>Redirección a tu dashboard</li>
            </ul>
          </Card>

          <Card variant="danger">
            <h4><i className="fas fa-times-circle"></i> Login Fallido</h4>
            <ul>
              <li>Mensaje: "No se reconoció tu rostro. Usa tu contraseña."</li>
              <li>Registro del intento fallido</li>
              <li>Opción de volver al login tradicional</li>
            </ul>
          </Card>

          <h3>Umbral de Aceptación: 40%</h3>
          <div className="info-box">
            <h4><i className="fas fa-balance-scale"></i> ¿Por qué 40%?</h4>
            <p>
              Este umbral representa un balance óptimo entre seguridad y usabilidad:
            </p>
            <ul>
              <li><strong>Minimiza falsos positivos:</strong> Otra persona no puede acceder fácilmente</li>
              <li><strong>Minimiza falsos negativos:</strong> No te rechaza siendo tú el usuario legítimo</li>
              <li><strong>Tolerancia a cambios:</strong> Funciona con diferentes iluminaciones, ángulos y expresiones</li>
            </ul>
          </div>

          <h3>Medidas de Seguridad</h3>
          <ul>
            <li>✓ Rate limiting: 10 intentos por minuto</li>
            <li>✓ Validación de rostro único</li>
            <li>✓ No funciona con fotos o pantallas</li>
            <li>✓ Registro de todos los intentos (exitosos y fallidos)</li>
            <li>✓ Notificación al usuario de intentos de acceso</li>
          </ul>
        </Section>

        <Section id="recuperacion" title="Recuperación de Contraseña" icon="fa-key">
          <p className="section-intro">
            Si olvidaste tu contraseña, puedes restablecerla mediante un enlace enviado a tu email.
          </p>


          <h3>Proceso de Recuperación</h3>
          <StepList>
            <Step number="1" icon="fa-envelope">
              <strong>Solicitud:</strong>
              <ul>
                <li>Ingresa tu email en el formulario</li>
                <li>El sistema verifica que el email existe</li>
                <li>Se genera un token único temporal</li>
              </ul>
            </Step>
            <Step number="2" icon="fa-paper-plane">
              <strong>Envío de Email:</strong>
              <ul>
                <li>Asunto: "Recuperación de contraseña - Sistema Veterinaria"</li>
                <li>Contiene enlace con token único</li>
                <li>Token válido por <strong>1 hora</strong></li>
              </ul>
            </Step>
            <Step number="3" icon="fa-link">
              <strong>Restablecimiento:</strong>
              <ul>
                <li>Haz clic en el enlace del email</li>
                <li>Ingresa tu nueva contraseña</li>
                <li>Confirma la nueva contraseña</li>
              </ul>
            </Step>
            <Step number="4" icon="fa-check">
              <strong>Confirmación:</strong>
              <ul>
                <li>Contraseña actualizada exitosamente</li>
                <li>Token invalidado automáticamente</li>
                <li>Mensaje: "Contraseña restablecida exitosamente"</li>
                <li>Redirección automática al login</li>
              </ul>
            </Step>
          </StepList>

          <Card variant="success">
            <h4><i className="fas fa-shield-alt"></i> Seguridad del Proceso</h4>
            <ul>
              <li>✓ Token único de un solo uso</li>
              <li>✓ Expiración automática en 1 hora</li>
              <li>✓ Verificación de email existente</li>
              <li>✓ Rate limiting: máximo 3 solicitudes por hora</li>
              <li>✓ Nueva contraseña hasheada con PBKDF2</li>
            </ul>
          </Card>

          <Alert type="warning">
            <strong>Importante:</strong> Si no recibes el email:
            <ul>
              <li>Verifica tu carpeta de spam</li>
              <li>Confirma que ingresaste el email correcto</li>
              <li>Espera unos minutos antes de intentar nuevamente</li>
            </ul>
          </Alert>
        </Section>

        <Section id="cerrar-sesion" title="Cerrar Sesión" icon="fa-sign-out-alt">
          <p className="section-intro">
            Finaliza tu sesión de forma segura cuando termines de usar el sistema.
          </p>

          <h3>Proceso</h3>
          <ul>
            <li><i className="fas fa-times"></i> Invalida sesión actual</li>
            <li><i className="fas fa-key"></i> Borra tokens de autenticación</li>
            <li><i className="fas fa-cookie-bite"></i> Limpia cookies de sesión</li>
            <li><i className="fas fa-route"></i> Redirección automática a página de login</li>
          </ul>

          <Alert type="success">
            <strong>Mensaje:</strong> "Has cerrado sesión correctamente"
          </Alert>

          <Card variant="warning">
            <h4><i className="fas fa-exclamation-triangle"></i> Recomendación</h4>
            <p>
              Siempre cierra sesión si usas el sistema desde una computadora compartida o pública 
              para proteger tu privacidad y la información de tus mascotas.
            </p>
          </Card>
        </Section>
      </div>
    </div>
  );
}

export default Autenticacion;
