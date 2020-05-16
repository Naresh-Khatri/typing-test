<template>
  <div class="hello">
    <mainComponent
    v-on:scoreCorrect="increaseScore()"
    v-on:gameEnded="endgame()"/>
  <div class="content-box">
    <div class="text-style" v-if="!this.completed">Score: {{score}}</div>
    <div class="text-style" v-else>Your Speed is {{score}} WPM <div>Reload page to play again!</div></div>
    
  </div>

  </div>
</template>

<script>
import mainComponent from './mainComponent.vue';

export default {
  name: 'homePage',
  components: { mainComponent },
  props: {
  },
  data() {
    return{
      score:0,
      completed:false
    }
  },
  created(){
    this.score=0
  },
  methods: {
    increaseScore(){
      if(!this.completed)
        this.score++;
    },
    endgame(){
      console.log("the game has ended")
      this.completed = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-box {
    display: block;
    margin: 0 auto;
    padding: 30px;
    border-radius: 20px;
    background-color: #581845;
    box-shadow: 10px 10px 10px black;
    /*background:linear-gradient(to left , lightgreen, lightseagreen);*/
    max-width: 1000px;
}
.text-style{
   text-align: center;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 70px;
    color: white;
}
</style>
