<template>
  <div>
      
 <!-- <v-tabs
          color="cyan"
          slot="extension"
          v-model="tab"
          grow
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tab v-for="item in items" :key="item">
            {{ item.name }}
          </v-tab>
        </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item">
          <v-card flat>
            <v-card-text><component :is="componentId"></component></v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items> -->

      <secSchool />
      <v-progress-linear :indeterminate="true"></v-progress-linear>
      <Tertiary />
      <v-progress-linear :indeterminate="true"></v-progress-linear>
       <label ><b>Currently Studying:</b></label>                  
       <v-layout row wrap>
          <v-flex xs12 sm4 box offset-sm1>
                 <v-text-field label="Name of Institution" v-model="nameofInstitution" required></v-text-field>
          </v-flex>
          <v-flex xs12 sm4 box offset-sm1>
                 <v-text-field  label="Qualification" v-model="qualification" required></v-text-field>
          </v-flex>          
       </v-layout>
      
  </div>
</template>

<script>
import secSchool from './secSchool.vue'
import Tertiary from './Tertiary.vue'

export default {
  name: 'Qualifications',
  components: {
    secSchool, Tertiary
  },
  data () {
    return {
      tab: null,
            registration:{
        nameofInstitution:null,
        qualification:null},
      items: [
        { name: 'School/Technical Collage', components: secSchool}, { name: 'Tertiary (Obtatianed)', components: Tertiary},{name:'Current study'}
      ],

}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>