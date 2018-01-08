<template>
  <section>
    <ul :style="{'list-style': listStyle}">
      <li v-for="(item, index) in listItems"
          :style="{'color': toggleColor(index)}">
        {{ index + 1 }}  {{ item.text }} - {{ item.time | dateFormat }}
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
        console.log('val', this.listItems.index)
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
    methods: {
      toggleColor (index) {
        if (index % 2 === 0) {
          return '#ff0000'
        } else {
          return '#0000ff'
        }
      }
    },
    created () {
    }
  }
</script>
