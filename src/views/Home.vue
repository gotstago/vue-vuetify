<template>
    <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media
          class="white--text"
          height="370px"
          :src="docks"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Top 10 Australian beaches</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div>
            <span class="grey--text">Number 10</span><br>
            <span>Whitehaven Beach</span><br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn class="bid" flat color="orange" :to="{ name: 'game'}">Game</v-btn>
          <v-btn flat color="orange" :to="{ name: 'about'}">About</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { id: 1, name: 'Foo' },
        { id: 2, name: 'Bar' }
      ],
      msg: 'Welcome to Your Vue.js App'
      //docks : () => {require('@/assets/docks.jpg')}
    };
  },
  computed: {
    // a computed getter
    docks: function () {
      // `this` points to the vm instance
      return require('@/assets/docks.jpg')
    }
  },
  methods: {
    dockers() {
      return //require('@/assets/docks.jpg')
    }
  }
};
</script>
