<template>
    <v-layout row wrap>
        <v-flex xs12 sm5 box offset-sm1>
            <v-text-field label="Cellphone" v-model="registration.cellphone"></v-text-field>
            <v-text-field label="Telephone" v-model="registration.telephone"></v-text-field>                  
        </v-flex>
        <v-flex xs12 sm5 box offset-sm1>
            <v-text-field label="Email" v-model="registration.email"></v-text-field>
        </v-flex> 
        <v-flex xs12 sm5 box offset-sm1>
            <v-text-field name="input-5-1" label="Address" multi-line></v-text-field>
        </v-flex>
        <v-flex xs12 sm5 box offset-sm1>                  
        <div>
            <v-dialog v-model="dialog" max-width="300px">
                <v-btn color="error" small fab dark slot="activator"><v-icon>add</v-icon></v-btn>
                <label slot="activator">Add Language</label>
                <v-card>
                    <v-card-text>
                        <v-container grid-list-md>
                            <v-layout wrap>
                                <v-flex xs12 sm9 md>
                                    <v-text-field label="Language" v-model="editedItem.name"></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
                        <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-data-table hide-headers :items="items" hide-actions class="elevation-1">
                <template slot="items" slot-scope="props">
                    <td style="padding-top: 20px">{{ props.item.name }}</td>
                    <td class="right layout px-0">
                        <v-btn icon class="mx-0" @click="deleteItem(props.item)">
                        <v-icon color="pink">delete</v-icon>
                    </v-btn>
                    </td>
                </template>
            </v-data-table>
        </div>
        </v-flex>
    </v-layout>  
</template>

<script>

export default {
  name: 'ContactInfo',
   data: () => ({
        dialog: false,
        registration:{
            cellphone:null,
            telephone:null,
            email: null,
      },
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
    computed: {
        formTitle () {
            return this.editedIndex === -1 ? 'Add Language' : 'Edit Language'
        }
    },
    watch: {
        dialog (val) {
            val || this.close()
        }
    },
    created () {
        this.initialize()
    },

methods:{
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

   }

}
</script>

<style>

</style>
