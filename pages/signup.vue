<template>
  <user-form-card>
    <template #user-form-card-content>
      <v-form
        v-model="isValid"
      >
        <user-form-name
          :name.sync="name"
        />
        name => {{ name }}
        <user-form-email />
        <user-form-password />
        <!-- disabled=true => ボタンクリックを無効にする -->
        <v-btn
          :disabled="!isValid"
          block
          color="appblue"
          class="white--text"
        >
          登録する
        </v-btn>
      </v-form>
    </template>
  </user-form-card>
</template>

<script>
import UserFormCard from '../components/User/UserFormCard.vue'
import UserFormEmail from '../components/User/UserFormEmail.vue'
import UserFormName from '../components/User/UserFormName.vue'
import UserFormPassword from '../components/User/UserFormPassword.vue'

export default {
  components: { UserFormCard, UserFormName, UserFormEmail, UserFormPassword },
  layout: 'before-login',
  data () {
    return {
      name: '',
      isValid: false
    }
  }
}
</script>
