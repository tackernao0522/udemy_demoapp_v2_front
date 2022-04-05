export default ({ $axios }) => {
  // リクエストログ
  $axios.onRequest((config) => {
    config.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    // eslint-disable-next-line no-console
    console.log(config)
  })
  // レスポンスログ
  $axios.onResponse((config) => {
    // eslint-disable-next-line no-console
    console.log(config)
  })
  // エラーログ
  $axios.onError((e) => {
    // eslint-disable-next-line no-console
    console.log(e.response)
  })
}
