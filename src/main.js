import { createApp, provide, h } from 'vue'
// For apollo client 
import { ApolloClient, createHttpLink, InMemoryCache, gql } from '@apollo/client/core'
// , gql
// For composable
import { DefaultApolloClient } from '@vue/apollo-composable'
import App from './App.vue'

// console.log("uri: " + process.env.VUE_APP_SOURCELINK_API_URL);

const httpLink = createHttpLink({
    // uri: process.env.VUE_APP_SOURCELINK_API_URL,

    uri: 'http://admin.picturingurbanrenewal.org/archive/graphql/'

    // uri: 'https://rickandmortyapi.com/graphql',
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
})


// Test access to graphql
// const query = gql`
//     query {
//         characters {
//             results {
//                 name
//             }
//         }
//     }
// `

const query = gql`
     query { hello }
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
