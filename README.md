# Todo List App

Una aplicación de lista de tareas desarrollada con React y TypeScript que permite gestionar tareas de manera interactiva.

## Características

- **Agregar tareas:** Crear nuevas tareas con texto personalizado
- **Marcar como completada:** Toggle del estado de completado con efecto de tachado
- **Editar tareas:** Funcionalidad para modificar el contenido de las tareas (en desarrollo)
- **Eliminar tareas:** Remover tareas de la lista
- **Interfaz intuitiva:** Diseño limpio con iconos de React Icons

## Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para mayor robustez
- **Vite** - Herramienta de construcción rápida
- **React Icons** - Iconografía para la interfaz
- **CSS** - Estilos personalizados

## Estructura del Proyecto

```
src/
├── components/
│   ├── TodoList.tsx      # Componente principal de la lista
│   ├── SingleTodo.tsx    # Componente individual de cada tarea
│   ├── InputField.tsx    # Campo de entrada para nuevas tareas
│   └── style.css         # Estilos de los componentes
├── model.ts              # Definición de tipos TypeScript
└── App.tsx               # Componente raíz de la aplicación
```

## Funcionalidades Principales

- **Gestión de estado:** Uso de React hooks para manejar el estado de las tareas
- **Tipado fuerte:** Interfaces TypeScript para garantizar la integridad de datos
- **Componentes reutilizables:** Arquitectura modular y escalable
- **UX optimizada:** Feedback visual inmediato para las acciones del usuario

Este proyecto demuestra las mejores prácticas de desarrollo con React y TypeScript, incluyendo el manejo de props, estado, y la creación de componentes funcionales tipados.
