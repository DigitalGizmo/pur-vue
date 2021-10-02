import { createApp, provide, h } from 'vue'
// For apollo client 
import { ApolloClient, createHttpLink, InMemoryCache, gql } from '@apollo/client/core'
// For composable
import { DefaultApolloClient } from '@vue/apollo-composable'
import App from './App.vue'

const httpLink = createHttpLink({
    uri: 'https://rickandmortyapi.com/graphql',
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
})


// Test access to graphql
const query = gql`
    query {
        characters {
            results {
                name
            }
        }
    }
`
apolloClient.query({
    query
}).then(res => console.log(res))


// const app = 
createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },

    render: () => h(App),
}).mount('#app')
