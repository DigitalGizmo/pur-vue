<template>
  <h2>{{ title }}  Archive</h2>
  <p>msg:  {{ msg }} </p>
  <div v-if="loading">Loading...</div>

  <div v-else-if="error">Error: {{ error.message }} </div>

  <ul v-else-if="persons">
    <li v-for="person of persons" :key="person.name">
      {{ person.name }}
    </li>
  </ul>
</template>

<script>
// import { useQuery } from '@vue/apollo-composable'
import { useQuery, useResult } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export default {
  name: 'Archive',
  props: {
    msg: String
  },
  setup () {
    const { result, loading, error } = useQuery(gql`
      query getCharacters {
        characters {
          results {
            name
          }
        }
      }      
    `)

    const persons = useResult(result, null, data => data.characters.results)

    return {
      // result,
      persons,
      loading,
      error,
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
