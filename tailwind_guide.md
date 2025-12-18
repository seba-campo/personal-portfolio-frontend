# Guía Rápida de Tailwind CSS

Esta guía resume los conceptos y clases más utilizados para ajustar el diseño de tu portfolio sin salir del HTML/JSX.

## 1. Colores y Fondos
El formato general es `propiedad-color-intensidad` (la intensidad va de **50** a **950**).

- **Fondos (`bg-`)**:
    - `bg-gray-950`: Fondo muy oscuro (casi negro).
    - `bg-blue-600`: Azul intermedio.
    - `bg-white`: Blanco puro.
    - `bg-transparent`: Fondo transparente.
    - `bg-gray-950/80`: Fondo oscuro con **80% de opacidad** (útil para efectos de cristal).

- **Texto (`text-`)**:
    - `text-white`: Texto blanco.
    - `text-gray-400`: Gris claro (bueno para subtítulos o textos secundarios).
    - `text-blue-500`: Azul (para enlaces o énfasis).

- **Bordes (`border-`)**:
    - `border`: Agrega un borde de 1px.
    - `border-b`: Agrega borde solo en la parte inferior (bottom).
    - `border-gray-800`: Define el color del borde.
    - `rounded-lg`: Bordes redondeados medianos.
    - `rounded-full`: Bordes completamente redondos (círculos).

## 2. Espaciado (Padding y Margin)
Tailwind usa una escala donde **`1` unidad = `0.25rem` (4px)**. Por lo tanto, **`4` = `1rem` (16px)**.

- **Padding (Relleno interno)**:
    - `p-4`: 16px de relleno en *todos* los lados.
    - `px-6`: Relleno **horizontal** (izq/der) de 24px.
    - `py-20`: Relleno **vertical** (arriba/abajo) grande (80px).

- **Margin (Espacio externo)**:
    - `m-4`: 16px de margen en todos los lados.
    - `mt-4`: Margen superior (top).
    - `mb-8`: Margen inferior (bottom).
    - `mx-auto`: Margen automático a los lados (centra un bloque horizontalmente si tiene ancho definido).

## 3. Flexbox (Alinear elementos)
Esencial para layouts unidimensionales (filas o columnas).

- `flex`: Activa el modo Flexbox.
- `flex-col`: Coloca los elementos en columna (uno debajo del otro).
- `flex-row`: Coloca los elementos en fila (por defecto).
- **Alineación Vertical (`items-`)**:
    - `items-center`: Centra verticalmente.
    - `items-start`: Alinea arriba.
- **Alineación Horizontal (`justify-`)**:
    - `justify-center`: Centra todo horizontalmente.
    - `justify-between`: Pone un elemento al inicio y otro al final (ej. Logo a la izq, Menú a la der).
- `gap-4`: Espacio de 16px entre cada elemento del flex.

## 4. Grid (Grillas)
Ideal para galerías de tarjetas o estructuras 2D.

- `grid`: Activa Grid.
- `grid-cols-1`: 1 columna (vista móvil por defecto).
- `md:grid-cols-3`: 3 columnas en pantallas medianas ("md" es un *breakpoint*).
- `gap-6`: Espacio entre celdas de la grilla.

## 5. Tipografía
- **Tamaño**: `text-xs`, `text-sm`, `text-base` (normal), `text-xl`, `text-4xl`, `text-6xl`.
- **Peso**: `font-normal`, `font-medium`, `font-semibold`, `font-bold`.
- **Alineación**: `text-center`, `text-left`, `text-right`.

## 6. Interactividad (Hover y Focus)
Agrega el prefijo de estado seguido de dos puntos.

- `hover:text-white`: Al pasar el mouse, el texto se vuelve blanco.
- `hover:bg-blue-700`: Al pasar el mouse, el fondo cambia.
- `hover:scale-105`: Al pasar el mouse, el elemento se agranda un 5%.
- `transition-all duration-300`: Suaviza los cambios de estado (animación de 300ms).

## 7. Responsive (Adaptabilidad)
Usa prefijos para aplicar estilos solo a partir de cierto tamaño de pantalla.

- `md:flex`: En móviles puede estar oculto o ser block, pero en pantallas medias (tablets/laptops) se vuelve Flex.
- `hidden md:block`: Oculto en móvil, visible en pantallas medias en adelante.
- `lg:grid-cols-3`: En pantallas grandes, usa 3 columnas.

## Ejemplo Práctico (Botón)

```jsx
<button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
  Click Aquí
</button>
```

- Fondo azul (`bg-blue-600`) que se oscurece al pasar el mouse (`hover:bg-blue-700`).
- Texto blanco y negrita (`text-white font-bold`).
- Relleno cómodo (`py-2 px-4`).
- Bordes redondeados (`rounded`).
- Transición suave de colores (`transition-colors`).
