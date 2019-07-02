<script>
export default {
  props: {
    queryKey: {
      type: [String, Array],
      required: true
    }
  },
  render() {
    if (typeof this.queryKey === 'string') {
      return this.$scopedSlots.default(this.$route.query[this.queryKey])
    }

    const params = this.queryKey.reduce(
      (acc, key) => ({ ...acc, [key]: this.$route.query[key] }),
      {}
    )
    return this.$scopedSlots.default(params)
  }
}
</script>
