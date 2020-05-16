<template>
    <div class="bodyy">
        <div class="countdown-box" id="2">
            <div class="countdown-text">Time: {{seconds}}</div>
        </div>
        <div class="input-box">
            <input class="input-field" v-model="userword" id="1" v-on:keydown="countdownStarted=true" v-on:keydown.space="detectspace">
        </div>

        <div class="content-box">
            <div class="text-style" >
                <div class="words-style" v-for="(word,index) in randwordlist" :key="index">
                    <div v-if="index==0" class="top-word">  {{word}}</div>
                    <div v-else>  {{word}}                         </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    props: ['content','index'],
    data() {
        return {
            words: ['about', 'above', 'add', 'after', 'again', 'air', 'all', 'almost', 'along', 'also', 'always', 'America', 'an', 'and', 'animal',
             'another', 'answer', 'any', 'are', 'around', 'as', 'ask', 'at', 'away', 'back', 'be', 'because', 'been', 'before', 'began', 'begin', 
             'being', 'below', 'between', 'big', 'book', 'both', 'boy', 'but', 'by', 'call', 'came', 'can', 'car', 'carry', 'change', 'children', 
             'city', 'close', 'come', 'could', 'country', 'cut', 'day', 'did', 'different', 'do', 'does', "don't", 'down', 'each', 'earth', 'eat', 
             'end', 'enough', 'even', 'every', 'example', 'eye', 'face', 'family', 'far', 'father', 'feet', 'few', 'find', 'first', 'follow', 'food', 
             'for', 'form', 'found', 'four', 'from', 'get', 'girl', 'give', 'go', 'good', 'got', 'great', 'group', 'grow', 'had', 'hand', 'hard', 'has', 
             'have', 'he', 'head', 'hear', 'help', 'her', 'here', 'high', 'him', 'his', 'home', 'house', 'how', 'idea', 'if', 'important', 'in', 'Indian', 
             'into', 'is', 'it', 'its', "it's", 'just', 'keep', 'kind', 'know', 'land', 'large', 'last', 'later', 'learn', 'leave', 'left', 'let', 
             'letter', 'life', 'light', 'like', 'line', 'list', 'little', 'live', 'long', 'look', 'made', 'make', 'man', 'many', 'may', 'me', 'mean', 
             'men', 'might', 'mile', 'miss', 'more', 'most', 'mother', 'mountain', 'move', 'much', 'must', 'my', 'name', 'near', 'need', 'never', 'new',
             'next', 'night', 'no', 'not', 'now', 'number', 'of', 'off', 'often', 'oil', 'old', 'on', 'once', 'one', 'only', 'open', 'or', 'other', 'our', 
             'out', 'over', 'own', 'page', 'paper', 'part', 'people', 'picture', 'place', 'plant', 'play', 'point', 'put', 'question', 'quick', 'quickly', 
             'quite', 'read', 'really', 'right', 'river', 'run', 'said', 'same', 'saw', 'say', 'school', 'sea', 'second', 'see', 'seem', 'sentence', 'set', 
             'she', 'should', 'show', 'side', 'small', 'so', 'some', 'something', 'sometimes', 'song', 'soon', 'sound', 'spell', 'start', 'state', 'still', 
             'stop', 'story', 'study', 'such', 'take', 'talk', 'tell', 'than', 'that', 'the', 'their', 'them', 'then', 'there', 'these', 'they', 'thing', 
             'think', 'this', 'those', 'thought', 'three', 'through', 'time', 'to', 'together', 'too', 'took', 'tree', 'try', 'turn', 'two', 'under', 'until', 
             'up', 'us', 'use', 'very', 'walk', 'want', 'was', 'watch', 'water', 'way', 'we', 'well', 'went', 'were', 'what', 'when', 'where', 'which', 'while', 
             'white', 'who', 'why', 'will', 'with', 'without', 'word', 'work', 'world', 'would', 'write', 'year', 'you', 'young', 'your'],

            userword: '',
            randword: 'okay',
            i:0,
            seconds:60,
            countdownStarted:false,
            randwordlist: []
        }
    },
    created(){
        // this.genrandword();
        this.generateRandWordList();
        this.SetIntervaal()
},
    methods: {
        generateRandWordList(){
            for(this.i=0;this.i<10;this.i++){
                this.randwordlist[this.i] = this.words[Math.floor((Math.random() * 300))]
            }
        },
        genrandword(){
            this.randword= this.words[Math.floor((Math.random() * 300))]
        },
        pushAWordAtLast(){
            this.randwordlist.push(this.words[Math.floor((Math.random() * 300))])
        },
        detectspace() {

            if(this.userword.includes(this.randwordlist[0]))
            {
                this.pushAWordAtLast()
                this.randwordlist.shift()
                this.scoreCorrect()
                document.getElementById("1").style.background ="#ff5733";
            }
            else{
                document.getElementById("1").style.background="red";
            }
            
            this.userword =''
            this.genrandword();
        }, 
        scoreCorrect(){
            this.$emit('scoreCorrect')
        },
        stopWatch(){
            if(this.seconds!==0 && this.countdownStarted)
                this.seconds--;
            if(this.seconds==0){
                this.$emit('gameEnded')
                console.log("gameover")
            }
            if(this.seconds<20 && this.seconds>10)
                document.getElementById('2').style.background = 'orange'
            if(this.seconds<=10)
            document.getElementById('2').style.background = 'red'
        },
        SetIntervaal(){
            setInterval(this.stopWatch, 1000)
        }
    },

}
</script>

<style scoped>
.bodyy {
    position: relative;
    top: 10px;
    margin: auto;
    background-color: #900c3f;
    border-radius: 20px;
    max-width: 1000px;
}
.content-box {
    display: block;
    margin: 0 auto;
    padding: 30px;
    border-radius: 20px;
    background-color: #900c3f;
    max-width: 1000px;
}
.text-style{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 40px;
    color: white
}
.words-style {
    text-align: center;
}
.top-word {
    color: white;
    background: #ffc300;
    border-radius: 20px;
    box-shadow: 10px 10px 5px black;
    transition: all 0.3s ease 0s;
}
.button-style {
  position: absolute;
  right: 10px;
  top: 5px;
  border-radius: 20px;
  min-width: 60px;
  min-height: 60px;
  background: none;
  background-color:aliceblue ;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}
.button-style:hover {
  background-color: rgba(0, 115, 125, 0.4);
}
.input-field{
    position: relative;
    top: 10px;
    color: aqua;
    background: none;
    border: none;
    border-radius: 20px;
    display: block;
    top: 10px;
    margin: auto;
    text-align: center;
    color:white;
    font-size: 50px;
    border-radius: 20px;
    padding: 10px;
    background-color: #ff5733;
    box-shadow: 10px 10px 10px black;
}
.countdown-box {
    position: relative;
    right: -800px;
    text-align: center;
    border-radius: 20px;
    background: #581845;
    transition: all 1s ease-in-out;
    max-width: 200px;
    max-height: 100px;
    box-shadow: 10px 10px 10px black;
}
.countdown-text{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 40px;
    color: white
    
}
</style>