<template>
  <h1>{{ title }}</h1>
  <ArchiveTest msg="Welcome to Your evolving archive items"/>
</template>

<script>
import ArchiveTest from './components/ArchiveTest.vue'
export default {
  name: 'App',
  data() {
    return {
      title: 'My begining app',
    }
  },
  components: {
    ArchiveTest
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
