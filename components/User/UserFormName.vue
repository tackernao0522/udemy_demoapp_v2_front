<template>
  <!-- v-bind:value="name" => 描写 -->
  <!-- v-on:input => インプットがあった時に発火する -->
  <!-- $emit('キー(自由に決められる)', $event) => 子から親へデータを送信 -->
  <!-- syncを使った場合、$emit('update:name', $event)とする -->
  <v-text-field
    v-model="setName"
    label="ユーザー名を入力"
    placeholder="あなたの表示名"
    outlined
  />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    setName: {
      get () {
        return this.name
      },
      set (newValue) {
        return this.$emit('update:name', newValue)
      }
    }
  }
}
</script>
