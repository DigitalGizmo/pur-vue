<template>
  <h2>{{ title }}  Archive</h2>
  <p>msg:  {{ msg }} </p>
  <div class="thumb-div">
    <ul class="thumb-list">
      <li v-for="(item, index) in archive_items" :key="item.index">
        <div class="thumb-box">
          <a @click="showFullEntry(index)">
          <img class="thumbs" 
          :src="'http://dev.picturingurbanrenewal.org/prod-assets/archive/thumbpics/' + item.slug + '-tn.jpg'"></a>
          <p>{{ item.title }} </p>  
        </div>
      </li>
    </ul>
    
  </div>
  <full-entry
    v-if="fullEntryOn"
      :entry="entry"
      :currIndex="currIndex"
      :archive_items="archive_items"
      :closeFullEntry="closeFullEntry"
    >
  </full-entry>

</template>

<script>
import FullEntry from '../components/FullEntry.vue'

export default {
  name: 'ArchiveTest',
  props: {
    msg: String
  },
  data() {
    return {
      title: 'Primary Source',
      fullEntryOn: false,
      currIndex: 0,
      entry: { slug: '45-jefferson-appraisal', title: 'Appraisal Photo of 45 Jefferson St.' },
      archive_items: [
        { slug: '45-jefferson-appraisal', title: 'Appraisal Photo of 45 Jefferson St.' },
        { slug: 'dauner-on-roof', title: 'Gene Dauner on a Downtown Kingston Rooftop' },
        { slug: '35-jefferson-lease-option-sign', title: '35 Jefferson Albert & Kirsch lease and option sign' },
      ]
    }
  },
  components: {
    FullEntry
  },
  methods: {
    showFullEntry (index) {
      this.currIndex = index
      this.fullEntryOn = true
    },
    closeFullEntry () {
      this.fullEntryOn = false
    },
  }
}
</script>

<style>
.thumbs {
  max-height: 150px;
}
.thumb-box {
  max-width: 150px;
}
.thumb-div {
  text-align: left;
  display: inline;
}
.thumb-list {
  list-style-type: none;
}
.thumb-list li {
  float: left;
}
</style>

