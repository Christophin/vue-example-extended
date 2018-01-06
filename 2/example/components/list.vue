<template>
  <section>
    <ul :style="{'list-style': listStyle}">
      <li v-for="(item, index) in listItems">
        {{ item.text }} - {{ item.time | dateFormat }}
      </li>
    </ul>
  </section>
</template>

<script>
  import Mixins from '../mixins/mixins.js'
  export default {
    name: 'list-component',
    props: ['listItems'],
    mixins: [Mixins],
    watch: {
      listItems (val) {
        console.log('val', val)
        if (val) {
          this.listStyle = 'inside'
        }
      }
    },
    data () {
      return {
        listStyle: 'none',
        defaultListItems: []
      }
    },
    created () {
    }
  }
</script>
