<template>
  <h2>{{ title }}  Archive</h2>
  <p>msg:  {{ msg }} </p>
</template>

<script>
export default {
  name: 'Archive',
  props: {
    msg: String
  },
  data() {
    return {
      title: 'Primary Source',
      // archive_items: [
      //   {}
      // ]
    }
  }
}
</script>
