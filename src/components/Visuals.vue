<template>
  <h2>Visual Record</h2>
  <div>
    <p>Cities</p>
    <ul>
      <li>
        <input type="checkbox" id="scales" name="albany">
        <label for="scales">Albany</label>
      </li>
      <li>
        <input type="checkbox" id="scales" name="kingston">
        <label for="scales">Kingston</label>
      </li>
    </ul>
    
  </div>
  <div v-if="loading">Loading...</div>

  <div v-else-if="error">Error: {{ error.message }} </div>

  <div v-else-if="images"> <!-- If success in retrieving the image list -->
    <ul id="menu-list">
      <li v-for="(image, index) of images" :key="image.index">
        <div class="menu-item">
          <a @click="showFullEntry(index)">
            <img class="menu-image" 
              :src="'http://admin.picturingurbanrenewal.org/media/visuals/thumbpics/' + image.slug + '-tn.jpg'">
          </a>
        </div>
      </li>
    </ul>
  </div>

  <full-entry
    v-if="fullEntryOn"
      :images="images"
      :currIndex="currIndex"
      :closeFullEntry="closeFullEntry"
    >
  </full-entry>

</template>

<script>
import { useQuery, useResult } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import FullEntry from '../components/FullEntry.vue'

export default {
  name: 'Visuals',
  // props: {
  //   msg: String
  // },
  // Composable-based graphql for the image list from admin
  setup () {
    const { result, loading, error } = useQuery(gql`
      query getImages ($city_id: Int){
          all_images(city_id: $city_id){
              slug
              title
          }
      }
    `, {
      city_id: null
    })
    const images = useResult(result, null, data => data.all_images)
    return {
      // result,
      images,
      loading,
      error,
    }
  },
  data() {
    return {
      title: 'Primary Source',
      fullEntryOn: false,
      currIndex: 0,
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
/*Don free-lancing*/
#menu-list li {
  display: inline;
}
.menu-item {
  display: inline;
  max-width: 150px;
}
.menu-image {
  max-height: 150px;
}
</style>


