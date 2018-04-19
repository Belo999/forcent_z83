<template>
  <div>
      <v-dialog v-model="dialog" max-width="500px">
                <v-btn color="primary" small fab dark slot="activator">
                <v-icon>add</v-icon>
              </v-btn>
              <label slot="activator">Add References</label>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm12 >
                  <v-text-field label="Name" v-model="editedItem.name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm8 >
                  <v-text-field label="Reletionship" v-model="editedItem.relationship"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Tel: No. (office hours)" v-model="editedItem.telephone"></v-text-field>
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
      <v-data-table
        :headers="headers"
        :items="items"
        hide-actions
        class="elevation-1"
      >

        <template slot="items" slot-scope="props">
          <td >{{ props.item.name }}</td>
          <td class="text-center">{{ props.item.relationship }}</td>
          <td class="text-center">{{ props.item.telephone }}</td>
          <td class="justify-center layout px-0">
            <v-btn icon class="mx-0" @click="editItem(props.item)">
              <v-icon color="teal">edit</v-icon>
            </v-btn>
            <v-btn icon class="mx-0" @click="deleteItem(props.item)">
              <v-icon color="pink">delete</v-icon>
            </v-btn>
          </td>
        </template>
      </v-data-table>


  </div>
</template>

<script>
export default {
  name: 'Reference',
  props: {
  },
data: () => ({
    dialog: false,
    headers: [
      {
        text: 'Name',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'Relationship', align: 'center', sortable: false, value: 'relationship' },
      { text: 'Tel', align: 'center', sortable: false, value: 'telephone' },
      { text: 'Actions', value: 'name', sortable: false, sortable: false }
    ],
    items: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      relationship: '',
      tel: 0,
    },
    defaultItem: {
      name: '',
      reletionship: '',
      tel: 0,
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Add References' : 'Edit References'
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

  methods: {

    editItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.items.indexOf(item)
      confirm('Are you sure you want to delete Reference?') && this.items.splice(index, 1)
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
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>