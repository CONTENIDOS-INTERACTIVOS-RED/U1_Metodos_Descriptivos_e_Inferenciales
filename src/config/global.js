export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Fundamentos de la estadística descriptiva',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptos básicos de estadística',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Medidas de tendencia central',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Medidas de dispersión y coeficiente de variación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Casos prácticos empresariales',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Relación con la inteligencia de negocios (BI)',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Aportes teóricos',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Representación gráfica de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Herramientas tecnológicas para la visualización de datos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Interpretación de gráficos y su papel en la estrategia empresarial',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Visualización e indicadores claves (KPI)',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Distribuciones de probabilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Distribución normal y su aplicación en el mundo empresarial',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Distribuciones discretas binomial y de Poisson: decisiones bajo incertidumbre',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Davenport, T. (2006). Competing on Analytics. Harvard Business Review, 84(1), 98-107.',
      link:
        'https://www.researchgate.net/publication/7327312_Competing_on_Analytics',
    },
    {
      referencia:
        'Gutiérrez, N. L. (2019). Cuadro de mando integral: evolución, conceptualización y actualidad. Revista Observatorio de la Economía Latinoamericana.',
      link:
        'https://www.eumed.net/rev/oel/2019/07/cuadro-mando-do-integral.html',
    },
    {
      referencia:
        'Tufte, E. R. (2001). The Visual Display of Quantitative Information (2ª ed.). Graphics Press.',
      link:
        'https://lmscontent.embanet.com/USC/CMGT587/Tufte%20Ch2%20and%205.pdf',
    },
    {
      referencia:
        'Montgomery, D. C. & Runger, G. C. (2019). Applied statistics and probability for engineers. (7ma ed.). John Wiley & Sons.',
      link:
        'https://kolegiite.com/EE_library/books_and_lectures/Математика/Douglas%20C.%20Montgomery%2C%20George%20C.%20Runger%20-%20Applied%20Statistics%20and%20Probability%20for%20Engineers-Wiley%20%282018%29.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Cuadro de mando integral (CMI)',
      significado:
        'Herramienta de gestión que traduce la estrategia organizacional en indicadores cuantificables, visualizados en reportes o dashboards.',
    },
    {
      termino: 'Dashboard',
      significado:
        'Panel visual que integra gráficos, indicadores y tablas para facilitar la toma de decisiones en tiempo real.',
    },
    {
      termino: 'Desviación estándar',
      significado:
        'Medida que indica cuánto se dispersan los datos respecto a la media.',
    },
    {
      termino: 'Distribución binomial',
      significado:
        'Distribución discreta que modela la cantidad de éxitos en un número fijo de ensayos, con dos posibles resultados.',
    },
    {
      termino: 'Distribución de Poisson',
      significado:
        'Distribución discreta que describe la probabilidad de un número de eventos en un intervalo de tiempo o espacio, cuando ocurren al azar.',
    },
    {
      termino: 'Distribución de probabilidad',
      significado:
        'Función matemática que describe la probabilidad de ocurrencia de los diferentes valores de una variable aleatoria.',
    },
    {
      termino: 'Distribución normal',
      significado:
        'Distribución continua simétrica con forma de campana, muy utilizada por su frecuencia en fenómenos naturales y sociales.',
    },
    {
      termino: 'Estadística',
      significado:
        'Rama de las matemáticas que recolecta, organiza, analiza e interpreta datos, para tomar decisiones informadas.',
    },
    {
      termino: 'Gráfico circular o de pastel',
      significado:
        'Visualiza proporciones como partes de un todo, útil para mostrar porcentajes o distribuciones relativas.',
    },
    {
      termino: 'Gráfico de barras',
      significado:
        'Representación visual que muestra la frecuencia de categorías mediante barras horizontales o verticales.',
    },
    {
      termino: 'Histograma',
      significado:
        'Gráfico de barras contiguas que representan la distribución de frecuencias de datos agrupados en intervalos.',
    },
    {
      termino: 'Media aritmética',
      significado:
        'Promedio de un conjunto de datos, obteniendo sumando todos los valores y dividiendo entre la cantidad de observaciones.',
    },
    {
      termino: 'Mediana',
      significado:
        'Valor central de un conjunto de datos ordenado; divide la muestra en dos partes iguales.',
    },
    {
      termino: 'Moda',
      significado: 'Valor que más se repite en un conjunto de datos.',
    },
    {
      termino: 'Probabilidad',
      significado:
        'Valor numérico entre 0 y 1 que indica la posibilidad de que ocurra un evento.',
    },
    {
      termino: 'Rango',
      significado:
        'Diferencia entre el valor máximo y el mínimo de un conjunto de datos.',
    },
    {
      termino: 'Tabla dinámica',
      significado:
        'Función en programas como Excel o Power BI que permite reorganizar y resumir grandes cantidades de datos de manera interactiva.',
    },
    {
      termino: 'Variable aleatoria',
      significado:
        'Variable que toma distintos valores numéricos dependiendo del resultado de un experimento aleatorio.',
    },
    {
      termino: 'Varianza',
      significado:
        'Promedio de las diferencias al cuadrado respecto a la media; refleja la dispersión general de los datos.',
    },
    {
      termino: 'Coeficiente de variación',
      significado:
        'Relación entre la desviación estándar y la media, expresada como porcentaje; útil para comparar variabilidad entre conjuntos.',
    },
  ],
}
