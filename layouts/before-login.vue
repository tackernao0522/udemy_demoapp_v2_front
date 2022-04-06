<template>
  <v-app>
    <before-login-app-bar />
    <v-main>
      <app-toaster />
      <Nuxt />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import AppFooter from '../components/App/AppFooter.vue'
import AppToaster from '../components/App/AppToaster.vue'
import BeforeLoginAppBar from '../components/BeforeLogin/BeforeLoginAppBar.vue'
export default {
  name: 'LayoutsBeforeLogin',
  components: { BeforeLoginAppBar, AppFooter, AppToaster }
}
</script>
