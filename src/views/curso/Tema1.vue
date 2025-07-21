<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Conceptos básicos de estadística'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 La estadística descriptiva es una rama de la estadística que se encarga de recopilar, organizar, presentar y analizar un conjunto de datos con el objetivo de describir sus características esenciales. A diferencia de la estadística inferencial, que se enfoca en realizar generalizaciones o predicciones a partir de una muestra, la estadística descriptiva trabaja directamente con la totalidad de los datos disponibles.
    
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En el contexto empresarial, la estadística descriptiva se utiliza para sintetizar grandes volúmenes de datos provenientes de operaciones, ventas, recursos humanos, marketing, entre otros, con el fin de comprender el comportamiento organizacional y tomar decisiones más informadas.
    
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")


    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Medidas de tendencia central



    p(data-aos="fade-left").mb-4 Las medidas de tendencia central, permiten identificar un valor representativo o "centro" en un conjunto de datos. Las tres principales medidas son:

    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/3.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Media (promedio aritmético)")
            p Es el valor que se obtiene al sumar todos los datos y dividir entre el número total de observaciones. Representa el punto de equilibrio del conjunto.

            p #[b Fórmula:]

            figure.mb-4
              img(src="@/assets/curso/tema1/4.svg", alt="", style="max-width: 137px").mx-auto

            p #[b Ejemplo empresarial.] Una empresa de logística analiza el tiempo promedio de entrega de sus pedidos en Bogotá. Si los tiempos en días fueron: 2, 3, 3, 4, 8, la media sería (2+3+3+4+8)/5 = 4 días.

            p #[b Aplicación en inteligencia de negocios.] En Power BI o Tableau, calcular la media de ventas por cliente permite segmentar estrategias comerciales y personalizar ofertas.
    
          .div(titulo="Mediana")
            p Es el valor central de un conjunto de datos ordenado. Es especialmente útil cuando existen valores atípicos que podrían distorsionar la media.

            p #[b Ejemplo empresarial.] En el análisis de sueldos dentro de una empresa, si los salarios mensuales (en millones de pesos) son: 2, 2.2, 2.5, 3, 12, la mediana es 2.5 y no se ve afectada por el valor extremo (12).
    
          .div(titulo="Moda")
            p Es el valor que más se repite en el conjunto de datos.

            p #[b Ejemplo empresarial.] En una encuesta sobre el canal de atención preferido por los clientes, si la mayoría responde "WhatsApp", esa es la moda. Esto orienta decisiones sobre atención al cliente.
    

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Medidas de dispersión y coeficiente de variación
    
    p(data-aos="fade-left").mb-4 Las medidas de dispersión indican el grado de variabilidad o dispersión de los datos, respecto a una medida central (usualmente la media). Ayudan a comprender si los datos están concentrados o dispersos.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/5.png")
            .col-lg-7.order-lg-1
              h4 Rango
              p Es la diferencia entre el valor máximo y el mínimo.

              p #[b Ejemplo empresarial.] Si los precios de venta de un producto van de $80.000 a $120.000, el rango es $40.000. Muestra la amplitud de precios en el mercado.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/7.png")
            .col-lg-7.order-lg-1
              h4 Varianza y desviación estándar
              p La varianza mide la dispersión promedio al cuadrado con respecto a la media. La desviación estándar es la raíz cuadrada de la varianza, expresada en las mismas unidades que los datos originales.

              p #[b Fórmulas:]

              figure.mb-4
                img(src="@/assets/curso/tema1/6.svg", alt="", style="max-width: 295px").mx-auto

              p #[b Ejemplo empresarial.] Una tienda minorista analiza la desviación estándar de las ventas diarias para medir la estabilidad de sus ingresos. Un valor alto indica mucha variabilidad (riesgo), uno bajo indica consistencia.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/8.png")
            .col-lg-7.order-lg-1
              h4 Coeficiente de variación
              p Relaciona la desviación estándar con la media. Es útil para comparar la variabilidad entre diferentes conjuntos de datos.

              p #[b Ejemplo aplicado.] Comparar la rentabilidad mensual de dos sucursales de una cadena, con diferentes niveles de ventas absolutas.

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Casos prácticos empresariales


    .row.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1/9.png", data-aos="zoom-in")
      .col-lg-7
        h4(data-aos="fade-left").mb-4 Caso 1. Análisis de satisfacción del cliente, en una empresa de servicios financieros.
        p(data-aos="fade-left").mb-4 Una entidad bancaria realiza una encuesta de satisfacción en cinco ciudades. Los puntajes promedios fueron similares (media = 4.2/5), pero la desviación estándar fue alta en una de ellas (1.1 frente a 0.5 en las demás). Esto indica que, aunque la media es igual, hay más clientes muy insatisfechos y otros muy satisfechos en esa ciudad, lo cual requiere atención focalizada.
    
        h4(data-aos="fade-left").mb-4 Caso 2. Control de calidad en una fábrica.
        p(data-aos="fade-left").mb-4 En una línea de producción de envases plásticos, se mide el peso de las piezas producidas. Un análisis estadístico muestra que, aunque la media es aceptable (500 g), la desviación estándar es alta. Se toman decisiones para ajustar las máquinas y reducir la variabilidad.


    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Relación con la inteligencia de negocios (BI)

    
    .bg-full-width.bg-gradiente-1
      .px-4.px-md-5.pb-4

        p(data-aos="fade-left").mb-4 Las medidas de tendencia central y dispersión son fundamentales para el análisis exploratorio de datos en entornos de inteligencia de negocios. A través de dashboards e informes dinámicos, se utilizan para:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/10.svg"
                alt=""
                style="width: 90px"
              )
              p.mb-0.text-center Establecer umbrales de control (ventas por encima o debajo de la media).
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/11.svg"
                alt=""
                style="width: 90px"
              )
              p.mb-0.text-center Analizar la estabilidad del rendimiento.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/12.svg"
                alt=""
                style="width: 90px"
              )
              p.mb-0.text-center Identificar segmentos con mayor o menor dispersión, en el comportamiento del consumidor.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/13.svg"
                alt=""
                style="width: 90px"
              )
              p.mb-0.text-center Diseñar políticas de stock, precios, promociones, y servicio.


    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/14.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Herramientas como #[b Power BI], #[b Tableau] o lenguajes como #[b Python] y #[b R], permiten automatizar estos análisis y representar visualmente, estos indicadores, para una mejor comprensión por parte de los tomadores de decisiones.


    #t_1_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.5] Aportes teóricos

    
    .row.mb-5
      .col-lg-8
        .bg-color-2.px-4.py-4.py-lg-5(data-aos="fade-left").mb-4
          p.mb-4 El fundamento del análisis estadístico y de las medidas de tendencia central, se remonta al desarrollo de la probabilidad y la inferencia por autores como Karl Pearson, quien contribuyó con el concepto de desviación estándar y desarrolló herramientas clave para el análisis de datos.

          p.mb-0 De igual forma, el enfoque pragmático de la estadística aplicada, es sostenido por autores como George Box, quien afirmó: “Todos los modelos son incorrectos, pero algunos son útiles”, resaltando la importancia del análisis descriptivo, como punto de partida para modelar fenómenos reales.

      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in").mb-4.mb-lg-0


    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/16.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-4 Desde el enfoque de la inteligencia de negocios, autores como Davenport (2006), han enfatizado la necesidad de “compañías analíticas” que utilicen sistemáticamente datos para tomar decisiones estratégicas, donde la estadística descriptiva ocupa un rol clave como base para el análisis predictivo y prescriptivo.
    
        .bg-color-3.p-4(data-aos="fade-left")
          p.mb-0 Las medidas de tendencia central y dispersión no solo son herramientas fundamentales en el análisis estadístico, sino que además son claves para la toma de decisiones empresariales efectivas y basadas en evidencia. Su correcta aplicación permite entender comportamientos, identificar desviaciones, comparar grupos y establecer estrategias ajustadas a los datos reales. En un entorno donde los datos son un activo estratégico, dominar estos conceptos representa una ventaja competitiva para estudiantes y profesionales.
    
    
    
    
    
    
    


    
              

    
    
    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
