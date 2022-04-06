<template>
  <user-form-card>
    <template
      #user-form-card-content
    >
      <v-form
        ref="form"
        v-model="isValid"
        @submit.prevent="login"
      >
        <user-form-email
          :email.sync="params.auth.email"
        />
        <user-form-password
          :password.sync="params.auth.password"
        />
        <v-card-actions>
          <nuxt-link
            to="#"
            class="body-2 text-decoration-none"
          >
            パスワードを忘れた？
          </nuxt-link>
        </v-card-actions>
        <v-card-text
          class="px-0"
        >
          <!-- disabled=true => ボタンクリックを無効にする -->
          <v-btn
            type="submit"
            :disabled="!isValid || loading"
            :loading="loading"
            block
            color="appblue"
            class="white--text"
          >
            ログインする
          </v-btn>
        </v-card-text>
      </v-form>
    </template>
  </user-form-card>
</template>

<script>
import UserFormCard from '../components/User/UserFormCard.vue'
import UserFormEmail from '../components/User/UserFormEmail.vue'
import UserFormPassword from '../components/User/UserFormPassword.vue'

export default {
  components: { UserFormCard, UserFormEmail, UserFormPassword },
  layout: 'before-login',
  data ({ $store }) {
    return {
      name: '',
      isValid: false,
      loading: false,
      // TODO 削除する
      params: { auth: { email: 'user0@example.com', password: 'password' } },
      redirectPath: $store.state.loggedIn.homePath
    }
  },
  methods: {
    async login () {
      this.loading = true
      if (this.isValid) {
        await this.$axios.$post('/api/v1/auth_token', this.params)
          .then(response => this.authSuccessful(response))
          .catch(error => this.authFailure(error))
      }
      this.loading = false
    },
    authSuccessful (response) {
      // eslint-disable-next-line no-console
      console.log('authSuccessful', response)
      this.$auth.login(response)
      // TODO test
      // eslint-disable-next-line no-console
      console.log('token', this.$auth.token)
      // eslint-disable-next-line no-console
      console.log('expires', this.$auth.expires)
      // eslint-disable-next-line no-console
      console.log('payload', this.$auth.payload)
      // eslint-disable-next-line no-console
      console.log('user', this.$auth.user)
      // TODO 記憶ルートリダイレクト
      this.$router.push(this.redirectPath)
    },
    authFailure ({ response }) {
      if (response && response.status === 404) {
        const msg = 'ユーザーが見つかりません😢'
        return this.$store.dispatch('getToast', { msg })
      }
      // TODO エラー処理
    }
  }
}
</script>
