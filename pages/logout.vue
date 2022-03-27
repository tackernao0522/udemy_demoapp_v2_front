<script>
export default {
  // ページをレンダリングする前に実行される
  // nuxtServerInitの後
  middleware ({ redirect }) {
    return redirect('/')
  }
  // asyncData () の前
}
</script>
