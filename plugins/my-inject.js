class MyInject {
  constructor(ctx) {
    this.app = ctx.app
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
}

export default ({ app }, inject) => {
  inject('my', new MyInject({ app }))
}
