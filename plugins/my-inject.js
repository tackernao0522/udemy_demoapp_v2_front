class MyInject {
  constructor(ctx) {
    this.app = ctx.app
    this.error = ctx.error
  }

  pageTitle(routeName) {
    // jsonPath => 'account-settings'
    const jsonPath = `pages.${routeName.replace(/-/g, '.')}`
    const title = this.app.i18n.t(jsonPath)
    return title
  }

  // 日付のフォーマット変換
  dateFormat(dateStr) {
    const dateTimeFormat = new Intl.DateTimeFormat(
      'ja', { dateStyle: 'medium', timeStyle: 'short' }
    )
    return dateTimeFormat.format(new Date(dateStr))
  }

  // プロジェクトリンク
  projectLinkTo(id, name = 'project-id-dashboard') {
    return { name, params: { id } }
  }

  // apiエラーハンドラー
  apiErrorHandler (response) {
    // ネットワークエラーの場合はresponseが存在しないので500を代入
    const statusCode = (response) ? response.status : 500
    const message = (response) ? response.statusText : 'Network Error'
    return this.error({ statusCode, message })
  }
}

export default ({ app, error }, inject) => {
  inject('my', new MyInject({ app, error }))
}
