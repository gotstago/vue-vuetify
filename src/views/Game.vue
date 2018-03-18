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
        <v-card color="green darken-4" class="mb-5" height="320px">
          <player position="west" type="bot"></player>
          <player position="north" type="bot"></player>
          <player position="east" type="bot"></player>
          <player position="south" type="human"></player>

        </v-card>
        <v-btn color="primary" @click.native="e1 = 2">Start</v-btn>
        <v-btn flat>Cancel</v-btn>
        <v-btn flat @click="emitGlobalClickEvent()">Plus</v-btn>
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
// Import the EventBus we just created.
import { EventBus } from "@/event-bus.js";
import { mapActions } from "vuex";
import Player from "@/Player.vue";

export default {
  data() {
    return {
      e1: 1
    };
  },

  methods: {
    ...mapActions(["newGame"]),
    emitGlobalClickEvent() {
      //this.clickCount++;
      // Send the event on a channel (i-got-clicked) with a payload (the click count.)
      EventBus.$emit("i-got-clicked", this.e1);
    },
    // processAttack(attackName) {
    //   // Perform the player attack
    //   new Promise((resolve, reject) => {
    //     this.$refs.player.attack(attackName, resolve, reject);
    //   })
    //     .then(() => {
    //       // Let the opponent attack
    //       return new Promise((resolve, reject) => {
    //         // Choose a random attack and execute it
    //         this.$refs.opponent.attack(
    //           this.$refs.opponent.pickRandomAttack(),
    //           resolve,
    //           reject
    //         );
    //       });
    //     })
    //     .then(() => {
    //       // Finally reset the battle text
    //       this.battleText = "What will " + this.pokemon.player.name + " do?";
    //     })
    //     .catch(pokemonFainted => {
    //       // reset battle on game over
    //       this.battleText = `${pokemonFainted} fainted! Play again?`;
    //       this.menu = "end";
    //     });
    // }
  },

  created() {
    this.newGame();
    // this.reset();
  },
  mounted() {
    EventBus.$on("west-bid", bid => {
      //console.log(`bid from west is ${bid}`);
    });
  },
  components: { Player }
};
</script>