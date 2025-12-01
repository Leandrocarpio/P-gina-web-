# 🚀 Diseño Web LC - Portfolio Profesional

Sitio web profesional de servicios de desarrollo frontend especializado en landing pages de alta conversión, desarrollado con arquitectura modular y buenas prácticas modernas.

![Diseño Web LC](img/Servicio.png)

## 📋 Descripción

**Diseño Web LC** es un portfolio profesional que ofrece servicios de desarrollo web especializado en landing pages optimizadas para conversión. El proyecto implementa las mejores prácticas de desarrollo frontend moderno, incluyendo diseño responsivo, arquitectura modular y optimización de rendimiento.

## 🚀 Características

- ✅ **Diseño 100% Responsive** - Adaptado a todos los dispositivos (móvil, tablet, escritorio)
- ✅ **Hero Impactante** - Sección principal con llamada a acción clara
- ✅ **Portfolio Interactivo** - Carrusel 3D con proyectos reales
- ✅ **Sistema de Contacto** - Formulario funcional con validación
- ✅ **CV Profesional** - Página "Sobre Mí" con experiencia y habilidades
- ✅ **LocalStorage** - Persistencia de datos de formularios y preferencias
- ✅ **Animaciones Modernas** - Efectos suaves al hacer scroll
- ✅ **ES Modules** - Código modular y organizado
- ✅ **SEO Optimizado** - Metaetiquetas y estructura semántica
- ✅ **Accesibilidad** - Navegación intuitiva y ARIA labels

## 📁 Estructura de Archivos

```
diseño-web-lc/
├── index.html              # Página principal (Landing)
├── about.html              # CV profesional
├── contact.html            # Formulario de contacto
├── styles.css              # Estilos principales
├── styles-about.css        # Estilos específicos para CV
├── styles-contact.css      # Estilos específicos para contacto
├── js/                     # Lógica de la aplicación
│   ├── main.js            # Punto de entrada (módulo principal)
│   ├── navigation.js      # Navegación y scroll suave
│   ├── portfolio.js       # Carrusel interactivo de proyectos
│   ├── ui.js              # Efectos de UI y componentes
│   └── storage.js         # Manejo de localStorage
├── img/                    # Imágenes del proyecto
│   ├── Servicio.png
│   ├── CV.jpg
│   └── portfolio/
└── README.md              # Documentación
```

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Diseño moderno con Grid, Flexbox y Variables CSS
- **JavaScript ES6+**: Sintaxis moderna y modular

### Características de Implementación
- **ES Modules**: `import/export` para modularización
- **LocalStorage API**: Persistencia de datos del cliente
- **Intersection Observer**: Animaciones al hacer scroll
- **CSS Variables**: Sistema de diseño consistente
- **Responsive Design**: Enfoque mobile-first
- **Bootstrap Icons**: Iconografía profesional
- **Form Validation**: Validación en tiempo real
- **Smooth Scrolling**: Navegación fluida entre secciones

## 📦 Módulos del Proyecto

### `main.js` - Punto de Entrada Principal
Inicializa todos los módulos y coordina la aplicación:

```javascript
import { initNavigation } from './navigation.js';
import { initPortfolioCarousel } from './portfolio.js';
import { initFAQ } from './ui.js';

// Inicializa navegación, carousel, FAQ y efectos
```

### `navigation.js` - Sistema de Navegación
Maneja menú móvil, scroll suave y detección de sección activa:

```javascript
export function initNavigation() {
    initNavToggle();      // Menú móvil responsive
    initSmoothScroll();   // Scroll suave entre secciones
    initActiveSection();  // Detección de sección activa
}
```

### `portfolio.js` - Carrusel Interactivo
Sistema de carrusel para mostrar proyectos con funcionalidades avanzadas:

```javascript
export function initPortfolioCarousel() {
    // Proyectos con datos completos
    // Navegación manual/automática
    // Soporte para touch (swipe)
    // Indicadores visuales
}
```

**Proyectos Incluidos:**
- **Mendoza Wine**: Landing para bodega premium
- **El Caverna Gym**: Sitio web para gimnasio
- **Libera tu Luz Interior**: Página web espiritual

### `ui.js` - Componentes de Interfaz
Efectos visuales, validaciones y componentes UI:

```javascript
export function initFAQ()              // Sistema de preguntas frecuentes
export function initCardHoverEffects() // Efectos hover en tarjetas
export function initFormValidation()   // Validación de formularios
export function showToast()            // Notificaciones toast
```

### `storage.js` - Persistencia de Datos
Gestión de localStorage para formularios y preferencias:

```javascript
export function saveContactForm()      // Guarda submissions de contacto
export function getUserPreferences()   // Obtiene preferencias del usuario
export function trackEvent()           // Analytics básicos
export function getStorageSize()       // Monitorea uso de almacenamiento
```

## 🎨 Características de Diseño

### Paleta de Colores
- **Primary**: `#0F3B66` (Azul profesional)
- **Primary Light**: `#1a5a8f` (Azul claro)
- **Secondary**: `#10B981` (Verde éxito)
- **Light Background**: `#E8F0F8` (Fondo suave)
- **Dark**: `#1F2937` (Texto principal)
- **Gray**: `#6B7280` (Texto secundario)

### Tipografía
- **Font Family**: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Encabezados**: Bold 700-900
- **Texto Base**: Regular 400-500
- **Interlineado**: 1.6 para mejor legibilidad

### Efectos Visuales
- Hero con gradiente e imagen de fondo
- Navbar sticky con efecto scroll
- Cards con hover y elevación
- Animaciones con Intersection Observer
- Transiciones suaves en elementos interactivos
- Carrusel con overlay de información

## 💻 Instalación y Uso

### Requisitos
- Navegador web moderno (Chrome 90+, Firefox 88+, Safari 14+)
- Servidor local para desarrollo (opcional)

### Instalación Local

1. **Clonar el repositorio**

```bash
git clone https://github.com/Leandrocarpio/diseño-web-lc.git
cd diseño-web-lc
```

2. **Ejecutar el proyecto**

**Opción 1**: Directamente en el navegador
- Simplemente abre `index.html` en tu navegador

**Opción 2**: Con servidor local (recomendado para desarrollo)

```bash
# Usando Python
python -m http.server 8000

# Usando Node.js con http-server
npx http-server
```

3. **Acceder al sitio**

```
http://localhost:8000
```

### Desarrollo
- Modifica los archivos según necesites:
  - `index.html`, `about.html`, `contact.html` para estructura
  - `styles.css` y variantes para estilos
  - Archivos en `/js/` para funcionalidad
- Guarda los cambios y actualiza el navegador

## 📱 Compatibilidad

✅ **Desktop**: Chrome, Firefox, Safari, Edge  
✅ **Mobile**: iOS Safari, Chrome Mobile  
✅ **Tablet**: iPad, Android tablets  
✅ **Resoluciones**: 320px a 4K

## 🔄 Flujo de la Aplicación

```
Usuario accede al sitio
    ↓
main.js inicializa módulos
    ↓
navigation.js configura navegación
    ↓
portfolio.js carga proyectos
    ↓
ui.js activa efectos y validaciones
    ↓
storage.js maneja persistencia
    ↓
Interacción del usuario
    ↓
Actualización dinámica de UI
```

## 📈 Futuras Mejoras

- [ ] Integración con backend para formularios
- [ ] Sistema de blog/articles
- [ ] Panel de administración básico
- [ ] Galería de proyectos más extensa
- [ ] Sistema de testimonios dinámicos
- [ ] Analytics más avanzados
- [ ] Internacionalización (ES/EN)
- [ ] Modo oscuro/claro
- [ ] Optimización de imágenes con WebP
- [ ] PWA (Progressive Web App)

## 👨‍💻 Autor

**Leandro Gabriel Carpio**  
Desarrollador Frontend Especializado en Landings

- **GitHub**: [@Leandrocarpio](https://github.com/Leandrocarpio)
- **WhatsApp**: [+54 261 6123777](https://wa.me/542616123777)
- **Email**: [leo_gabriel_carpio@hotmail.com](mailto:leo_gabriel_carpio@hotmail.com)
- **LinkedIn**: [Leandro Carpio](https://www.linkedin.com/in/leandrocarpio/)
- **Portfolio**: [Diseño Web LC](https://leandrocarpio.github.io/diseño-web-lc/)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver detalles en el archivo LICENSE.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si querés mejorar este proyecto:

1. Haz fork del repositorio
2. Crea una rama para tu función (`git checkout -b feature/NuevaFuncion`)
3. Commit tus cambios (`git commit -m 'Agrega NuevaFuncion'`)
4. Push a la rama (`git push origin feature/NuevaFuncion`)
5. Abre un Pull Request

---

⭐ **Si te gustó este proyecto, dale una estrella en GitHub!**

🚀 **Diseño Web LC** - Donde el diseño profesional se encuentra con la conversión efectiva.

<div align="center">

✨ **Hecho con ❤️ por Leandro Carpio**  
*Desarrollador Frontend | Especialista en Landing Pages*

[📞 Contactar para Proyectos](https://wa.me/542616123777) | [💼 Ver Portfolio](https://leandrocarpio.github.io/diseño-web-lc/)

</div>
