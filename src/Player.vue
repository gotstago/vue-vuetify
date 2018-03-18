<script>
import { EventBus } from './event-bus';
export default {
  props: ['position', 'type'],
  data(){
      return {
          name:'player'
      }
  },
  mounted(){
    //   EventBus
    // console.log(`in mounted for ${this.type} player at ${this.position}`)
    const bid = `${this.position}-bid`
    // console.log(`about to bid ${bid}`)
    EventBus.$emit( bid.toString(), 'hearts')
  }
}
</script>
<template>
  <div><slot></slot></div>
</template>
