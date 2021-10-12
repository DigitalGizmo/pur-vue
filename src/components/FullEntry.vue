<template>
  <div class="lightbox" @click.self="closeFullEntry">
    <div id="slimpop-wrapper" class="entry-pop">
      <p class="close">
        <a @click="closeFullEntry">Close</a>
      </p>

      <header>
        <h1>{{ images[currIndex].title }}</h1>
        <p>Amateur photographer Gene Dauner stands on a downtown Kingston rooftop, looking to the north toward the Broadway East urban renewal project area.</p>
        <p>date: 1967</p>
        <p>Courtesy of Gene Dauner</p>
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
  font-size: 1em;
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
