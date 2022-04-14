<template>
  <v-app>
    <v-main>
      <MainPage />
    </v-main>
  </v-app>
</template>

<script>
//  import LoginPage from './pages/LoginPage.vue'
import MainPage from './pages/MainPage.vue'

export default {
  name: 'App',

  components: {
    // LoginPage,
    MainPage


  },

  data: () => ({
    //
  }),
}
</script>
