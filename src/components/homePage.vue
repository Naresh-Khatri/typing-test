<template>
  <div>
    <div class="title">
     This is a typing practice game
    </div>
    <router-link to="/typingPage" class='start-button'>Start Game</router-link>
  </div>
 
</template>

<script>
 export default {
   name: 'homePage',
 }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
    position: relative;
    margin: auto;
    font-size: 90px;
    font-family:'Courier New', Courier, monospace;
    font-weight: bold;
    text-align: center;
    padding: 50px;
    margin-top: 100px;
    width: 80%;
    color: white;
    border-radius: 30px;
    background: #243441;
    box-shadow:  30px 30px 60px #18232c, 
             -30px -30px 60px #304556;
}
/* .start-button {
  position: center;
  display: block;
  text-decoration: none;
  color: white;
} */
.start-button {
    position: relative;   
    margin: auto;
    top: 100px;
    display: block;
    text-align: center;
    font-size: 50px;
    padding: 30px;
    width: 18%;
    color: white;
    border-radius: 30px;
    text-decoration: none;
    box-shadow:  30px 30px 60px #18232c, 
             -30px -30px 60px #304556;
    transition: 0.3s;

}
.start-button:hover {
        background: #243441;
        box-shadow: 0 5px 15px #18232c;
}
.start-button:active {
  transition: .3s;
  color: #18232c;
  opacity: 0;
  transition: .3s;
  opacity: 100%;
}
.inside-button {
  text-decoration: none;
  background: none;
  border: none;
  font-size: 60px;
  color: white;
}

.text-style{
   text-align: center;
    font-family:cursive;
    font-size: 70px;
    color: white;
}
</style>
