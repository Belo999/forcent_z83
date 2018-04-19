<template>
  <div>
        <v-container
      fluid
      grid-list-sm
      tag="section"
      id="grid"
    >
      <v-layout row wrap>
        <v-flex tag="h1" class="headline">Declaration</v-flex>
        <v-flex d-flex xs12 order-xs5>
          <v-layout column>
            <v-flex>
              <v-card flat>
                <v-card-text
                v-text="lorem">
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex>
              <v-card flat>
                <v-card-text
                v-text="lorem">
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-flex xs12 sm5>
        <v-checkbox label="Do you Agree" v-model="ex4" color="primary" value="primary" hide-details></v-checkbox>
      </v-flex>
      <v-flex >
      </v-flex>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Declaration',
  props: {
  },
  data: () => ({
    lorem: `I declare that all the information provided (including any attachments) is complete and correct
to the best of my knowledge. I understand that any false information supplied could lead to my
application being disqualified or my discharge if I am appointed`,
      ex4: ['primary'],
      checked: false
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>