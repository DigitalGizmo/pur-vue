<template>
  <h2>Visual Record</h2>
  <h3>103 Images | Filter Images </h3>
  
  <div class="filters">
    <div>
      <p>Era</p>
      <ul class="filter-set">
        <li>
          <input type="checkbox" id="era-1940s" name="1940s">
          <label for="era-1940s">1940s</label>
        </li>
        <li>
          <input type="checkbox" id="era-1950s" name="1950s">
          <label for="era-1950s">1950s</label>
        </li>
        <li>
          <input type="checkbox" id="era-1960s" name="1960s">
          <label for="era-1960s">1960s</label>
        </li>
        <li>
          <input type="checkbox" id="era-1970s" name="1970s">
          <label for="era-1970s">1970s</label>
        </li>
        <li>
          <p><a href="#" @click="showTest">Show Test</a></p>
        </li>
      </ul>
    </div>

    <div>
      <p>Cities</p>
      <ul class="filter-set">
        <li>
          <input type="radio" id="city-albany" name="city" value="5">
          <label for="city-albany">Albany</label>
        </li>
        <li>
          <input type="radio" id="city-kingston" name="city" value="3">
          <label for="city-kingston">Kingston</label>
        </li>
        <li>
          <input type="radio" id="city-newburgh" name="city" value="2">
          <label for="city-newburgh">Newburgh</label>
        </li>
        <li>
          <input type="radio" id="city-stuytown" name="city" value="4">
          <label for="city-stuytown">Stuyvesant Town</label>
        </li>
        <li>
          <input type="radio" id="city-other" name="city" value="6">
          <label for="city-other">Other</label>
        </li>
        <li>
          <input type="radio" id="city-other" name="city" value="null">
          <label for="city-other">All</label>
        </li>
      </ul>
    </div>

    <div>
      <p>Topic</p>
      <ul class="filter-set">
        <li>
          <input type="checkbox" id="topic-demolition" name="demolition">
          <label for="topic-demolition">Demolition</label>
        </li>
        <li>
          <input type="checkbox" id="" name="topic-plans">
          <label for="topic-plans">Plans</label>
        </li>
        <li>
          <input type="checkbox" id="" name="topic-people">
          <label for="topic-people">People/Daily Life</label>
        </li>
        <li>
          <input type="checkbox" id="" name="topic-arch">
          <label for="topic-arch">Architecture</label>
        </li>
        <li>
          <input type="checkbox" id="" name="topic-before">
          <label for="topic-before">Before Redevelopment</label>
        </li>
      </ul>
    </div>

    <div>
      <p>Format</p>
      <ul class="filter-set">
        <li>
          <input type="checkbox" id="format-photos" name="photos">
          <label for="format-photos">Photographs</label>
        </li>
        <li>
          <input type="checkbox" id="format-graphics" name="graphics">
          <label for="format-graphics">Graphics/Ephemera</label>
        </li>
        <li>
          <input type="checkbox" id="format-drawings" name="drawings">
          <label for="format-drawings">Architectural Drawings</label>
        </li>
        <li>
          <input type="checkbox" id="format-maps" name="maps">
          <label for="format-maps">Maps</label>
        </li>
        <li>
          <input type="checkbox" id="format-docs" name="documents">
          <label for="format-docs">Documents</label>
        </li>
      </ul>
    </div>
  </div>

  <div v-if="loading">Loading...</div>

  <div v-else-if="error">Error: {{ error.message }} </div>

  <div v-else-if="images"> <!-- If success in retrieving the image list -->
    <ul id="menu-list">
      <li v-for="(image, index) of images" :key="image.index">
        <div class="menu-item">
          <a @click="showFullEntry(index)">
            <p class="pic-title">title here</p></a>
            <a @click="showFullEntry(index)"><img class="menu-image" 
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
import { ref } from 'vue';
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

    // Handle slimpop
    const fullEntryOn = ref(false);
    const currIndex = ref(0);

    function showTest () {
      console.log('Here is a test');
    }

    function showFullEntry (index) {
      currIndex.value = index;
      console.log('currIndex: ' + currIndex.value);
      fullEntryOn.value = true;
    }

    function closeFullEntry () {
      fullEntryOn.value = false;
    }

    const { result, loading, error } = useQuery(gql`
      query getImages ($city_id: Int){
          all_images(city_id: $city_id){
              slug
              title
              description
              creation_year
              source_title
          }
      }
    `, {
      city_id: null
    })

    // , variables

    // function setCity (city_id) {
    //   variables.value = {
    //     city_id,
    //   }
    // }

    const images = useResult(result, null, data => data.all_images)
    return {
      // result,
      images,
      loading,
      error,
      fullEntryOn: fullEntryOn,
      currIndex: currIndex,
      showFullEntry: showFullEntry,
      closeFullEntry: closeFullEntry,
      showTest: showTest,
    }
  },
  components: {
    FullEntry
  },
}
</script>

<style>
/*Don free-lancing*/
#menu-list li {
  display: inline;
}

.menu-item {
  display: inline;
}

/* an attempt to include the title of the image but it messes up the layout*/
.menu-item a {
  font-size: .5em;
  /*don test*/
  /*display: inline;*/
  /*position: relative;*/
}

.pic-title {
  display: inline;
  /*position: relative;*/
  /*top: -20;*/
  /*vertical-align: text-top;*/
}

.menu-image {
  height: 150px;
  width: auto;
  margin: 3px;
  display: inline;
  /*don test*/
  /*clear: left;*/
  /*position: relative;*/
  /*top: 20px;*/
}

.filters {
  display:  grid;
  font-size: .75em;
  grid-gap: 15px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
}

.filters ul {
}

</style>


