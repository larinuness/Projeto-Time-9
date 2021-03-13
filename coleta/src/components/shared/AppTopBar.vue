<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#43a047"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
      scroll-threshold="500"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-app-bar-title>Projeto Coleta</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="background"
    >
    <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="green--text text--lighten-2"
        >
          
            <router-link to="/">
          <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Inicio</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/PontoColeta">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Ponto de Coleta</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/Colabore">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Colabore</v-list-item-title>
            </v-list-item>
          </router-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-sheet
      id="scrolling-techniques-5"
      class="overflow-y-auto"
      max-height="100vh"
    >
      <v-container style="height: 1500px;">
        <v-container class="d-flex align-center" id="rotas">
            <router-view />
        </v-container>
      </v-container>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  name: "AppTopBar",
  data() {
    return {
      clubesTabela: [],
      drawer: false,
      group: null,
      
    };
  },
};
</script>

<style scoped>
.app-top-bar a {
  text-decoration: none;
}

#rotas {
  margin-top: 15vh;
}

a {
  text-decoration: none;
}
