<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step step="1" :complete="e1 > 1">1</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="2" :complete="e1 > 2">2</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="3" :complete="e1 > 3">3</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="4">4</v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card color="green darken-4" class="mb-5" height="320px"></v-card>
        <v-btn color="primary" @click.native="e1 = 2">Start</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="2">
        <v-card color="green darken-4" class="mb-5" height="320px"></v-card>
        <v-btn color="primary" @click.native="e1 = 3">Bid</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="3">
        <v-card color="green darken-4" class="mb-5" height="320px"></v-card>
        <v-btn color="primary" @click.native="e1 = 4">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="4">
        <v-card color="green darken-4" class="mb-5" height="320px"></v-card>
        <v-btn color="primary" @click.native="e1 = 1">Finished</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
  export default {
    data () {
      return {
        e1: 1
      }
    }
  }
</script>