<template>
<<<<<<< HEAD
  <div id="app">
    <div id="nav">
  
      <router-link to="/">Home !</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
=======
  <v-app>
    <AppTopBar/>
    
    <v-main>
      <router-view/>
    </v-main> 
  </v-app>
>>>>>>> 5b1d15ad238075f4c1207c3484e14edd48bb33ab
</template>

<script>
import AppTopBar from './components/shared/AppTopBar';
export default {
  name: "App",
  components: {
    AppTopBar,
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>
</style>
