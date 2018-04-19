<template>
  <v-layout row wrap>
    <v-flex xs12 sm4 box offset-sm1>
      <v-text-field label="Surname" v-model="registration.surname" required></v-text-field>
      <v-text-field  label="First names" v-model="registration.firstname" required></v-text-field>
    </v-flex>
    <v-flex xs12 sm5 box offset-sm1>
      <!--Datepicker-->
      <v-menu ref="menu" lazy :close-on-content-click="false" v-model="menu" transition="scale-transition"
        offset-y full-width :nudge-right="40" min-width="290px">
          <v-text-field slot="activator" label="Date of Birth" v-model="date" readonly></v-text-field>
          <v-date-picker ref="picker" v-model="date" @change="save"
          min="1940-01-01" :max="new Date().toISOString().substr(0, 10)"></v-date-picker>
      </v-menu>    
      <v-text-field label="ID number" v-model="registration.idNumber"  :counter="13" required></v-text-field>
    </v-flex>

    <v-flex xs12 sm4 box offset-sm1>
      <v-select label="Race" v-model="registration.race" :items="race" required></v-select>
      <v-select label="Gender" v-model="registration.gender" :items="sex" required></v-select>
    </v-flex>
    <v-flex xs12 sm5 box offset-sm1>
      <v-select label="Do you have disability?" v-model="registration.disability" :items="ask" required></v-select>
      <v-select label="Are you a South African citizen?" v-model="registration.citizenship" :items="ask" required></v-select>                
    </v-flex>
    <hr />
  </v-layout>
</template>


<script>

export default {
  name: 'PersonInfo',
  data: () => ({
    step:1,
    menu: false,
    registration:{
      surname: '',
      firstname: '',
      date: null,
      idNumber:null,
      race: '',
      gender: '',
      disability: '',
      citizenship: '',
      },
    items: [
      { title: 'African' },
      { title: 'White' },
      { title: 'Coloured' },
      { title: 'Indian' }
    ],
    race:['African','White','Coloured','Indian'],
    sex:['Male','Female'],
    ask:['Yes', 'No'],
  }),
  watch: {
    menu (val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },
  methods: {
    save (date) {
      this.$refs.menu.save(date)
    }
  }

}
</script>