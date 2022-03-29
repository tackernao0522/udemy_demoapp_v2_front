<template>
  <v-app>
    <!-- toolbar -->
    <logged-in-app-bar clipped-left>
      <template
        #navigation-toggle-button
      >
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
        />
      </template>
    </logged-in-app-bar>

    <!-- navigation drawer -->
    <project-navigation-drawer
      :drawer.sync="drawer"
    />
    <!-- main content -->
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import LoggedInAppBar from '../components/LoggedIn/LoggedInAppBar.vue'
import ProjectNavigationDrawer from '../components/Project/ProjectNavigationDrawer.vue'
export default {
  components: { LoggedInAppBar, ProjectNavigationDrawer },
  data () {
    return {
      drawer: null
    }
  }
}
</script>
