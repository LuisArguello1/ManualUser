import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Alert from "../components/ui/Alert";
import Badge from "../components/ui/Badge";
import StepList from "../components/ui/StepList";
import Table from "../components/ui/Table";
import BreadCrumbs from "../components/ui/BreadCrumbs";
import "./PageStyles.css";

function Mascotas() {
  return (
    <div className="page-container">
      <BreadCrumbs items={["Inicio", "Gestión de Mascotas"]} />

      <div className="page-header">
        <i className="fas fa-dog page-icon"></i>
        <h1>Gestión de Mascotas</h1>
        <p className="page-description">
          Registra, administra y gestiona la información de tus mascotas con
          predicción de IA, biometría canina y más funcionalidades avanzadas.
        </p>
      </div>

      <div className="page-content">
        {/* SECCIÓN 1: LÍMITE DE MASCOTAS */}
        <Section id="registro" title="1. Registro de Mascotas" icon="fa-plus-circle">
          <Alert type="warning">
            <strong>RESTRICCIÓN IMPORTANTE:</strong> Cada usuario tipo OWNER puede
            registrar MÁXIMO 2 MASCOTAS.
          </Alert>

          <h3>
            <i className="fas fa-clipboard-check"></i> Verificación del Sistema
          </h3>
          <ul>
            <li>Antes de mostrar formulario de registro</li>
            <li>Al intentar guardar una nueva mascota</li>
            <li>
              Mensaje: "Has alcanzado el límite máximo de 2 mascotas por usuario. No
              puedes registrar más mascotas."
            </li>
          </ul>

          <h3>
            <i className="fas fa-door-open"></i> Rutas de Acceso
          </h3>
          <ol>
            <li>Dashboard → Botón "Registrar Nueva Mascota"</li>
            <li>Menú lateral → "Registrar Mascota"</li>
            <li>Lista de mascotas → Botón "Agregar Mascota" (si tiene menos de 2)</li>
          </ol>

          <Card variant="info">
            <h4>VALIDACIÓN PREVIA:</h4>
            <p>Si el usuario ya tiene 2 mascotas:</p>
            <ul>
              <li>Se muestra mensaje de límite alcanzado</li>
              <li>Botón de registro deshabilitado</li>
              <li>Opciones: Editar mascota existente o Eliminar una para agregar nueva</li>
            </ul>
          </Card>

          <h3>
            <i className="fas fa-edit"></i> Formulario de Registro - Campos
          </h3>

          <h4>INFORMACIÓN BÁSICA (OBLIGATORIO):</h4>
          <Table
            headers={["Campo", "Tipo", "Validación", "Descripción"]}
            rows={[
              [
                "Nombre de la mascota",
                "Texto",
                "Máximo 120 caracteres",
                "Solo letras y espacios",
              ],
              [
                "Foto de perfil",
                "Imagen",
                "JPG, PNG, WEBP (5MB máx)",
                "Esta foto se usa para predicción de IA",
              ],
            ]}
          />

          <Alert type="info">
            <strong>Recomendación para la foto:</strong> Foto clara, de frente,
            con buena iluminación para mejores resultados de predicción.
          </Alert>

          <h4>INFORMACIÓN AUTOMÁTICA (PREDICCIÓN CON IA):</h4>
          <ul>
            <li>
              <strong>Raza:</strong> Se predice automáticamente (Bulldog,
              Chihuahua, Golden Retriever)
            </li>
            <li>
              <strong>Etapa de vida:</strong> Cachorro, Joven, Adulto, o Senior
            </li>
            <li>
              <strong>Condición corporal:</strong> Delgado, Normal/Ideal, o
              Sobrepeso/Obeso
            </li>
          </ul>

          <p className="text-muted">
            Usuario puede editar manualmente estos campos después de la
            predicción.
          </p>

          <h4>INFORMACIÓN ADICIONAL:</h4>
          <div className="info-grid">
            <div>
              <strong>Sexo:</strong> Macho / Hembra
            </div>
            <div>
              <strong>Edad:</strong> Número + Unidad (años o meses)
            </div>
            <div>
              <strong>Fecha de nacimiento:</strong> Selector de fecha
            </div>
            <div>
              <strong>Peso:</strong> Número decimal en kg (máximo 200 kg)
            </div>
            <div>
              <strong>Color:</strong> Texto libre
            </div>
            <div>
              <strong>Características especiales:</strong> Marcas distintivas,
              comportamiento, alergias
            </div>
          </div>
        </Section>

        {/* SECCIÓN 2: PREDICCIÓN CON IA */}
        <Section id="prediccion-ia" title="2. Predicción con Inteligencia Artificial" icon="fa-brain">
          <p className="section-intro">
            El sistema utiliza modelos de Deep Learning para predecir
            automáticamente características de tu mascota al subir su foto.
          </p>

          <Card variant="primary">
            <h4>
              <i className="fas fa-robot"></i> Tecnología Utilizada
            </h4>
            <ul>
              <li>
                <strong>Modelo Multi-Tarea:</strong> ResNet-18 (11.7M
                parámetros)
              </li>
              <li>
                <strong>Modelo Condición:</strong> ResNet-50 (25.6M parámetros)
              </li>
              <li>
                <strong>Precisión esperada:</strong> 95-99% para razas
                entrenadas
              </li>
            </ul>
          </Card>

          <h3>
            <i className="fas fa-tasks"></i> Proceso de Predicción
          </h3>
          <StepList
            steps={[
              {
                number: 1,
                title: "Usuario sube foto de perfil",
                description:
                  "Selecciona archivo desde su dispositivo. Vista previa se muestra inmediatamente.",
                icon: "fa-upload",
              },
              {
                number: 2,
                title: 'Usuario presiona "Predecir con IA"',
                description:
                  'Se muestra loading spinner con mensaje "Analizando imagen...". La foto se envía al servidor.',
                icon: "fa-magic",
              },
              {
                number: 3,
                title: "Procesamiento en el servidor",
                description:
                  "A) Detección de perro en la imagen, B) Predicción de raza y etapa de vida, C) Predicción de condición corporal",
                icon: "fa-server",
              },
              {
                number: 4,
                title: "Resultados mostrados al usuario",
                description:
                  "Panel con predicciones, nivel de confianza y opción de ver todas las probabilidades.",
                icon: "fa-chart-bar",
              },
            ]}
          />

          <h3>
            <i className="fas fa-percentage"></i> Nivel de Confianza
          </h3>
          <Table
            headers={["Nivel", "Rango", "Color", "Significado", "Acción Recomendada"]}
            rows={[
              [
                "ALTA ✅",
                "> 80%",
                "Verde",
                "El modelo está muy seguro",
                "Aceptar predicción",
              ],
              [
                "MEDIA ⚠️",
                "60% - 80%",
                "Amarillo",
                "El modelo tiene dudas",
                "Revisar y considerar editar",
              ],
              [
                "BAJA ❌",
                "< 60%",
                "Rojo",
                "Predicción poco confiable",
                "Editar manualmente",
              ],
            ]}
          />

          <h3>
            <i className="fas fa-info-circle"></i> Recomendaciones para Mejor
            Predicción
          </h3>
          <div className="two-column-list">
            <Card>
              <h4>✓ FOTO IDEAL:</h4>
              <ul>
                <li>Perro de frente o semi-perfil</li>
                <li>Rostro completo visible</li>
                <li>Buena iluminación natural</li>
                <li>Fondo simple (sin distracciones)</li>
                <li>Perro solo (sin otras mascotas/personas)</li>
                <li>Resolución mínima 224x224 píxeles</li>
                <li>Formato JPG o PNG</li>
                <li>Perro quieto (no borroso)</li>
              </ul>
            </Card>

            <Card>
              <h4>✗ EVITAR:</h4>
              <ul>
                <li>Fotos muy oscuras o a contraluz</li>
                <li>Perro de espalda</li>
                <li>Múltiples perros en la imagen</li>
                <li>Rostro parcialmente oculto</li>
                <li>Imágenes borrosas o movidas</li>
                <li>Filtros o efectos aplicados</li>
              </ul>
            </Card>
          </div>

          <h3>
            <i className="fas fa-exclamation-triangle"></i> Mensajes de Error en
            Predicción
          </h3>
          <Table
            headers={["Error", "Causa", "Solución"]}
            rows={[
              [
                "No se detectó perro",
                "La imagen no contiene un perro visible",
                "Subir foto diferente con el perro visible",
              ],
              [
                "Imagen muy pequeña",
                "Resolución < 50x50 píxeles",
                "Usar imagen de mayor resolución",
              ],
              [
                "Archivo muy grande",
                "Tamaño > 5 MB",
                "Comprimir imagen o usar otra",
              ],
              [
                "Formato no válido",
                "Archivo no es JPG/PNG/WEBP",
                "Convertir imagen a formato compatible",
              ],
              [
                "Confianza baja en raza",
                "El perro no es Bulldog, Chihuahua ni Golden Retriever",
                'Se marca como "Otra raza" - Usuario puede escribir manualmente',
              ],
            ]}
          />

          <Alert type="success">
            <strong>RESULTADO EXITOSO:</strong>
            <ul>
              <li>Notificación: "Mascota registrada exitosamente"</li>
              <li>Redirección a: Lista de mascotas o Detalle de mascota</li>
              <li>Opción destacada: "Agregar Registro Biométrico" (recomendado)</li>
            </ul>
          </Alert>
        </Section>

        {/* SECCIÓN 3: BIOMETRÍA CANINA */}
        <Section id="biometria-canina" title="3. Biometría Canina (Reconocimiento Facial)" icon="fa-camera">
          <p className="section-intro">
            Permite que el sistema reconozca a tu mascota mediante reconocimiento
            facial canino usando tecnología de Deep Learning.
          </p>

          <Alert type="warning">
            <strong>REQUISITOS:</strong> Se necesitan entre 5 y 20 imágenes del
            rostro de tu mascota para entrenar el modelo de reconocimiento.
          </Alert>

          <h3>
            <i className="fas fa-list-ol"></i> Requisitos de las Imágenes
          </h3>
          <Card>
            <h4>CANTIDAD:</h4>
            <ul>
              <li>
                <Badge variant="danger">MÍNIMO:</Badge> 5 imágenes obligatorias
                para entrenar
              </li>
              <li>
                <Badge variant="warning">MÁXIMO:</Badge> 20 imágenes por mascota
              </li>
              <li>
                <Badge variant="success">RECOMENDADO:</Badge> 10-15 imágenes
                para mejor precisión
              </li>
            </ul>

            <h4>CALIDAD:</h4>
            <ul>
              <li>✓ Rostro del perro visible</li>
              <li>✓ Diferentes ángulos (frente, semi-perfil)</li>
              <li>✓ Diferentes expresiones</li>
              <li>✓ Diferentes condiciones de iluminación</li>
              <li>✓ Resolución mínima: 50x50 píxeles</li>
              <li>✓ Formato: JPG, PNG, WEBP</li>
              <li>✓ Tamaño máximo: 5 MB por imagen</li>
            </ul>
          </Card>

          <h3>
            <i className="fas fa-camera-retro"></i> Métodos de Captura
          </h3>
          <div className="method-cards">
            <Card variant="info">
              <h4>
                <i className="fas fa-video"></i> MÉTODO 1: CAPTURA POR CÁMARA WEB
              </h4>
              <p>Ideal para captura en tiempo real</p>
              <ul>
                <li>Sistema activa la cámara web</li>
                <li>Usuario posiciona el rostro del perro</li>
                <li>Presiona "Capturar" para cada foto</li>
              </ul>
              <Badge variant="info">Modo Manual y Automático</Badge>
              <p className="text-muted mt-2">
                <strong>Modo Automático:</strong> Configurable de 1-20 capturas
                con intervalo de 2 segundos entre cada una.
              </p>
            </Card>

            <Card variant="success">
              <h4>
                <i className="fas fa-folder-open"></i> MÉTODO 2: SUBIR ARCHIVOS
              </h4>
              <p>Ideal para fotos ya existentes</p>
              <ul>
                <li>Selección múltiple de archivos</li>
                <li>Drag and drop disponible</li>
                <li>Vista previa antes de subir</li>
              </ul>
              <Badge variant="success">Múltiples archivos</Badge>
            </Card>
          </div>

          <h3>
            <i className="fas fa-tasks"></i> Proceso Completo
          </h3>
          <StepList
            steps={[
              {
                number: 1,
                title: "FASE 1: Captura/Selección de Imágenes",
                description:
                  "Usuario elige método (cámara o archivo) y captura/selecciona de 5 a 20 imágenes. Vista previa y contador visible.",
                icon: "fa-images",
              },
              {
                number: 2,
                title: "FASE 2: Subida al Servidor",
                description:
                  'Usuario presiona "Subir Imágenes". Cada imagen se procesa y valida (rostro canino detectado, calidad suficiente).',
                icon: "fa-cloud-upload-alt",
              },
              {
                number: 3,
                title: "FASE 3: Entrenamiento del Modelo",
                description:
                  'Con mínimo 5 imágenes procesadas, usuario presiona "Entrenar Modelo". Sistema entrena clasificador K-NN con descriptores faciales.',
                icon: "fa-brain",
              },
              {
                number: 4,
                title: "FASE 4: Confirmación",
                description:
                  'Estado actualizado a "Biometría Activa". Mascota ahora puede ser reconocida por el escáner.',
                icon: "fa-check-circle",
              },
            ]}
          />

          <Alert type="success">
            <strong>Tecnología:</strong> EfficientNet B0 (5.3M parámetros) +
            Clasificador K-Nearest Neighbors (k=7). Precisión esperada: 85-92%
            con 10-20 fotos.
          </Alert>

          <h3>
            <i className="fas fa-lightbulb"></i> Recomendaciones para Mejor
            Reconocimiento
          </h3>
          <div className="recommendation-grid">
            <Card>
              <h4>
                <i className="fas fa-camera"></i> ÁNGULOS RECOMENDADOS:
              </h4>
              <ul>
                <li>✓ 3-4 fotos de frente</li>
                <li>✓ 2-3 fotos de perfil derecho</li>
                <li>✓ 2-3 fotos de perfil izquierdo</li>
                <li>✓ 2-3 fotos con diferentes expresiones</li>
              </ul>
            </Card>

            <Card>
              <h4>
                <i className="fas fa-sun"></i> CONDICIONES:
              </h4>
              <ul>
                <li>✓ 3-4 fotos con luz natural</li>
                <li>✓ 2-3 fotos con luz artificial</li>
                <li>✓ 1-2 fotos en exterior</li>
                <li>✓ 1-2 fotos en interior</li>
              </ul>
            </Card>

            <Card>
              <h4>
                <i className="fas fa-smile"></i> EXPRESIONES:
              </h4>
              <ul>
                <li>✓ Con boca cerrada</li>
                <li>✓ Con lengua afuera</li>
                <li>✓ Con orejas paradas</li>
                <li>✓ Con orejas relajadas</li>
              </ul>
            </Card>
          </div>

          <Alert type="danger">
            <strong>EVITAR:</strong> Todas las fotos iguales, todas del mismo
            ángulo, solo selfies con dueño, fotos muy oscuras o borrosas,
            múltiples perros en la foto.
          </Alert>
        </Section>

        {/* SECCIÓN 4: LISTA Y DETALLE */}
        <Section id="lista" title="4. Lista y Detalle de Mascotas" icon="fa-list">
          <h3>
            <i className="fas fa-eye"></i> Visualización por Tipo de Usuario
          </h3>
          <Table
            headers={["Rol", "Acceso", "Funcionalidades"]}
            rows={[
              [
                "OWNER",
                "Solo sus 2 mascotas (o menos)",
                "Vista de tarjetas, editar, eliminar propias mascotas",
              ],
              [
                "VET",
                "TODAS las mascotas del sistema",
                "Ver información completa, usar escáner, no puede editar/eliminar",
              ],
              [
                "ADMIN",
                "TODAS las mascotas del sistema",
                "Acceso completo a gestión, estadísticas",
              ],
            ]}
          />

          <h3>
            <i className="fas fa-id-card"></i> Información en Cada Tarjeta
          </h3>
          <Card>
            <ul>
              <li>
                <i className="fas fa-image"></i> Foto de perfil
              </li>
              <li>
                <i className="fas fa-dog"></i> Nombre de la mascota
              </li>
              <li>
                <i className="fas fa-info-circle"></i> Raza, Edad, Sexo
              </li>
              <li>
                <i className="fas fa-weight"></i> Condición corporal
              </li>
              <li>
                <i className="fas fa-heartbeat"></i> Etapa de vida
              </li>
              <li>
                <Badge variant="success">✅ Biometría Activa</Badge> o{" "}
                <Badge variant="secondary">❌ Sin Biometría</Badge>
              </li>
              <li>
                <Badge variant="info">🆗 Normal</Badge> o{" "}
                <Badge variant="danger">🚨 PERDIDA</Badge>
              </li>
            </ul>
          </Card>

          <h3>
            <i className="fas fa-search"></i> Detalle Completo de Mascota
          </h3>

          <div className="detail-sections">
            <Card variant="info">
              <h4>SECCIÓN 1: DATOS BÁSICOS</h4>
              <p>
                Foto, nombre, raza, edad, fecha de nacimiento, sexo, peso, color,
                etapa de vida, condición corporal, características especiales.
              </p>
            </Card>

            <Card variant="info">
              <h4>SECCIÓN 2: INFORMACIÓN DEL PROPIETARIO</h4>
              <p>Nombre completo, email de contacto, teléfono (si disponible).</p>
            </Card>

            <Card variant="info">
              <h4>SECCIÓN 3: ESTADO BIOMÉTRICO</h4>
              <p>
                Cantidad de imágenes registradas, estado (Activa ≥5 imágenes /
                Inactiva &lt;5), confianza promedio, fecha de último
                entrenamiento.
              </p>
            </Card>

            <Card variant="info">
              <h4>SECCIÓN 4: HISTORIAL</h4>
              <p>
                Fecha de registro, última actualización, cantidad de veces
                reconocida en escáner.
              </p>
            </Card>

            <Card variant="info">
              <h4>SECCIÓN 5: ESTADO ACTUAL</h4>
              <p>
                Normal o Reportada como perdida (con detalles de ubicación y
                fecha si aplica).
              </p>
            </Card>
          </div>

          <h3>
            <i className="fas fa-cogs"></i> Acciones Disponibles (Solo
            Propietario)
          </h3>
          <ul className="actions-list">
            <li>
              <Badge variant="primary">Editar Información</Badge> - Modificar
              todos los campos
            </li>
            <li>
              <Badge variant="info">Agregar/Gestionar Biometría</Badge> -
              Administrar registro biométrico
            </li>
            <li>
              <Badge variant="success">Generar Código QR</Badge> - Crear QR para
              compartir
            </li>
            <li>
              <Badge variant="warning">Generar Carnet</Badge> - Crear carnet
              digital con foto y datos
            </li>
            <li>
              <Badge variant="danger">Reportar como Perdida</Badge> - Activar
              alerta en el sistema
            </li>
            <li>
              <Badge variant="success">Reportar como Encontrada</Badge> - Solo si
              está perdida
            </li>
            <li>
              <Badge variant="danger">Eliminar Mascota</Badge> - Requiere
              confirmación con nombre
            </li>
          </ul>
        </Section>

        {/* SECCIÓN 5: EDITAR MASCOTA */}
        <Section id="editar" title="5. Editar Información de Mascota" icon="fa-edit">
          <Alert type="warning">
            Solo accesible por el propietario de la mascota.
          </Alert>

          <h3>
            <i className="fas fa-list-check"></i> Campos Editables
          </h3>
          <p>TODOS los campos son editables:</p>
          <div className="editable-fields">
            <ul>
              <li>Foto de perfil (cambiar imagen)</li>
              <li>Nombre</li>
              <li>Raza</li>
              <li>Etapa de vida</li>
              <li>Condición corporal</li>
              <li>Sexo</li>
              <li>Edad</li>
              <li>Fecha de nacimiento</li>
              <li>Peso</li>
              <li>Color</li>
              <li>Características especiales</li>
            </ul>
          </div>

          <Alert type="info">
            <strong>NOTA:</strong> Al cambiar la foto de perfil, no se puede
            volver a ejecutar predicción de IA.
          </Alert>

          <h3>
            <i className="fas fa-tasks"></i> Proceso de Edición
          </h3>
          <StepList
            steps={[
              {
                number: 1,
                title: "Formulario precargado",
                description: "Se muestran todos los datos actuales de la mascota",
                icon: "fa-file-alt",
              },
              {
                number: 2,
                title: "Modificar campos deseados",
                description: "Usuario edita los campos que necesite cambiar",
                icon: "fa-edit",
              },
              {
                number: 3,
                title: 'Presionar "Guardar Cambios"',
                description:
                  "Sistema valida los datos (nombre no vacío, foto válida si se cambió)",
                icon: "fa-save",
              },
              {
                number: 4,
                title: "Actualización exitosa",
                description:
                  'Notificación: "Mascota actualizada correctamente". Redirección a detalle de mascota.',
                icon: "fa-check-circle",
              },
            ]}
          />
        </Section>
      </div>
    </div>
  );
}

export default Mascotas;
