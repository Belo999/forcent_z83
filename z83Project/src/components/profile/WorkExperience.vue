<template>
  
<div id="app">
  <v-app id="inspire">
    <div>
      <v-dialog v-model="dialog" max-width="500px">
        <v-btn color="primary" small fab dark slot="activator">
                <v-icon>add</v-icon>
              </v-btn>
              <label slot="activator">Add Work Experience</label>

        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm12>
                  <v-text-field label="Employer" v-model="editedItem.employer"></v-text-field>
                </v-flex>
                <v-flex xs12 sm12>
                  <v-text-field label="Post" v-model="editedItem.post"></v-text-field>
                </v-flex>
                <v-flex xs12 sm5 offset0>
                  <v-menu ref="menu" lazy :close-on-content-click="false" v-model="menu" transition="scale-transition"
                    offset-y full-width :nudge-right="40" max-width="290px" min-width="290px" :return-value.sync="date">
                  <v-text-field slot="activator" label="From" v-model="date" prepend-icon="event" readonly></v-text-field>
                  <v-date-picker type="month" v-model="date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn></v-date-picker>
                  </v-menu>
                </v-flex>
                <v-flex xs12 sm5 offset-2>
                    <v-menu ref="menu" lazy :close-on-content-click="false" v-model="menu" transition="scale-transition"
                    offset-y full-width :nudge-right="40" max-width="290px" min-width="290px" :return-value.sync="date">
                    <v-text-field slot="activator" label="To" v-model="date" prepend-icon="event" readonly></v-text-field>
                    <v-date-picker type="month" v-model="date" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                        <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                    </v-date-picker>
                    </v-menu>

                </v-flex>
                <v-flex xs12 sm12>
                  <v-text-field label="Reason For Leaving" v-model="editedItem.reasonForLeaving"></v-text-field>
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
          <td>{{ props.item.employer }}</td>
          <td class="text-xs-right">{{ props.item.post }}</td>
          <td class="text-xs-right">{{ props.item.from }}</td>
          <td class="text-xs-right">{{ props.item.to }}</td>
          <td class="text-xs-right">{{ props.item.reasonForLeaving }}</td>
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
  </v-app>
</div>
</template>

<script>
export default {
  name: "WorkExperience",
  props: {},
     data: () => ({
    dialog: false,
     date: null,
    menu: false,
    modal: false,
    headers: [
      {
        text: 'Employer (include current employer)',
        align: 'left',
        sortable: false,
        value: 'employer'
      },
      { text: 'Post', align: 'center', value: 'post' },
      { text: 'From', align: 'center', value: 'from' },
      { text: 'To', align: 'center', value: Date() },
      { text: 'Reason For Leaving', align: 'center', value: 'reasonForLeaving' },
      { text: 'Actions', align: 'center', value: 'name', sortable: false }
    ],
    items: [],
    editedIndex: -1,
    editedItem: {
      employer: '',
      post: '',
      from: null,
      to: null,
      reasonForLeaving: ''
    },
    defaultItem: {
      employer: '',
      post: '',
      from: null,
      to: null,
      reasonForLeaving: ''
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Add work experience' : 'Edit work experience'
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
    initialize () {
      this.items = [
        {
          employer: 'Frozen Yogurt',
          post: 159,
          from: 6.0,
          to: 24,
          reasonForLeaving: 4.0
        }
      ]
    },

    editItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.items.indexOf(item)
      confirm('Are you sure you want to delete this Work experience?') && this.items.splice(index, 1)
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
