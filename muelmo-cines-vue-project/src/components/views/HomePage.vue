<script setup>
import Header from '../components/icons.Header.vue'
import Footer from '../components/icons/Footer.vue'
import CardItem from '../components/icons/CardItem'

</script>

<template>


  <div>
    <!--header-->
    <Header />
  </div>

  <div>
    <!--carrusel-->
  </div>
  <div>
    <img class="img-carr" src="https://placehold.co/500x100" alt="">
    <div class="cont">
      <div class="tarjetass2">
        <CardItem title="titulo1" description="descripcion1" />
        <CardItem title="titulo2" description="descripcion2" />
      </div>


      <div class="tarjetass3">
        <CardItem title="titulo3" description="descripcion3" />
        <CardItem title="titulo4" description="descripcion4" />
        <CardItem title="titulo5" description="descripcion5" />
        <CardItem title="titulo6" description="descripcion6" />
      </div>
    </div>

    <div>
      <h1 class="titulos">ACTUALIDAD</h1>
      <div class="tarjetass4">
    
      <CardItem title="ENERO 2025" description="ENERO 2025" />
      <CardItem title="DICIEMBRE 2024" description="DICIEMBRE 2024" />
      <CardItem title="DICIEMBRE 2024" description="DICIEMBRE 2024" />
      <CardItem title="DICIEMBRE 2024" description="DICIEMBRE 2024" />
      <CardItem title="DICIEMBRE 2024" description="DICIEMBRE 2024" />
      <CardItem title="DICIEMBRE 2024" description="DICIEMBRE 2024" />
    </div>
    </div>

    
    <div>
      <h1 class="titulos">EVENTOS</h1>
      <div class="tarjetass4">
    
      <CardItem title="ENERO 2025" description="ENERO 2025" />
      <CardItem title="DICIEMBRE 2024" description="DICIEMBRE 2024" />
      <CardItem title="DICIEMBRE 2024" description="DICIEMBRE 2024" />
    
    </div>
    </div>

  </div>
  <!--tarjetas-->




  <div>
    <!--foooter-->
  </div>
  <Footer />
</template>



<style scoped>
.img-carr {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;

}


.tarjetass2 {
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  padding: 0 20px;
}

.tarjetass3 {
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  padding: 0 20px;
}

.tarjetass4 {
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  padding: 20px 20px;
}
.titulos{
  padding: 5px 300px;
}

.cont{
  padding-top: 40px;
}
</style>
