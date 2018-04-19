<template>
  <div id="app">
    <v-app class="insipire">

     <!-- <router-link to="/">Home</router-link> -->
    <router-view />
 
    <!-- <PersonalInfo /> -->
    </v-app>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import Rules from './components/profile/Rules.vue'
import PersonalInfo from './components/profile/PersonalInfo.vue'


export default {
  name: 'app',
  components: {
    Header, Home, Rules, PersonalInfo
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
