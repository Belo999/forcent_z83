<template>
<div>
    <v-container>
        <v-layout row>
            <v-flex xs 12 sm6 offset-sm3>
                <v-card>
                    <v-card-text>
                        <v-container>
                            <v-form>
                                <v-text-field v-model="email" label="E-mail" :error-messages="errors.collect('email')" v-validate="'required|email'"
                                  data-vv-name="email" required></v-text-field>
                                    <v-text-field
            name="password"
            label="Enter your password"
            hint="At least 8 characters"
            v-model="password"
            min="8"
            :append-icon="e1 ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (e1 = !e1)"
            :type="e1 ? 'password' : 'text'"
            :error-messages="errors.collect('password')"
            v-validate="'required|min:8|max:25'"
            counter required
          ></v-text-field>

                                <v-flex xs sm6>
                                <v-btn color="primary" @click="submit">Log in</v-btn>
                                </v-flex>
                                <v-layout wrap row>
                                <v-flex xs6 sm2 offset-6>                                
                                <a class="aa">Sign Up</a>
                                </v-flex>
                                <v-flex color="primary" xs6 sm4 offset-0>
                                <a class="aa">Forget password</a>                                
                                </v-flex>
                                </v-layout>
                            </v-form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</div>  
</template>

<script>
    
export default {
  name: 'SignIn',
  props: {
  },
  $_veeValidate: {
    validator: 'new'
  },
   data () {
    return {
      e1: false,
      password: '',
    }
  }
}
</script>

<style>

.aa {
    color: darkblue;

}

</style>
