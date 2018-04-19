<template>
<div>
  <Header />
  <div class="vcontainer">
    <video src="../assets/vids/go.mp4" autoplay>
    </video>    
    <div id="fake-nav">
      <v-btn class="btn py-0" v-on:click="open('register', $event)">Sign Up</v-btn>
      <v-btn class="btn py-0" v-on:click="open('login', $event)">Login</v-btn>
    </div>

        <div class="row">
      <v-container fill-height>
        <v-layout align-center>
        <v-flex xs12 sm5 offset-0>
         <h1 class="display-3 text-center">Over <b>{{value}}</b> Jobs Available</h1>
        </v-flex>
        <vr />
        <v-flex xs12 sm5 offset-2>         
        <h3 class="display-2 text-center">"This where you as a jobseeker create an <b>online CV</b> and the government of SA will apply to you for the job."</h3>          
        </v-flex>
        </v-layout>
      </v-container>
    </div>
   <div class="flex-row">
        <img class="enlarge" src="../assets/images/union.jpg"/>
    </div>
    <v-container text-xs-center fluid class="mov">
      <v-layout row wrap fluid>
        <v-flex xs12 sm12>
          <v-card color="white">
            <v-card-text class="display-4 px-0 test"  > Z-83 online</v-card-text>
            <v-card-text class=" px-0"><h2 class="paperless" >"Paperless system for the Public employment of South Africa"</h2></v-card-text> 
            <v-card-text class="px-0 system"> Job seekers will create an account on the platform wherein they can upload supporting documentation, job preferences and any other relevant information. </v-card-text>
            <v-card-text class="px-0 system">Government departments will then be able to use the database to source for potential employees for various positions that may be available. </v-card-text>
            <v-card-text class="px-0 system">Once a vacancy is advertised, the database should be able to select a batch from the database that matches the requirements needed to be considered for the vacancy. </v-card-text>
            <v-card-text class="px-0 system">The system would then alert all the eligible candidates via SMS/email about the advertised vacancy.</v-card-text>
            <v-card-text class="px-0 system">The system will then send a batch of candidates who have confirmed that they would like to be considered for the vacancy to the relevant HR department.</v-card-text>
         <br />
        <br />
        <v-btn class="px-0 fix py-0" x-large color="primary">Join Us</v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
     <div class="flex-row">
        <img class="enlarge" src="../assets/images/youth.jpg"/>
    </div>
    <v-expansion-panel>
      <v-expansion-panel-content>
        
        <div slot="header" class="text-center display-2"><b>[</b> Why z83 Online <b>]</b> </div>
        <v-card>
          <v-container text-xs-center fluid class="mov">
      <v-layout row wrap fluid>
                  <v-flex xs12 sm12>
          <v-card color="white">
            <ul>
            <li class="px-0 system">South Africa suffers from a high unemployment rate and the online system can in the least improve the efficiency and processing of available public employment vacancies.</li>
            <li class="px-0 system">The migration to an online system will be a welcome cost reduction to the unemployed, with regards to the cost of printing documents to apply to various vacancies that are all using the Z83 form. </li>
            <li class="px-0 system">Transportation costs to deliver these documents to the relevant offices is also a factor for most poor citizens living in remote areas. </li>
            <li class="px-0 system">The database will also be able to collect accurate data on the level of citizens that are in the unemployment sector. </li>
            <li class="px-0 system">The world continues to use technology to improve the lives of people. </li>
            <li class="px-0 system">Thus, a paperless system for the Public employment of South Africa is long overdue.</li>
            </ul>
          </v-card>
             
        </v-flex>
          </v-layout>
         </v-container>
        </v-card>
      
      </v-expansion-panel-content>
    </v-expansion-panel>
    <br />
     <div class="row" style="margin-left: 2px;">
    <div class="col-md-2">
      <div class="thumbnail">
        <a href="../assets/images/4.jpeg" target="_blank">
          <img src="../assets/images/4.jpeg" alt="Lights" style="width:100%">
        </a>
      </div>
    </div>
    <div class="col-md-2">
      <div class="thumbnail">
        <a href="../assets/images/construction-work.jpg" target="_blank">
          <img src="../assets/images/construction-work.jpg" alt="Nature" style="width:100%">
        </a>
      </div>
    </div>
    <div class="col-md-2">
      <div class="thumbnail">
        <a href="../assets/images/work.jpeg" target="_blank">
          <img src="../assets/images/work.jpeg" alt="Fjords" style="width:100%">
        </a>
      </div>
    </div>
    <div class="col-md-2">
      <div class="thumbnail">
        <a href="../assets/images/photo.jpeg" target="_blank">
          <img src="../assets/images/photo.jpeg" alt="Fjords" style="width:100%">
        </a>
      </div>
    </div>
    <div class="col-md-2">
      <div class="thumbnail">
        <a href="../assets/images/hapi.jpg" target="_blank">
          <img src="../assets/images/hapi.jpg" alt="Fjords" style="width:100%">
        </a>
      </div>
    </div>
    <div class="col-md-2">
      <div class="thumbnail">
        <a href="../assets/images/5.jpeg" target="_blank">
          <img src="../assets/images/5.jpeg" alt="Fjords" style="width:100%">
        </a>
      </div>
    </div>
  </div>

  </div>
  <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import SignIn from './user/SignIn.vue'


export default {
  name: "Home",
  components:{
    Header, Footer, SignIn
  },
    data () {
    return {
      interval: {},
      value: 0
    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  mounted () {
    this.interval = setInterval(() => {
      if (this.value === 1278) {
        return (this.value = 1278)
      }
      this.value += 1
    }, 10)
  } 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@-webkit-keyframes typing { from { width: 0; } }
@-webkit-keyframes blink-caret { 50% { border-color: transparent; } }

.test { 
    font: bold 300% Consolas, Monaco, monospace;
    border-right: .1em solid black;
    white-space: nowrap;
    overflow: hidden;
    -webkit-animation: typing 2s steps(21, end),
               blink-caret .5s step-end infinite alternate;
}

.row {
  width: 100% !important;
}
.fix{
  text-align: center;
  float: none !important;
}

.enlarge{
  width: 100%;
  height: 500px;
}

.paperless{
  background-color:gold;
   margin-left: 300px;
   margin-right: 300px; 
   font-weight:bold;
   font-family: Arial, Helvetica, sans-serif;
}
.system{
   font: bold  Consolas, Monaco, monospace;
  font-size: 24px;
  animation: ease-out;
}
.smart {
  padding: 10px;
  box-shadow: 5px 10px 3px;
  text-align: center;
  height: 400px;
  width: 100%;
  color: green;
}
.vcontainer {
  position: relative;
  width: 100%;
}

.vcontainer video {
  width: 100%;
  height: auto;
}

.btn {
  position: relative;
  float: right;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #555;
  color: black;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 24px;
  margin: -30px 15px 0px 0px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
}

.vcontainer .btn:hover {
  background-color: lightseagreen;
}
.mov{
  margin-left: 15px;
}
</style>
