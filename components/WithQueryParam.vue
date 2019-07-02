<script>
export default {
  props: {
    queryKey: {
      type: String,
      required: true
    }
  },
  render() {
    return this.$scopedSlots.default(this.$route.query[this.queryKey])
  }
}
</script>
