<template>
  <v-container>
    <nuxt-child />
  </v-container>
</template>

<script>
export default {
  layout: 'logged-in',
  // falseを返すページのアクセスを制限する
  validate ({ route }) {
    // account
    return route.name !== 'account'
  }
}
</script>
