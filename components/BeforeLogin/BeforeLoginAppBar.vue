<template>
  <v-app-bar
    app
    :height="homeAppBarHeight"
    color="white"
  >
    <nuxt-link
      to="/"
      class="text-decoration-none"
    >
      <app-logo />
    </nuxt-link>

    <app-title
      class="hidden-mobile-and-down"
    />

    <v-spacer />

    <befor-login-app-bar-signup-button />
    <befor-login-app-bar-login-button />
  </v-app-bar>
</template>

<script>
import AppLogo from '../App/AppLogo.vue'
import AppTitle from '../App/AppTitle.vue'
import BeforLoginAppBarLoginButton from './BeforLoginAppBarLoginButton.vue'
import BeforLoginAppBarSignupButton from './BeforLoginAppBarSignupButton.vue'

export default {
  components: { BeforLoginAppBarSignupButton, BeforLoginAppBarLoginButton, AppLogo, AppTitle },

  data ({ $store }) {
    return {
      homeAppBarHeight: $store.state.styles.homeAppBarHeight
    }
  }
}
</script>
