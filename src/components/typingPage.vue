<template>
  <div class="hello">
    <mainComponent
    v-on:scoreCorrect="increaseScore()"
    v-on:gameEnded="endgame()"/>
  <div class="content-box">
    <div class="text-style" v-if="!this.completed">Score: {{score}}</div>
    <button class="text-style" @click="re_render" v-else>
        <div class="text-style"> Your Speed is {{score}} WPM</div> 
        Reload page to play again!
    </button>
    
  </div>

  </div>
</template>

<script>
import mainComponent from './mainComponent.vue';

export default {
  name: 'typingPage',
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
      this.completed = true
    },
    re_render(){
      console.log('rerending this');
      
      //mainComponent.$forceUpdate()
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
    background: #243441;
    box-shadow:  30px 30px 60px #18232c, 
             -30px -30px 60px #304556;
    /*background:linear-gradient(to left , lightgreen, lightseagreen);*/
    max-width: 1000px;
}
 .text-style:hover{
  /* border-radius: 20px;
  background: #243441;
  box-shadow: inset 30px 30px 60px #18232c, 
            inset -30px -30px 60px #304556; */
            cursor: pointer;
} 
.text-style{
    margin: auto;
    text-align: center;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    background: #243441;
    font-size: 70px;
    border: none;
    width: 100%;
    text-decoration: none;
    color: white;
}
</style>
