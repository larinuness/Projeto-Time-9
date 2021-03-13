<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th colspan="2" class="text-left">Pontos de Coleta</th>
          <th colspan="2" class="text-left">Categoria</th>
          <th colspan="2" class="text-left">endereco</th>
              
        </tr>
      </thead>
      <tbody>
        <tr v-for="(ponto, index) of pontos" :key="ponto.id">
          <td>{{ index + 1 }}</td>
          <td>
        
            <span class="pl-2">{{ ponto.nome }}</span>
          </td>
          <td>
        
            <span class="pl-2">{{ ponto.categorias }}</span>
          </td>
          <td class="text-right">{{ ponto.endereco }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
export default {
  name: 'PontosColeta',
  props: {
    clubes: {
      type: Array,
      required: true
    }
  },
  data() {
      return {
          pontos: [

          ]
      }
  },
  created() {
    fetch('https://it3kjy-default-rtdb.firebaseio.com/coletaSeletiva.json?print=pretty')
      .then(response => response.json())
      .then(json => {
        this.pontos = json;
      })
  }
}


</script>