<template>
  <h2>Visual Record</h2>
  <h3># Images | Filter Images </h3>
  
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
      </ul>
    </div>

    <div>
      <p>Cities</p>
      <ul class="filter-set">
        <li>
          <input type="radio" id="city-albany" name="city" value="5"
            v-model="city_id_ref">
          <label for="city-albany">Albany</label>
        </li>
       <li>
          <input type="radio" id="city-kingston" name="city" value="3"
            v-model="city_id_ref">
          <label for="city-kingston">Kingston</label>
        </li>
         <li>
          <input type="radio" id="city-newburgh" name="city" value="2"
            v-model="city_id_ref">
          <label for="city-newburgh">Newburgh</label>
        </li>
        <li>
          <input type="radio" id="city-stuytown" name="city" value="4"
            v-model="city_id_ref">
          <label for="city-stuytown">Stuyvesant Town</label>
        </li>
        <li>
          <input type="radio" id="city-other" name="city" value="6"
            v-model="city_id_ref">
          <label for="city-other">Other</label>
        </li>
        <li>
          <input type="radio" id="city-other" name="city" value="null"
            v-model="city_id_ref">
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

  <div class="images-menu" v-else-if="images"> <!-- If success in retrieving the image list -->

  <figure class="gallery_item">
    <a @click="showFullEntry(index)">
      <img class="menu-image" 
            :src="'http://admin.picturingurbanrenewal.org/media/visuals/thumbpics/' + image.slug + '-tn.jpg'">
    </a>
    <figcaption class="">
      title goes here
    </figcaption>
  </figure>

  </div>

  <full-entry
    v-if="fullEntryOn"
      :images="images"
      :currIndex="currIndex"
      :closeFullEntry="closeFullEntry"
      :nextEntry="nextEntry"
      :prevEntry="prevEntry"
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

  // Composable-based graphql for the image list from admin
  setup () {

    // ------ Data from gql handling -----
    // I used city_id_ref instead of this because
    // I needed a function involved in order to parseInt
    // import { ref, reactive } from 'vue';    
    // const variables = reactive({
    //   city_id: null,
    // })

    const city_id_ref = ref(null)

    const { result, loading, error } = useQuery(gql`
      query getImages ($city_id: Int){
          all_images(city_id: $city_id){
              slug
              title
              description
              creation_year
              source_title
              city
              district_title
              street_address
          }
      }
    `, () => ({
      city_id: parseInt(city_id_ref.value)
    }) )

    // If I use "variables" directly I could use this:
    //           ...source_title
    //       }
    //   }
    // `, variables)
    const images = useResult(result, null, data => data.all_images)

    // ---- end gql -------------------------


    // ---- Handle slimpop --------
    const fullEntryOn = ref(false);
    const currIndex = ref(0);

    function showFullEntry (index) {
      currIndex.value = index;
      console.log('currIndex: ' + currIndex.value);
      fullEntryOn.value = true;
    }

    function closeFullEntry () {
      fullEntryOn.value = false;
    }

    function nextEntry () {
      // Next if next exists
      if (images.value[(parseInt(currIndex.value) + 1)]) {
        currIndex.value ++;
      }
    }

    function prevEntry () {
      if (currIndex.value > 0) {
        currIndex.value --;  
      }
    }

    return {
      images,
      loading,
      error,
      fullEntryOn,
      currIndex,
      showFullEntry,
      closeFullEntry,
      nextEntry,
      prevEntry,
      city_id_ref: city_id_ref,
    }
  },
  components: {
    FullEntry
  },
  // props: {
  //   msg: String
  // },
}
</script>

<style>

.images-menu {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px;
  margin: auto;
}

.gallery_item {
  box-sizing: border-box;
  margin: auto;
  width: 100%;
  padding: 1rem;
}

/*#menu-list li {
  display: inline;
}*/

/* an attempt to include the title of the image but it messes up the layout*/
/*#menu-list li a {
  font-size: .5em;
}*/

.menu-image {
  width: 100%;
  display: block;
/*  height: 150px;
  width: auto;
  margin: 3px;*/
}

.menu-image img {
  height: 150px;
}

.filters {
  display:  grid;
  font-size: .8em;
  grid-gap: 15px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
}

.filters ul {
}

</style>


