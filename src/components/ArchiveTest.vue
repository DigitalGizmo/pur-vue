<template>
  <h2>{{ title }}  Archive</h2>
  <p>msg:  {{ msg }} </p>

  <ul>
    <li v-for="item of archive_items" :key="item.slug">
      <img :src="'archive/fullpics/' + item.slug + '.jpg'">
      <p>{{ item.title }}</p>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'ArchiveTest',
  props: {
    msg: String
  },
  data() {
    return {
      title: 'Primary Source',
      archive_items: [
        { slug: '45-jefferson-appraisal', title: 'Appraisal Photo of 45 Jefferson St.' },
        { slug: 'dauner-on-roof', title: 'Gene Dauner on a Downtown Kingston Rooftop' },
        { slug: '35-jefferson-lease-option-sign', title: '35 Jefferson Albert & Kirsch lease and option sign' },
      ]
    }
  }
}
</script>

<style>
img {
  max-height: 500px;
}
</style>

