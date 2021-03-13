<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Pontos de Coleta</h2>
  </v-container>
</template>
​
<script>
export default {
  name: 'PontosDeColeta',
  data() {
    return {
      PontosDeColeta: []
    }
  },
  created() {
    fetch('https://it3kjy-default-rtdb.firebaseio.com/coletaSeletiva.json')
      .then(response => response.json())
      .then(json => {
        this.PontosDeColeta = json;
      })
  }
}
</script>