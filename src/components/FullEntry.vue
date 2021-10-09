<template>
  <div class="lightbox" @click.self="closeFullEntry">
    <div id="slimpop-wrapper" class="entry-pop">
      <p class="close">
        <a @click="closeFullEntry">Close</a>
      </p>

      <header>
        <h2>{{ images[currIndex].title }}</h2>
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
    h1 {
      font-size: 2.5em;
      font-style: italic;
      margin: 0;
    }
  }

  h2 {
    font-size: 1em;
    font-variant: small-caps;
    letter-spacing: .05em;
    margin: 0;
  }

  p.close {
    font-size: 1em;
    font-variant: small-caps;
    letter-spacing: .05em;
    text-align: right;
  }

  .close a {
    color: #C64C17;
  }

  span.entry-text p {
    margin-top: 1em;
    font-style: italic;
  }

  /*Don free-lancing*/
  img.fullpic {
    height: 45%;
  }

</style>
