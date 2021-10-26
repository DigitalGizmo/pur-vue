<template>
  <h1>Picturing Urban Renewal</h1>
  <ul  id="main-menu">
    <li>Home | </li>
    <li>Personal Stories | </li>
    <li>Visual Record</li>
  </ul>
  <!-- Visuals is hard-wired for the time being -->
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
body {
  background-color: black;
}

ul, ol {
  list-style-type: none;
  padding:  0;
}

h1 {
  font-size: 2em;
  font-style: italic;
  font-weight: normal;
  margin: 0;
}

h2 {
  font-size: 1.75em;
  margin: 0;
}

#app {
 color:  beige;
 font-family: sans-serif;
 padding: 5%;
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
  background-color: beige;  
  border: 1px solid gray;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.75);
  color: black;
  overflow:  auto;
  padding: 2em;
  position: relative;
}


</style>
