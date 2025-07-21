<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Representación gráfica de datos'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 La representación gráfica de datos constituye una de las herramientas más poderosas en la estadística descriptiva y la inteligencia de negocios, pues permite visualizar de manera clara, sintética y comprensible, grandes volúmenes de información. A través de gráficos adecuados, los analistas pueden detectar patrones, tendencias, distribuciones, comparaciones y anomalías, aspectos claves para la toma de decisiones informadas.
      
          .bg-color-4.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 En este sentido, los #[em dashboards], #[b cuadros de mando integral (CMI)] y reportes empresariales, utilizan representaciones gráficas para traducir datos complejos en conocimiento visualmente accesible, facilitando la gestión estratégica.
      
          p(data-aos="fade-left").mb-4 Los gráficos estadísticos son representaciones visuales de datos que permiten observar su comportamiento, distribución y relaciones. Los más comunes incluyen:
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")


      .bg-full-width.bg-color-info.mb-0
        .px-4.px-md-5.pt-4.pt-md-5
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-10
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema2/infografia.svg', alt='', style="max-width: 967px;").mx-auto
      
                .bg-color-white.box-shadow.p-3(x="4.5%" y="13%" numero="+")
                  h5 Gráficos circulares (pastel)
                  p Muestran proporciones o porcentajes dentro de un todo.
      
                .bg-color-white.box-shadow.p-3(x="38%" y="33%" numero="+")
                  h5 Gráficos de líneas
                  p Representan tendencias a lo largo del tiempo.
      
                .bg-color-white.box-shadow.p-3(x="45%" y="49%" numero="+")
                  h5 Diagramas de dispersión
                  p Permiten observar la relación entre dos variables cuantitativas.
      
                .bg-color-white.box-shadow.p-3(x="48%" y="63%" numero="+")
                  h5 Histogramas
                  p Muestran la distribución de frecuencias de datos continuos.
      
                .bg-color-white.box-shadow.p-3(x="71%" y="57%" numero="+")
                  h5 Gráficos de barras y columnas
                  p Muestran comparaciones entre categorías.

      .bg-full-width.bg-color-1.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Como ejemplo, tenemos una empresa de retail que presenta en su dashboard mensual, un gráfico de líneas para visualizar las ventas semanales durante el último trimestre. En paralelo, utiliza un gráfico de columnas, para comparar el rendimiento entre sucursales, y un gráfico circular, para mostrar la participación porcentual de cada línea de producto.


      .row.mb-5
        .col-lg-8
          h2.mb-4 Aplicación en Inteligencia de Negocios (BI)
          p(data-aos="fade-left").mb-5 Las herramientas de BI como Power BI o Tableau, permiten crear visualizaciones interactivas que combinan estos gráficos. Por ejemplo, un gráfico de barras puede filtrar un gráfico de líneas automáticamente, según la categoría seleccionada.

          h2.mb-4 Importancia en los CMI y dashboards      
          .bg-color-2.p-4(data-aos="fade-left")
            p.mb-0 El Cuadro de Mando Integral (CMI), ha evolucionado como una herramienta esencial para la gestión estratégica, permitiendo a las organizaciones traducir su visión y táctica en un conjunto coherente de indicadores de desempeño. Según Nguyen Lu Gutiérrez (2019), el CMI no solo facilita el seguimiento de los resultados financieros, sino que también incorpora dimensiones no financieras como los procesos internos, la satisfacción del cliente y el aprendizaje organizacional, promoviendo una visión equilibrada y a largo plazo. Este enfoque integral favorece la toma de decisiones informada y alineada con los objetivos estratégicos de la organización.
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")


      .bg-full-width.bg-gradiente-2.mb-5
        .px-4.px-md-5.py-4

          #t_2_1.titulo-segundo(data-aos="flip-up").mb-4
            h2 #[span 2.1] Herramientas tecnológicas para la visualización de datos


          p(data-aos="fade-left").mb-4 Existen diversas plataformas tecnológicas utilizadas en la representación gráfica de datos:

          div.row.justify-content-center.align-items-stretch.mb-0
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/5.svg"
                  alt=""
                  style="height: 90px"
                )
                h4.mb-4.text-center Excel
                p.mb-0.text-center Útil para gráficos básicos y el uso de tablas dinámicas.
          
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/6.svg"
                  alt=""
                  style="height: 90px"
                )
                h4.mb-4.text-center Power BI
                p.mb-0.text-center Permite crear dashboards interactivos y visuales con múltiples fuentes de datos.
          
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/7.svg"
                  alt=""
                  style="height: 90px"
                )
                h4.mb-4.text-center Tableau
                p.mb-0.text-center Destaca por su capacidad visual y rapidez en el análisis visual.
          
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/8.svg"
                  alt=""
                  style="height: 90px"
                )
                h4.mb-4.text-center Python
                p.mb-0.text-center (Bibliotecas como matplotlib y seaborn) y R (ggplot2): utilizados en análisis más avanzados y personalizados.


      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/9.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 Una compañía de seguros utiliza Power BI para analizar siniestros reportados por región, edad del asegurado y tipo de seguro. A través de gráficos de dispersión y mapas de calor, identifica zonas con mayor frecuencia de incidentes y ajusta sus políticas de cobertura.

          p(data-aos="fade-left").mb-4 La importancia de las tablas dinámicas en Excel, permite reorganizar datos y generar reportes gráficos de forma flexible. Son ampliamente usadas en empresas para:

          .bg-color-2.p-4(data-aos="fade-left").mb-4
            ul.lista-ul--color.color-dark.mb-0
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Analizar ventas por producto y región.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Calcular promedios o totales por categoría.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Generar gráficos que se actualizan automáticamente al cambiar los filtros.

          p(data-aos="fade-left").mb-4 Con respecto a la relación con la toma de decisiones, puede establecer una visualización clara en el cual acelera la comprensión de la información, reduce la ambigüedad en los reportes y permite tomar acciones ágiles basadas en datos, como lo afirma Edward Tufte, pionero en visualización de datos, en el cual sostiene que “el objetivo de la visualización es proporcionar la máxima cantidad de ideas en el menor espacio posible, sin perder claridad”.


      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Interpretación de gráficos y su papel en la estrategia empresarial

      p(data-aos="fade-left").mb-4 Con respecto a la lectura crítica de gráficos, no basta con generar gráficos; es fundamental interpretarlos correctamente. Una mala elección del tipo de gráfico o una escala inadecuada, puede inducir a errores de análisis.

      p(data-aos="fade-left").mb-4 #[b Elementos clave a observar:]

      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-3
          .bg-color-5.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Escalas (lineales vs. logarítmicas).
      
        .col-lg-3
          .bg-color-5.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/11.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Etiquetas y leyendas claras.
      
        .col-lg-3
          .bg-color-5.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/12.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Relación entre variables.
      
        .col-lg-3
          .bg-color-5.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/13.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Identificación de patrones o anomalías.

      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 Con respecto al caso empresarial, se toma como ejemplo el sector de las telecomunicaciones con referencia a un gráfico de líneas en el cual muestra una caída repentina en suscripciones móviles durante el mes de abril. La interpretación reveló que fue causado por un cambio en las políticas de portabilidad, lo cual permitió rediseñar la campaña de fidelización.

          p(data-aos="fade-left").mb-4 Lo anterior permite una conexión con la estrategia empresarial y conlleva a la interpretación adecuada de estas visualizaciones y permite a la gerencia encargada:
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/14.png", data-aos="zoom-in")


      .row.justify-content-center.align-items-stretch.mb-4
        .col-lg-4
          .bg-color-5.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/15.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Detectar desviaciones con respecto a las metas.
      
        .col-lg-4
          .bg-color-5.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/16.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Comunicar resultados de forma efectiva, a todas las áreas de la organización.
      
        .col-lg-4
          .bg-color-5.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/17.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Investigación y desarrollo.


      #t_2_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.3] Visualización e indicadores claves (KPI)
      
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/18.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 Cada gráfico en un dashboard, debe estar vinculado a un KPI estratégico. Por ejemplo:
      
          .bg-color-4.p-4(data-aos="fade-left").mb-4
            ul.lista-ul--color.color-dark.mb-0
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Rentabilidad por producto → gráfico de columnas.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Evolución de clientes activos → gráfico de líneas.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Distribución geográfica de ventas → mapa de calor.

          p(data-aos="fade-left").mb-4 En inteligencia de negocios, la data storytelling o narrativa basada en datos, es una tendencia creciente que combina gráficos, contexto y lenguaje narrativo, para influir en la toma de decisiones.

          p(data-aos="fade-left").mb-4 #[b En conclusión, la representación gráfica de datos es un puente entre los datos crudos y el conocimiento accionable. En contextos empresariales y de inteligencia de negocios, su correcta aplicación permite descubrir oportunidades, controlar riesgos, comunicar resultados de forma efectiva y alinear la operación con la estrategia. Dominar estas herramientas es indispensable para todo profesional que aspire a liderar en la era digital.]
            
      

      
      
      
      
      
      


      
      

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/233574" target="_blank" rel="noopener noreferrer") Proaño Rivera, W. B. (2020). Estadística descriptiva e inferencial. Universidad del Azuay. 
  

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/JTc1TTqtfR8?si=OwIlq_Yb3jfl0ijv" target="_blank" rel="noopener noreferrer") Matemáticas y más temáticas. (2023). Representación de datos estadísticos | Didáctica de la Medida [video]. YouTube.
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
