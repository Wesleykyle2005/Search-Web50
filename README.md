# Search-Web50

## Descripción del Proyecto

**Search-Web50** es una implementación del front-end de Google Search, Google Image Search y Google Advanced Search. Este proyecto corresponde al **Proyecto 0** del curso [CS50's Web Programming with Python and JavaScript](https://cs50.harvard.edu/web/projects/0/search/) de Harvard University.

## Objetivo

El objetivo de este proyecto es crear una interfaz web que simule la funcionalidad de búsqueda de Google, permitiendo a los usuarios realizar búsquedas básicas, búsquedas de imágenes y búsquedas avanzadas utilizando los parámetros GET de Google.

## Características Implementadas

### ✅ Páginas Principales
- **`index.html`** - Página principal de búsqueda de Google
- **`imagenes.html`** - Página de búsqueda de imágenes de Google
- **`advanced-search.html`** - Página de búsqueda avanzada de Google

### ✅ Funcionalidades de Búsqueda
- **Búsqueda Básica**: Campo de búsqueda centrado con esquinas redondeadas
- **Búsqueda de Imágenes**: Búsqueda específica para imágenes usando el parámetro `tbm=isch`
- **Búsqueda Avanzada**: Múltiples campos de búsqueda con opciones específicas
- **"I'm Feeling Lucky"**: Botón que lleva directamente al primer resultado de búsqueda

### ✅ Campos de Búsqueda Avanzada
- **"all these words"** - Buscar páginas con todas estas palabras
- **"this exact word or phrase"** - Buscar esta palabra o frase exacta
- **"any of these words"** - Buscar cualquiera de estas palabras
- **"none of these words"** - Excluir estas palabras de la búsqueda
- **"numbers ranging from"** - Rango de números
- **"language"** - Filtrar por idioma
- **"region"** - Filtrar por región
- **"last update"** - Filtrar por fecha de actualización
- **"site or domain"** - Buscar en un sitio específico
- **"terms appearing"** - Dónde aparecen los términos
- **"file type"** - Tipo de archivo
- **"usage rights"** - Derechos de uso

### ✅ Diseño y UX
- **Interfaz Responsiva**: Diseño adaptable a diferentes tamaños de pantalla
- **Navegación Intuitiva**: Enlaces entre páginas en la esquina superior derecha
- **Estética Google**: CSS que replica la apariencia de Google
- **Menú Desplegable**: Menú de configuración funcional
- **Etiquetas Semánticas**: HTML5 con estructura semántica apropiada

### ✅ Optimización Profesional
- **SEO Optimizado**: Meta tags completos para mejor indexación
- **Favicon Personalizado**: Icono de Google para identidad visual
- **Open Graph Cards**: Preview atractivo para redes sociales (Instagram, Facebook)
- **Twitter Cards**: Optimización para compartir en Twitter
- **Meta Tags Completos**: Charset, viewport, description, keywords, author
- **Títulos Descriptivos**: Títulos específicos para cada página

## Estructura del Proyecto

```
Search-Web50/
├── index.html              # Página principal de búsqueda
├── imagenes.html           # Página de búsqueda de imágenes
├── advanced-search.html    # Página de búsqueda avanzada
├── css/
│   └── style.css          # Estilos CSS del proyecto
├── js/
│   └── script.js          # Funcionalidad JavaScript
├── images/
│   ├── search.png         # Captura de pantalla de la página principal
│   ├── images.png         # Captura de pantalla de búsqueda de imágenes
│   ├── advance.png        # Captura de pantalla de búsqueda avanzada
│   └── google_icon.ico    # Favicon del proyecto
└── README.md              # Este archivo
```

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica con etiquetas modernas
- **CSS3**: Estilos responsivos y diseño moderno
- **JavaScript**: Funcionalidad interactiva y manejo de formularios
- **Font Awesome**: Iconos para la interfaz
- **Google Fonts**: Tipografía Roboto y Source Code Pro

## Características de SEO y Redes Sociales

### Meta Tags Implementados
- **Charset UTF-8**: Codificación de caracteres universal
- **Viewport**: Optimización para dispositivos móviles
- **Description**: Descripciones específicas para cada página
- **Keywords**: Palabras clave relevantes para SEO
- **Author**: Información del autor del proyecto
- **Robots**: Control de indexación y seguimiento

### Open Graph (Instagram/Facebook)
- **og:type**: Tipo de contenido (website)
- **og:title**: Títulos optimizados para redes sociales
- **og:description**: Descripciones atractivas para compartir
- **og:image**: Capturas de pantalla como preview
- **og:url**: URLs específicas para cada página
- **og:site_name**: Nombre del proyecto

### Twitter Cards
- **twitter:card**: Tarjetas de resumen con imagen grande
- **twitter:title**: Títulos optimizados para Twitter
- **twitter:description**: Descripciones específicas para Twitter
- **twitter:image**: Imágenes de preview para Twitter

## Parámetros GET de Google

El proyecto utiliza los siguientes parámetros GET para comunicarse con Google:

- **`q`**: Query principal de búsqueda
- **`tbm=isch`**: Para búsqueda de imágenes
- **`btnI`**: Para "I'm Feeling Lucky"
- **`as_q`**: "all these words"
- **`as_epq`**: "this exact word or phrase"
- **`as_oq`**: "any of these words"
- **`as_eq`**: "none of these words"
- **`as_nlo`/`as_nhi`**: Rango de números
- **`lr`**: Idioma
- **`cr`**: Región
- **`as_qdr`**: Última actualización
- **`as_sitesearch`**: Sitio o dominio
- **`as_occt`**: Dónde aparecen los términos
- **`as_filetype`**: Tipo de archivo
- **`as_rights`**: Derechos de uso

## Capturas de Pantalla

### Página Principal de Búsqueda
![Página Principal](images/search.png)
*Interfaz principal de búsqueda con campo centrado*

### Página de Búsqueda de Imágenes
![Búsqueda de Imágenes](images/images.png)
*Interfaz especializada para búsqueda de imágenes de Google*

### Página de Búsqueda Avanzada
![Búsqueda Avanzada](images/advance.png)
*Interfaz completa de búsqueda avanzada con múltiples opciones de filtrado*

## Cómo Usar

1. **Clona o descarga** el proyecto
2. **Abre `index.html`** en tu navegador web
3. **Realiza búsquedas** usando cualquiera de las tres páginas disponibles
4. **Navega entre páginas** usando los enlaces en la esquina superior derecha

## Especificaciones del Proyecto CS50

Este proyecto cumple con todas las especificaciones requeridas por [CS50 Web Programming](https://cs50.harvard.edu/web/projects/0/search/):

- ✅ Mínimo tres páginas (index.html, imagenes.html, advanced-search.html)
- ✅ Enlaces de navegación en la esquina superior derecha
- ✅ Campo de búsqueda centrado con esquinas redondeadas
- ✅ Botón "Google Search" centrado debajo del campo de búsqueda
- ✅ Funcionalidad de búsqueda de imágenes
- ✅ Cuatro campos principales de búsqueda avanzada
- ✅ Campos de búsqueda avanzada alineados a la izquierda y apilados verticalmente
- ✅ Botón "Advanced Search" azul con texto blanco
- ✅ Botón "I'm Feeling Lucky" funcional
- ✅ CSS que replica la estética de Google

## Mejoras Profesionales Implementadas

### SEO y Optimización
- ✅ Meta tags completos para mejor indexación
- ✅ Favicon personalizado para identidad visual
- ✅ Títulos descriptivos específicos por página
- ✅ Descripciones optimizadas para buscadores

### Redes Sociales
- ✅ Open Graph cards para Instagram y Facebook
- ✅ Twitter Cards para compartir en Twitter
- ✅ Imágenes de preview atractivas
- ✅ URLs específicas para cada página

### Accesibilidad y UX
- ✅ Viewport optimizado para dispositivos móviles
- ✅ Codificación UTF-8 para caracteres especiales
- ✅ Control de robots para indexación
- ✅ Información de autoría clara

## Créditos

- **Curso**: [CS50's Web Programming with Python and JavaScript](https://cs50.harvard.edu/web/)
- **Universidad**: Harvard University
- **Instructores**: Brian Yu y David J. Malan
- **Proyecto Original**: [CS50 Search Project](https://cs50.harvard.edu/web/projects/0/search/)

## Licencia

Este proyecto es parte del curso CS50 Web Programming y está destinado únicamente para fines educativos.

---

*Desarrollado como parte del Proyecto 0 de CS50 Web Programming con Python y JavaScript* 