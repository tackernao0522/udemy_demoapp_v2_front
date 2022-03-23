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

    <app-signup-button />
    <app-login-button />
  </v-app-bar>
</template>

<script>
import AppLoginButton from '../App/AppLoginButton.vue'
import AppSignupButton from '../App/AppSignupButton.vue'
export default {
  components: { AppSignupButton, AppLoginButton },
  data ({ $store }) {
    return {
      homeAppBarHeight: $store.state.styles.homeAppBarHeight
    }
  }
}
</script>
