<template>
  <v-container class="home">
    <h2 class="text-h5 text-center mb-3 mt-5 ">A Importância da coleta seletiva</h2>  
    <p class="text-center">A reciclagem consiste no reaproveitamento de materiais para a fabricação de matéria-prima. Ou seja, os materiais como vidro, plástico e papel são reutilizados para gerarem outros.</p>
    <v-img class="home-image1 mb-4 mt-5 text-center" width="500px" src="http://eureciclo-blog.storage.googleapis.com/image3-1.jpg">
    </v-img>

    <p class="text-center">O objetivo é separar os materiais e transformar em algo novo, como nos exemplos,abaixo:</p>
    <div class="fotoexemplo">
    <v-img class="home-image2 mb-4 mt-5" width="300" height="300" src="https://s2.glbimg.com/L7ylwyFGOsi8PViPEnqQNnOkllc=/0x0:1920x1080/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b58693ed41d04a39826739159bf600a0/internal_photos/bs/2018/a/w/AVohvXQBSzrGTZcx2yFA/lixo-reciclado-tvtribuna.jpg">
    </v-img>
    <v-img class="home-image3 mb-4 mt-5" width="300" height="300" src="https://miro.medium.com/max/1000/0*AKYo35cOeSQwLA0E.">
    </v-img>
    
    
    </div>
    <div class="linkcolabore">
    <router-link to="/Colabore">Colabore</router-link>
    <a href="https://www.todamateria.com.br/coleta-seletiva/"> Saiba Mais</a>
    
    </div> 
  </v-container>

  
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>

.linkcolabore a {
  text-decoration: none;
  text-align: center;
}

.linkcolabore a:visited {
  text-decoration: none;
}

.linkcolabore {
  margin-top: 20px;
}

.home .fotoexemplo {
  display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.home p {
  margin-top: 20px;
  margin-bottom: 20px;
  
  
}
.home-image1 {
  border-radius: 3px;
 
}

.home-image2 {
  border-radius: 3px;
  
}

.home-image3 {
  border-radius: 3px;
  
}
</style>
