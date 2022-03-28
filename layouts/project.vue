<template>
  <v-app>
    <logged-in-app-bar />
    <v-main>
      project.vue
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import LoggedInAppBar from '../components/LoggedIn/LoggedInAppBar.vue'
export default {
  components: { LoggedInAppBar }

}
</script>
