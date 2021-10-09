<template>
  <h1>Picturing Urban Renewal</h1>
  <ul  id="main-menu">
    <li>Home | </li>
    <li>Personal Stories | </li>
    <li>Visual Record</li>
  </ul>
  <Visuals />
</template>

<script>
import Visuals from './components/Visuals.vue'

export default {
  name: 'App',
  // data() {
  //   return {
  //     title: 'Picturing Urban Renewal',
  //   }
  // },
  components: {
    Visuals
  }
}
</script>

<style>
#app {
  /* */
}

/* Don's freelancing */
#main-menu li {
  display: inline;
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
