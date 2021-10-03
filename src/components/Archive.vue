<template>
  <h2>{{ title }}  Archive</h2>
  <p>msg:  {{ msg }} </p>
  <ul v-if="result && result.characters.results">
    <li v-for="whammy of result.characters.results" :key="whammy.name">
      {{ whammy.name }}
    </li>
  </ul>
</template>

<script>
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export default {
  name: 'Archive',
  props: {
    msg: String
  },
  setup () {
    const { result } = useQuery(gql`
      query getCharacters {
        characters {
          results {
            name
          }
        }
      }      
    `)

    return {
      result,
    }
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
