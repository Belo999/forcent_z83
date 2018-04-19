<template>
  <div class='fluid body1'>
     <v-footer height="auto"  class="grey darken-3">
      <v-layout row wrap justify-center>
        <v-flex xs12 py-2 text-xs-center white--text>
          &copy;2018 — <strong>forescent</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.body1{
  margin-top: 10px;
}
</style>
