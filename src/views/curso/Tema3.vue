<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Distribuciones de probabilidad'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-5
        .col-lg-8
          .bg-color-1.p-4.mb-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema3/1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Las distribuciones de probabilidad, permiten modelar la incertidumbre en fenómenos aleatorios, proporcionando una base matemática para predecir comportamientos futuros a partir de datos históricos. Comprender cómo se distribuyen los datos en escenarios reales, es esencial para anticipar resultados, calcular riesgos y optimizar decisiones empresariales.
      
          p(data-aos="fade-left").mb-4 En contextos de inteligencia de negocios, el uso de distribuciones probabilísticas es vital para tareas como la segmentación de clientes, el pronóstico de ventas, el control de calidad o la detección de fraudes. Además, herramientas como Excel, Python, R o Power BI, facilitan la representación y análisis de estas distribuciones en escenarios reales.

          p(data-aos="fade-left") Conozcamos algunos conceptos básicos de probabilidad y tipos de distribuciones:
      
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")


      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/3.png", alt="").mb-4.mb-lg-0
        .col-lg-8
      
          AcordionA(tipo="b")
            .div(titulo="¿Qué es una probabilidad? ¿Qué es una distribución de probabilidad?")
              p Es una medida numérica de la posibilidad de ocurrencia de un evento. Se expresa entre 0 y 1.

              p Describe cómo se distribuyen los posibles valores de una variable aleatoria y qué probabilidad tiene cada uno.
      
            .div(titulo="¿Qué es una variable aleatoria?")
              p Representa el resultado numérico de un experimento aleatorio. Puede ser:

              .ps-4

                ul.lista-ul.mb-3
                  li
                    i.lista-ul__vineta
                    | #[b Discreta:] toma valores específicos (número de ventas).

                  li
                    i.lista-ul__vineta
                    | #[b Continua:] puede tomar cualquier valor dentro de un rango (tiempo de atención al cliente).
                
      
            .div(titulo="Clasificación de distribuciones")
              p #[b Distribuciones discretas:]
              .ps-4
                ul.lista-ul.mb-3
                  li
                    i.lista-ul__vineta
                    | Binomial.
                  li
                    i.lista-ul__vineta
                    | Poisson.
              
              p #[b Distribuciones continuas:]
              .ps-4
                ul.lista-ul.mb-3
                  li
                    i.lista-ul__vineta
                    | Normal.
                  li
                    i.lista-ul__vineta
                    | Uniforme.
                  li
                    i.lista-ul__vineta
                    | Exponencial.

      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 En un ejercicio simple, supongamos que un call center recibe en promedio 3 llamadas por minuto. ¿Cuál es la probabilidad para que, en un minuto, reciba exactamente 2 llamadas?
      
          p(data-aos="fade-left").mb-4 Se puede usar la #[b distribución de Poisson].


          .bg-color-3.p-4(data-aos="fade-left").mb-4
            p(data-aos="fade-left").mb-4 #[b La fórmula es:]

            p.mb-0 P(x; λ) = (e^−λ)(λ^x) / x!
            p.mb-0 P(2;3) = (e^-3)(3²) / 2! = 0.224

          h2 Relación con la estadística inferencial

          p(data-aos="fade-left").mb-4 Las distribuciones son la base para calcular estimaciones, márgenes de error e hipótesis estadísticas. Permiten modelar incertidumbre y tomar decisiones a partir de muestras.
          p Montgomery y Runger (2019), destacan que "la comprensión de las distribuciones probabilísticas es esencial para todo análisis inferencial basado en datos".


                  
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")


      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] Distribución normal y su aplicación en el mundo empresarial

      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 La distribución normal es una de las más importantes en estadística. Tiene forma de campana simétrica, y está definida por su media (μ) y desviación estándar (σ).

          p(data-aos="fade-left").mb-4 Características:


          .bg-color-4.p-4(data-aos="fade-left").mb-4
            ul.lista-ul.mb-3
              li
                i.lista-ul__vineta
                | Simétrica respecto a la media.
              li
                i.lista-ul__vineta
                | El 68 % de los datos está entre μ ± 1σ.
              li
                i.lista-ul__vineta
                | El 95 % entre μ ± 2σ.
              li
                i.lista-ul__vineta
                | El 99.7 % entre μ ± 3σ. (Regla empírica o 68-95-99.7)
            
      
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left") Por ejemplo, una empresa desea analizar el tiempo promedio que tarda en entregar pedidos. Determina que el tiempo promedio es de 24 horas, con una desviación estándar de 2 horas. ¿Qué probabilidad hay de que un pedido se entregue entre 22 y 26 horas?

          p(data-aos="fade-left").mb-4 Se calcula el área bajo la curva normal, entre esos valores.
      
          .bg-color-1.p-4(data-aos="fade-left").mb-4
            p.mb-0 Z = (X - μ) / σ
            p.mb-0 Z1 = (22 - 24) / 2 = -1
            p.mb-0 Z2 = (26 - 24) / 2 = 1

          p(data-aos="fade-left").mb-4 Según la tabla Z, la probabilidad entre –1 y 1 es ≈ 68 %.

          p(data-aos="fade-left").mb-4 Es decir, un 68 % de los pedidos, se entregan en ese rango.

          p(data-aos="fade-left").mb-4 #[b Aplicaciones BI y control de calidad:]



      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/6.png", data-aos="zoom-in")


      .row.justify-content-center.align-items-stretch.mb-4
        .col-lg-4
          .bg-color-2.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/7.svg", style="max-width: 85px").mx-auto
              .col-lg
                p.mb-0 Predicción de ventas o demandas con modelos normales.
      
        .col-lg-4
          .bg-color-2.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/8.svg", style="max-width: 85px").mx-auto
              .col-lg
                p.mb-0 Control de procesos mediante gráficos de control (Six Sigma).


        
        .col-lg-4
          .bg-color-2.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/9.svg", style="max-width: 85px").mx-auto
              .col-lg
                p.mb-0 Segmentación de clientes, según patrones normales de compra.

      .bg-full-width.bg-color-1.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Como herramientas, podemos sugerir Excel (función NORM.DIST), Python (scipy.stats.norm), Power BI (mediante DAX o scripts R/Python embebidos).


      #t_3_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.2] Distribuciones discretas binomial y de Poisson: decisiones bajo incertidumbre


      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left") Primero, conozcamos la distribución binomial. 
      
          p(data-aos="fade-left") #[b Distribución binomial:]

          p Se usa cuando:
      
          .bg-color-4.p-4(data-aos="fade-left")
            ul.lista-ul.mb-3
              li
                i.lista-ul__vineta
                | Hay un número fijo de ensayos (n).
              li
                i.lista-ul__vineta
                | Cada ensayo tiene dos resultados (éxito o fracaso).
              li
                i.lista-ul__vineta
                | La probabilidad de éxito (p) es constante.
            
      

          p(data-aos="fade-left") Como ejemplo, podemos mencionar una empresa de e-commerce que quiere saber la probabilidad de que, de los 10 clientes que reciben una promoción, al menos 3 realicen una compra (con p = 0.2).

          p Se usa la fórmula de la binomial:

      
          .bg-color-3.p-4(data-aos="fade-left").mb-4
            p.mb-0 P(X = x) = (nCx) * p^x * (1-p)^(n-x)

          p(data-aos="fade-left").mb-4 Puede aplicarse en #[em marketing] digital, análisis de tasas de conversión, o satisfacción de clientes.


        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/11.png", data-aos="zoom-in")


      h2 Distribución de Poisson

      p(data-aos="fade-left") La distribución de Poisson es una distribución de probabilidad discreta que describe la probabilidad de que ocurra un número determinado de eventos en un intervalo fijo de tiempo o espacio, siempre que estos eventos ocurran de manera independiente entre sí y a una tasa promedio constante.

      .bg-full-width.bg-gradiente-3.mb-5
        .px-4.px-md-5.py-4

          h4.mb-4 Características principales:

          .row.align-items-start.mb-4
            .col-lg-4
              figure
                img(src="@/assets/curso/tema3/12.png", alt="").mb-4.mb-lg-0
            .col-lg-8
          
              AcordionA(tipo="b")
                .div(titulo="Tipo")
                  p Distribución discreta (los valores posibles son números enteros: 0, 1, 2, 3…).
          
                .div(titulo="Parámetro claves")
                  p λ (lambda), que representa la tasa promedio de ocurrencia de eventos en el intervalo.
          
                .div(titulo="Supuestos")
                  .ps-4
                    ul.lista-ul.mb-3
                      li
                        i.lista-ul__vineta
                        | Los eventos son independientes.
                      li
                        i.lista-ul__vineta
                        | No ocurren dos eventos al mismo tiempo exacto.
                      li
                        i.lista-ul__vineta
                        | La tasa de ocurrencia es constante en el tiempo o espacio.

          p(data-aos="fade-left") Algunos de los ejemplos empresariales:


          div.row.justify-content-center.align-items-stretch.mb-0
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/13.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.text-center.mb-4 Call center
                p.mb-0.text-center Número de llamadas que recibe una línea de atención en una hora.
          
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/14.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.text-center.mb-4 Logística
                p.mb-0.text-center Número de pedidos que llegan a un almacén en un día.
          
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/15.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.text-center.mb-4 Servicios de salud
                p.mb-0.text-center Llegadas de pacientes a una sala de urgencias, por hora.
          
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/16.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.text-center.mb-4 #[em Marketing] digital
                p.mb-0.text-center Cantidad de clics en un enlace publicitario, durante cierto intervalo.

      .row.mb-4
        .col-lg-8
          p(data-aos="fade-left").mb-4 Complementando, la distribución de Poisson modela el número de eventos que ocurren en un intervalo de tiempo o espacio, cuando ocurren de manera aleatoria y con una tasa constante.
      
          .bg-color-3.p-4.py-lg-5(data-aos="fade-left").mb-4
            p.mb-0 Al colocar el ejemplo de un banco, analiza cuántos clientes llegan a la ventanilla en una hora. Si λ = 5 clientes/hora, puede predecir la probabilidad de recibir 3 clientes en una hora.

          p Esto permite asignar personal adecuadamente.
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/17.png", data-aos="zoom-in")
      

      h2.mb-5 Aplicaciones en inteligencia de negocios

      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/18.png", data-aos="zoom-in")
        .col-lg-8

      
          .bg-color-4.p-4(data-aos="fade-left").mb-4
            .ps-4
              ul.lista-ul.mb-3
                li
                  i.lista-ul__vineta
                  | Planificación de inventarios (número de productos defectuosos).
                li
                  i.lista-ul__vineta
                  | Análisis de riesgo (ocurrencia de eventos críticos).
                li
                  i.lista-ul__vineta
                  | Segmentación de clientes por probabilidad de abandono.

          p(data-aos="fade-left").mb-4 De acuerdo con lo anterior, Davenport (2006), destaca el valor del análisis probabilístico para anticipar decisiones empresariales efectivas y competir mediante la analítica avanzada.

          p(data-aos="fade-left").mb-4 El análisis de distribuciones de probabilidad permite representar matemáticamente la incertidumbre inherente a los fenómenos empresariales. Estas herramientas estadísticas, aplicadas a través de plataformas tecnológicas, se convierten en aliados claves para tomar decisiones basadas en evidencia. En el marco de la inteligencia de negocios, el dominio de las distribuciones probabilísticas es fundamental para modelar escenarios, gestionar riesgos y diseñar estrategias adaptadas a un entorno cambiante.
          
      
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-5 El análisis de distribuciones de probabilidad permite representar matemáticamente la incertidumbre inherente a los fenómenos empresariales. Estas herramientas estadísticas, aplicadas a través de plataformas tecnológicas, se convierten en aliados claves para tomar decisiones basadas en evidencia. En el marco de la inteligencia de negocios, el dominio de las distribuciones probabilísticas es fundamental para modelar escenarios, gestionar riesgos y diseñar estrategias adaptadas a un entorno cambiante.
      
          .bg-color-2.p-4(data-aos="fade-left")
            p.mb-0 En resumen, las distribuciones de probabilidad constituyen un pilar fundamental en el análisis estadístico e inferencial, dado que permiten modelar y anticipar el comportamiento de fenómenos inciertos en contextos empresariales. Desde los conceptos básicos, se diferencia entre variables aleatorias discretas y continuas, y se presentan distribuciones claves como la binomial, Poisson y normal, esenciales para comprender cómo se distribuyen los datos en procesos reales. 
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/19.png", data-aos="zoom-in")
      
      

      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/20.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-1.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema3/21.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 La distribución binomial permite analizar escenarios con dos posibles resultados (éxito o fracaso), mientras que la de Poisson se aplica al conteo de eventos, en intervalos de tiempo o espacio; ambas son útiles para evaluar conversiones, fallas o atención al cliente. Por su parte, la distribución normal destaca por su forma de campana y su amplia aplicabilidad, especialmente en la predicción de tiempos de entrega, demanda o satisfacción, y es clave en procesos de control de calidad y pronósticos empresariales.
      
          p(data-aos="fade-left").mb-4 En inteligencia de negocios, estas distribuciones son fundamentales para respaldar decisiones basadas en datos, mediante dashboards, cuadros de mando integral (CMI), y modelos de predicción. El uso de herramientas como Excel, Python, R o Power BI permite su representación y análisis eficiente. La comprensión de estos modelos probabilísticos, sustentada en referentes como Montgomery, Runger o Thomas Davenport, fortalece las competencias analíticas y estratégicas de los estudiantes, y los prepara para enfrentar desafíos del entorno empresarial, con un enfoque riguroso y basado en evidencia.
      

              
      


      
      
      
      








      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/70067" target="_blank" rel="noopener noreferrer") Llinás Solano, H. (2018). Introducción a la teoría de probabilidad. Universidad del Norte. 
  

  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/UV4LU2OycKw?si=wYH76ijmDHmdNWnI" target="_blank" rel="noopener noreferrer") Diaz, J. (2020). Introducción a las variables aleatorias y distribuciones probabilidad. [video]. YouTube.
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes medidas indica el valor más frecuente en un conjunto de datos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'Media', esCorrecta: false },
              { id: 'b', texto: 'Mediana', esCorrecta: false },
              { id: 'c', texto: 'Moda', esCorrecta: true },
              { id: 'd', texto: 'Varianza', esCorrecta: false },
            ],
            mensaje_correcto:
              '¡Correcto! La moda es el valor más frecuente en un conjunto de datos.',
            mensaje_incorrecto: 'Incorrecto. La respuesta correcta es la moda.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de los siguientes gráficos es más adecuado para representar la distribución de frecuencias de una variable continua?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'Gráfico circular', esCorrecta: false },
              { id: 'b', texto: 'Gráfico de barras', esCorrecta: false },
              { id: 'c', texto: 'Histograma', esCorrecta: true },
              { id: 'd', texto: 'Tabla dinámica', esCorrecta: false },
            ],
            mensaje_correcto:
              '¡Correcto! El histograma es el gráfico adecuado para variables continuas.',
            mensaje_incorrecto:
              'Incorrecto. El histograma es el gráfico adecuado.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de las siguientes opciones describe mejor a la desviación estándar?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Es la diferencia entre el valor máximo y mínimo',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Es el promedio de todos los datos',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Mide cuánto se dispersan los datos respecto a la media',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Es el valor central de los datos ordenados',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! La desviación estándar mide la dispersión respecto a la media.',
            mensaje_incorrecto:
              'Incorrecto. La desviación estándar mide la dispersión respecto a la media.',
          },
          {
            id: 4,
            texto:
              '¿Qué herramienta es más utilizada para representar indicadores claves en tiempo real mediante visualizaciones gráficas interactivas?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'Excel básico', esCorrecta: false },
              { id: 'b', texto: 'Tabla de frecuencia', esCorrecta: false },
              { id: 'c', texto: 'Dashboard', esCorrecta: true },
              { id: 'd', texto: 'Archivo CSV', esCorrecta: false },
            ],
            mensaje_correcto:
              '¡Correcto! El dashboard es la herramienta más utilizada.',
            mensaje_incorrecto:
              'Incorrecto. La respuesta correcta es dashboard.',
          },
          {
            id: 5,
            texto:
              '¿Cuál es la utilidad principal de las medidas de tendencia central en un análisis empresarial?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Mostrar los valores extremos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Comparar unidades de diferentes medidas',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Resumir el comportamiento general de los datos',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Detectar errores de digitación',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! Su utilidad principal es resumir el comportamiento general de los datos.',
            mensaje_incorrecto:
              'Incorrecto. La respuesta correcta es resumir el comportamiento general de los datos.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
