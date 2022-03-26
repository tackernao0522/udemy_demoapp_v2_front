<template>
  <user-form-card>
    <template #user-form-card-content>
      <v-form
        ref="form"
        v-model="isValid"
      >
        <user-form-name
          :name.sync="params.user.name"
        />
        <user-form-email
          :email.sync="params.user.email"
          placeholder
        />
        <user-form-password
          :password.sync="params.user.password"
          set-validation
        />
        <!-- disabled=true => ボタンクリックを無効にする -->
        <v-btn
          :disabled="!isValid || loading"
          :loading="loading"
          block
          color="appblue"
          class="white--text"
          @click="signup"
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
      isValid: false,
      loading: false,
      params: { user: { name: '', email: '', password: '' } }
    }
  },
  methods: {
    signup () {
      this.loading = true
      setTimeout(() => {
        this.formReset()
        this.loading = false
      }, 1500)
    },
    formReset () {
      this.$refs.form.reset()
      for (const key in this.params.user) {
        this.params.user[key] = ''
      }
    }
  }
}
</script>
