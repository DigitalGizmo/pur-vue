<template>
  <div class="lightbox" @click.self="closeFullEntry">
    <div id="slimpop-wrapper" class="entry-pop">
      <p class="close">
        <a href="#" @click="prevEntry">Prev</a> |
        <a href="#" @click="nextEntry">Next</a> <br/>
        <a href="#" @click="closeFullEntry">Close</a>
      </p>

      <header>
        <h1>{{ images[currIndex].title }}</h1>
        <p>{{ images[currIndex].description }}</p>
        <p>location: {{ images[currIndex].location_display }}</p>
        <p>date: {{ images[currIndex].creation_year }}</p>
        <p>Courtesy of {{ images[currIndex].source_title }}</p>
      </header>

      <img :src="'http://dev.picturingurbanrenewal.org/prod-assets/archive/fullpics/' + 
        images[currIndex].slug + '.jpg'" class="fullpic">

    </div><!-- /#slippop-wrapper -->
  </div><!-- /.lightbox -->
</template>

<script>
export default {
  props: {
    images: {
      type: Object
    },
    currIndex: Number,
    closeFullEntry: Function,
    nextEntry: Function,
    prevEntry: Function,
  }
}
</script>

<style>
/* These styles are straight from Treat Map */
.entry-pop {
  margin: 5% auto;
  height: 80%;
  width: 60%;
}

header {
  max-width: 90%;
}

p.close {
  font-size: .7em;
  letter-spacing: .05em;
  max-width: 10%;
  float: right;
}

.close a {
  color: ;
}

img.fullpic {
  float: left;
  max-height: 60vh;
  margin-right:  1em;
}

</style>
