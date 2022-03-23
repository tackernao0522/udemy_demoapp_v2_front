<template>
  <v-app>
    <before-login-app-bar />
    <v-main>
      <Nuxt />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import AppFooter from '../components/App/AppFooter.vue'
import BeforeLoginAppBar from '../components/BeforeLogin/BeforeLoginAppBar.vue'
export default {
  components: { BeforeLoginAppBar, AppFooter }
}
</script>
