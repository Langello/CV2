# Estructura del Proyecto CV

## Organización de Archivos

```
src/
├── components/           # Componentes React reutilizables
│   ├── Header.jsx       # Componente del encabezado con foto y datos personales
│   ├── Main.jsx         # Componente principal que contiene los acordeones
│   ├── Footer.jsx       # Componente del pie de página con enlaces de contacto
│   ├── Experience.jsx   # Componente de experiencia laboral
│   ├── Education.jsx    # Componente de educación
│   ├── Languages.jsx    # Componente de idiomas
│   ├── Skills.jsx       # Componente de habilidades
│   └── index.js         # Archivo de exportación de componentes
├── hooks/               # Hooks personalizados
│   ├── useScrollToSection.js  # Hook para scroll automático a secciones
│   ├── useFaviconEffect.js    # Hook para efectos del favicon
│   └── index.js         # Archivo de exportación de hooks
├── App.jsx              # Componente principal de la aplicación
├── index.js             # Punto de entrada de la aplicación
└── index.css            # Estilos globales
```

## Componentes

### Header
- Muestra la foto de perfil
- Contiene el nombre, título profesional y descripción breve

### Main
- Contiene todos los acordeones con la información del CV
- Recibe la función `handleClick` como prop para el scroll automático

### Footer
- Enlaces a redes sociales y contacto
- Iconos de Font Awesome

### Componentes de Sección
- **Experience**: Experiencia laboral con enlaces a proyectos
- **Education**: Formación académica y cursos
- **Languages**: Idiomas y niveles
- **Skills**: Habilidades técnicas organizadas en dos columnas

## Hooks Personalizados

### useScrollToSection
- Maneja el scroll automático cuando se hace clic en un header del acordeón
- Utiliza `useCallback` para optimizar el rendimiento

### useFaviconEffect
- Cambia el favicon y título de la pestaña cuando se pierde el foco
- Utiliza `useEffect` para manejar los event listeners

## Beneficios de esta Estructura

1. **Separación de responsabilidades**: Cada componente tiene una función específica
2. **Reutilización**: Los componentes pueden ser reutilizados fácilmente
3. **Mantenibilidad**: Es más fácil encontrar y modificar código específico
4. **Escalabilidad**: Fácil agregar nuevos componentes o funcionalidades
5. **Testing**: Cada componente puede ser testeado de forma independiente
6. **Legibilidad**: El código es más fácil de entender y navegar
