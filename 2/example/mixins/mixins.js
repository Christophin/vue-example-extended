export default {
  filters: {
    dateFormat (val) {
      val = val.toISOString()
      return val
    }
  }
}
