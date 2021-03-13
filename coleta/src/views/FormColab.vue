<template>
    <v-container>
        <h3>Cadastre-se e vire torne um colaborador</h3>
<form @submit.prevent="submit">
     
        <v-text-field
          v-model="nome"
          :error-messages="errors"
          label="Nome"
          required
        ></v-text-field>
    
      
        <v-text-field
          v-model="telefone"
          :error-messages="errors"
          label="Telefone"
          required
        ></v-text-field>
      
      
        <v-text-field
          v-model="endereco"
          :error-messages="errors"
          label="Endereço"
          required
        ></v-text-field>
     
     
     <h5 class="selecione-cat">Selecione as categorias desejadas:</h5> 
        <v-checkbox
          v-model="checkbox"
          :error-messages="errors"
          value="1"
          label="Aço"
          type="checkbox"
         
        ></v-checkbox>

     <v-checkbox
          v-model="checkbox"
          value="2"
          label="Óleo de cozinha"
          type="checkbox"
         
        ></v-checkbox>

         <v-checkbox
          v-model="checkbox"
          value="3"
          label="Borracha"
          type="checkbox"
         
        ></v-checkbox>

         <v-checkbox
          v-model="checkbox"
          value="4"
          label="Pilhas"
          type="checkbox"
         
        ></v-checkbox>

         <v-checkbox
          v-model="checkbox"
          value="5"
          label="Capsulas de café"
          type="checkbox"
          
        ></v-checkbox>

         <v-checkbox
          v-model="checkbox "
          value="6"
          label="Isopor"
          type="checkbox"
          
        ></v-checkbox>

         <v-checkbox
          v-model="checkbox"
          value="7"
          label="Remédios"
          type="checkbox"
         
        ></v-checkbox>

         <v-checkbox
          v-model="checkbox"
          value="8"
          label="Entulhos"
          type="checkbox"
          
        ></v-checkbox>

      <v-btn
        class="mr-4"
        type="submit"
        :disabled="invalid"
      >
        Enviar
      </v-btn>
      <v-btn @click="clear">
        Limpar campos
      </v-btn>
    </form>
    </v-container>
</template>

<script>
  
  export default {
    data: () => ({
      nome: '',
      telefone: '',
      endereco: '',
      select: null,
    
      checkbox: [ ]
    }),
    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.name = ''
        this.phoneNumber = ''
        this.email = ''
        this.select = null
        this.checkbox = null
        this.$refs.observer.reset()
      },
    },
  }
</script>

<style scoped>
.selecione-cat {
    text-align: left;
    padding-top: 2vh;
}

h3 {
    margin-top: 20px;
    margin-bottom: 10px;
}
</style>