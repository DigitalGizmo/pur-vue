<template>
  <h1>{{ title }}</h1>
  <ArchiveTest msg="Welcome to your evolving archive items"/>
</template>

<script>
import ArchiveTest from './components/ArchiveTest.vue'
export default {
  name: 'App',
  data() {
    return {
      title: 'Picturing Urban Renewal',
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

/* From Treat Map  */

.lightbox {
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(assets/overlay.png) repeat;
  z-index: 99;
}

/* shared styles for journal and credits popups, specific styles in FullEntry.vue and Credits.vue */
#slimpop-wrapper {
  background-color: #eff0de;
  border: 1px solid #b3aa98;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.75);
  color: #535442;
  display: grid;
  padding: 1em 3em 3em 3em;
  position: relative;
}


</style>
