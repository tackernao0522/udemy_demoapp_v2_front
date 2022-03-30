<template>
  <v-breadcrumbs
    :items="items"
    class="d-block text-truncate"
  >
    <template
      #item="{ item }"
    >
      <v-breadcrumbs-item>
        <div
          class="text-truncate"
          :style="{ maxWidth: '120px' }"
        >
          {{ item.text }}
        </div>
      </v-breadcrumbs-item>
    </template>
    <template
      #divider
    >
      <v-icon>
        mdi-chevron-right
      </v-icon>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  computed: {
    items () {
      const currentRouteName = this.$route.name
      const items = [
        { text: this.$my.pageTitle(currentRouteName) }
      ]
      // breakpoint.xs => 600未満の場合にtrueを返す
      if (currentRouteName.match(/project/) && !this.$vuetify.breakpoint.xs) {
        // プロジェクト名を表示する
        const currentProject = this.$store.state.project.current
        items.unshift({ text: currentProject.name })
      }
      return items
    }
  }
}
</script>
