<template>
      <v-layout wrap >
      <v-container  fluid >
        <v-layout right>
          <v-btn large depressed @click.stop="drawer = !drawer" color="white" dark><i class="fa fa-bars" style="font-size:60px;color:black;"></i></v-btn>
        </v-layout>
        <v-layout right>
            <img class='logo' src="../assets/images/dpsa.jpg">
        </v-layout>
      </v-container>
      <v-navigation-drawer
        temporary
        v-model="drawer"
        :mini-variant="mini"
        
        absolute
      >
        <v-list class="pa-1">
          <v-list-tile v-if="mini" x-large @click.stop="mini = !mini">
            <v-list-tile-action>
              <v-icon>chevron_right</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile avatar tag="div">
            <v-list-tile class='logo2'>
              <img src="../assets/images/forescent.jpg" alt="forescent" >
            </v-list-tile>
            <v-list-tile-action>
              <v-btn icon @click.stop="mini = !mini">
                <v-icon x-large>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-list class="pt-0">
          <v-divider light></v-divider>
          <v-list-tile v-for="item in items" :key="item.title" router :to="item.link">
            <v-list-tile-action>
              <v-icon large>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="enlarge">{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
</template>


<script>
export default {
  name: "Header",
     data () {
    return {
      drawer: null,
      items: [
        { title: 'Home', icon: 'dashboard', link: '/' },
        { title: 'Login', icon: 'lock_open', link: '/SignIn'},        
        { title: 'Register', icon: 'person_add', link: '/SignUp'},
        { title: 'Why Z83 Online', icon: 'fa fa-question-circle'},
        { title: 'Facebook', icon: 'fa fa-facebook-f'},
        { title: 'Twitter', icon: 'fa fa-twitter'},
        
        
      ],
      mini: false,
      right: null
    }
  }
}
</script>

<style>
.logo{
    width: 200px;
}
.logo2
{
    width: 250px;
    margin-top: 15px;
    margin-left: -10px
}
.enlarge{
    font-size: 24px;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 5px;
}
</style>

