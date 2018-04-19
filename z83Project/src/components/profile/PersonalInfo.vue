<template>
  <div>
    <v-app>
      <v-content>
        <v-container>
          <v-stepper v-model="step" vertical>
            
            <v-stepper-header>
              <v-stepper-step step="1" :complete="step > 1">Rules</v-stepper-step>
              <v-divider></v-divider>                    
              <v-stepper-step step="2" :complete="step > 2">Personal-Info</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="3" :complete="step > 3">Contact-Info</v-stepper-step>
              <v-divider></v-divider>
               <v-stepper-step step="4" :complete="step > 4">Qualifications</v-stepper-step>
              <v-divider></v-divider>
               <v-stepper-step step="5" :complete="step > 5">Work</v-stepper-step>
              <v-divider></v-divider>
               <v-stepper-step step="6" :complete="step > 6">References</v-stepper-step>
              <v-divider></v-divider>
               <v-stepper-step step="7" :complete="step > 7">Attachments</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="8">Finish</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <!-- Rules -->
              <v-stepper-content step="1"> 
                <v-layout>
                  <v-flex xs12 sm12 offset-sm0>
                    <v-card>
                      <div class="col-sm-6 col-md-6 col-lg-10 offset-1 boxe">
                        <Rules />
                        <v-btn color="primary" @click.native="step = 2">Continue</v-btn>
                      </div>
                      <br />
                    </v-card>
                  </v-flex>
                </v-layout>                
              </v-stepper-content>

              <!-- PersonalInfo -->
              <v-stepper-content step="2">
                <v-layout row wrap>
                  <PersonInfo />
                  <v-flex xs12 sm5 box offset-sm7>
                    <v-btn flat @click.native="step = 1">Previous</v-btn>
                    <v-btn color="primary" @click.native="step = 3">Continue</v-btn>
                  </v-flex>
                </v-layout>
              </v-stepper-content>

              <!-- Contact Info -->
              <v-stepper-content step="3">  
                <v-layout row wrap>
                    <ContactInfo />
                 <v-flex xs12 sm5 box offset-sm7>                
                <v-btn flat @click.native="step = 2">Previous</v-btn>
                <v-btn color="primary" @click.native="step = 4">Continue</v-btn>
                 </v-flex>
                </v-layout>
              </v-stepper-content>
              
              <!-- Qualifications -->
              <v-stepper-content step="4">
                <Qualifications />
            
                 <v-flex xs12 sm5 box offset-sm7>                
                <v-btn flat @click.native="step = 3">Previous</v-btn>
                <v-btn color="primary" @click.native="step = 5">Continue</v-btn>
                 </v-flex>
              </v-stepper-content>

              <!-- work experience -->
              <v-stepper-content step="5">    
                <WorkExperience />
                <v-flex xs12 sm5 box offset-sm8>
                <v-btn flat @click.native="step = 4">Previous</v-btn>
                <v-btn color="primary" @click.native="step = 6">Continue</v-btn>
                </v-flex>
              </v-stepper-content>

              <!-- References -->
              <v-stepper-content step="6">
                  
                  <Reference />
                <v-flex xs12 sm5 box offset-sm8>
                <v-btn flat @click.native="step = 5">Previous</v-btn>
                <v-btn color="primary" @click.native="step = 7">Continue</v-btn>
                </v-flex>
              </v-stepper-content>

              <!-- Attachments -->
              <v-stepper-content step="7">
                <Attachments />
                <v-flex xs12 sm5 box offset-sm8>
                <v-btn flat @click.native="step = 6">Previous</v-btn>
                <v-btn color="primary" @click.native="step = 8">Continue</v-btn>
                </v-flex>
              </v-stepper-content>

              <!-- Declaration -->
              <v-stepper-content step="8">
                  <Declaration />

                  <v-flex xs12 sm5 box offset-sm8>
                    <v-btn flat @click.native="step = 6">Previous</v-btn>
                    <v-btn color="primary" @click.prevent="submit">Save</v-btn>
                  </v-flex>
              </v-stepper-content>

            </v-stepper-items>
          </v-stepper>         
              
        </v-container>    
    
    </v-content>

  </v-app>

  <br/><br/>Debug: {{registration}}
  </div>
</template>

<script>
import Qualifications from './Qualifications.vue'
import WorkExperience from './WorkExperience.vue'
import Attachments from './Attachments.vue'
import Rules from './Rules.vue'
import PersonInfo from './PersonInfo.vue'
import ContactInfo from './ContactInfo.vue'
import Reference from './Ref.vue'
import Declaration from './Declaration.vue'



export default {
  name: 'PersonalInfo',
  components: {
    Rules, PersonInfo, ContactInfo, Qualifications, WorkExperience, Reference, Attachments, Declaration
    },
 data: () => ({
      language: '',
      languages:[
        {"language": "Venda"}
      ],
      step:1,
    menu: false,
      registration:{
        name:null,
        email:null,
        date: null,
        street:null,
        city:null,
        state:null,
        numtickets:0,
        shirtsize:'XL'
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

    dialog: false,
    headers: [
      {
        text: 'Language',
        
        sortable: true,
        value: 'name'
      },
      
      { text: 'Actions', align: 'right', value: 'name', sortable: false }
    ],
    items: [],
    editedIndex: -1,
    editedItem: {
      name: ''
    },
    defaultItem: {
      name: ''
    }
    
    
  }),
  methods:{
    save (date) {
      this.$refs.menu.save(date)
    },
    submit() {
      alert('This is the post. Blah');
    },
    addLanguage(){
    this.languages.push({language: this.language}),
    this.language = '';
  },

     editItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.items.indexOf(item)
      confirm('Are you sure you want to delete this Language?') && this.items.splice(index, 1)
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], this.editedItem)
      } else {
        this.items.push(this.editedItem)
      }
      this.close()
    }

  },
    watch: {
    menu (val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
    },
    dialog (val) {
      val || this.close()
    }
  },

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Add Language' : 'Edit Language'
    }
  },
    created () {
    this.initialize()
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.boxe{
  border: 1px solid #888888;
  box-shadow: 5px 10px #888888;
  box-shadow: darkgreen;
  background-color:#fff;
  border-bottom-left-radius: 10%;
  padding-left: 20px;
  padding-Top: 5px;
  padding-bottom: 5px;
  text-align: center;
  margin-top: 10px;

  
}

td {
  font-size: 1px;
}
</style>