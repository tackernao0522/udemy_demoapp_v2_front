<template>
  <v-app-bar
    app
    dense
    elevation="1"
    :clipped-left="clippedLeft"
    color="white"
  >
    <slot
      name="navigation-toggle-button"
    />

    <nuxt-link
      :to="homePath"
      class="text-decoration-none"
    >
      <app-logo />
    </nuxt-link>

    <app-title />

    <v-spacer />

    <logged-in-app-bar-account-menu />
  </v-app-bar>
</template>

<script>
import AppLogo from '../App/AppLogo.vue'
import AppTitle from '../App/AppTitle.vue'
import LoggedInAppBarAccountMenu from './LoggedInAppBarAccountMenu.vue'
export default {
  components: { AppLogo, AppTitle, LoggedInAppBarAccountMenu },
  props: {
    clippedLeft: {
      type: Boolean,
      default: false
    }
  },
  data ({ $store }) {
    return {
      homePath: $store.state.loggedIn.homePath
    }
  }
}
</script>
