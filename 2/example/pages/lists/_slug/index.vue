<template>
  <section class="container">
    <cd-list
      :listItems="listItems">
    </cd-list>
  </section>
</template>

<script>
import List from '../../../components/list.vue'

export default {
  layout: 'default',
  components: {
    'cd-list': List
  },
  data () {
    return {
      listItems: [{ text: 'sorry, no messages', time: new Date(Date.now()) }],
      intVal: 0
    }
  },
  watch: {
    intVal (val) {
      console.log('intVal', val)
    }
  },
  mounted () {
    let intStop = 16000
    setTimeout(() => {
      let msgInt = setInterval(() => {
        this.intVal++
        if (this.intVal === 1) {
          this.listItems.pop()
        }
        let d = new Date(Date.now())
        let msg = {
          text: 'You recieved a message at',
          time: d
        }
        this.listItems.push(msg)
        if (this.intVal * 1000 >= intStop) {
          window.clearInterval(msgInt)
        }
      }, 1000)
    }, 5000)
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
