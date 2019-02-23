<template>
  <div id="root">
    <h1>初始的Vue架构出来了！</h1>
    <p>{{ info }}</p>
    <input type="text" v-model="info" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: 'INIT DATA'
    }
  }
}
</script>