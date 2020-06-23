<template>
    <div class="bodyy">
        <router-link to="/" class='back-link'>←home</router-link>
        <!-- <h6>*Type the word then hit Space*</h6> -->
        <div class="countdown-box" id="2">
            <div class="countdown-text">Time: {{seconds}}</div>
        </div>
        <div class="input-box">
            <input class="input-field" v-model="userword" ref='search' id="1" v-on:keydown="countdownStarted=true" v-on:keydown.space="detectspace" v-on:keydown.enter="reloadComponent">
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
            words:['America', 'Indian', 'a', 'able', 'about', 'above', 'across', 'add', 'after', 'again', 'air', 'all', 'almost',
                      'along', 'also', 'always', 'am', 'among', 'an', 'and', 'animal', 'another', 'answer', 'any', 'are', 'around', 'as', 'ask', 'at', 
                      'away', 'back', 'be', 'because', 'been', 'before', 'began', 'begin', 'being', 'below', 'between', 'big', 'book', 'both', 'boy', 
                      'but', 'by', 'call', 'came', 'can', 'cannot', 'car', 'carry', 'change', 'children', 'city', 'close', 'come', 'could', 'country',
                      'cut', 'day', 'dear', 'did', 'different', 'do', 'does', "don't", 'down', 'each', 'earth', 'eat', 'either', 'else', 'end', 'enough',
                      'even', 'ever', 'every', 'example', 'eye', 'face', 'family', 'far', 'father', 'feet', 'few', 'find', 'first', 'follow', 'food',
                      'for', 'form', 'found', 'four', 'from', 'get', 'girl', 'give', 'go', 'good', 'got', 'great', 'group', 'grow', 'had', 'hand', 'hard',
                      'has', 'have', 'he', 'head', 'hear', 'help', 'her', 'here', 'hers', 'high', 'him', 'his', 'home', 'house', 'how', 'however', 'I',
                      'idea', 'if', 'important', 'in', 'into', 'is', 'it', "it's", 'its', 'just', 'keep', 'kind', 'know', 'land', 'large', 'last', 
                      'later', 'learn', 'least', 'leave', 'left', 'let', 'letter', 'life', 'light', 'like', 'likely', 'line', 'list', 'little', 'live', 
                      'long', 'look', 'made', 'make', 'man', 'many', 'may', 'me', 'mean', 'men', 'might', 'mile', 'miss', 'more', 'most', 'mother',
                      'mountain', 'move', 'much', 'must', 'my', 'name', 'near', 'need', 'neither', 'never', 'new', 'next', 'night', 'no', 'nor', 'not', 
                      'now', 'number', 'of', 'off', 'often', 'oil', 'old', 'on', 'once', 'one', 'only', 'open', 'or', 'other', 'our', 'out', 'over', 'own',
                      'page', 'paper', 'part', 'people', 'picture', 'place', 'plant', 'play', 'point', 'put', 'question', 'quick', 'quickly', 'quite',
                      'rather', 'read', 'really', 'right', 'river', 'run', 'said', 'same', 'saw', 'say', 'says', 'school', 'sea', 'second', 'see', 
                      'seem', 'sentence', 'set', 'she', 'should', 'show', 'side', 'since', 'small', 'so', 'some', 'something', 'sometimes', 'song', 
                      'soon', 'sound', 'spell', 'start', 'state', 'still', 'stop', 'story', 'study', 'such', 'take', 'talk', 'tell', 'than', 'that',
                      'the', 'their', 'them', 'then', 'there', 'these', 'they', 'thing', 'think', 'this', 'those', 'thought', 'three', 'through',
                      'time', 'to', 'together', 'too', 'took', 'tree', 'try', 'turn', 'two', 'under', 'until', 'up', 'us', 'use', 
                      'very', 'walk', 'want', 'wants', 'was', 'watch', 'water', 'way', 'we', 'well', 'went', 'were', 'what', 'when', 'where', 
                      'which', 'while', 'white', 'who', 'whom', 'why', 'will', 'with', 'without', 'word', 'work', 'world', 'would', 'write', 
                      'year', 'yet', 'you', 'young', 'your']
,

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
        //this.document.getElementById('1').focus();
    },
    mounted(){
       this.$refs.search.focus();
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
                document.getElementById("1").style.background ="#243441";
                this.userword =''
            }
            else{
                document.getElementById("1").style.background="#bd0000";
            }
            
            
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
            }
            if(this.seconds<20 && this.seconds>10)
                document.getElementById('2').style.background = '#bd6800';
            if(this.seconds<=10)
            {
                document.getElementById('2').style.background = '#bd0000';
                document.getElementsByClassName('input-field').disabled = true;

            }
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
    background: #243441;
   
}
.content-box {
    display: block;
    margin: 0 auto;
    padding: 30px;
    border-radius: 20px;
    background-color: #900c3f;
    max-width: 1000px;
    background: #243441;
    
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
    background: #243441;
    box-shadow:  30px 30px 60px #18232c, 
             -30px -30px 60px #304556;
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
    border: none;
    border-radius: 20px;
    display: block;
    top: 10px;
    margin: auto;
    text-align: center;
    font-size: 50px;
    border-radius: 20px;
    padding: 10px;
    color: white;
    background: #243441;
    border: .5px solid grey;
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
    background: #243441;
    box-shadow:  30px 30px 60px #18232c, 
             -30px -30px 60px #304556;
}
.countdown-text{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 40px;
    color: white
    
}
h6{
    position: absolute;
    top: -50px;
    color: white;
    font-size: 20px;
}
.back-link {
    position: absolute;
    margin-left: -250px;
    font-size: 50px;
    padding: 30px;
    width: 18%;
    color: white;
    border-radius: 30px;
    text-decoration: none;
    border: none;
    background: #243441;
    box-shadow:  30px 30px 60px #18232c, 
             -30px -30px 60px #304556;
        transition: all 0.3s ease 0s;

}
.back-link:hover {
        background: #243441;
        box-shadow: 0 5px 15px #18232c;
        transition: all 0.3s ease 0s;

}
</style>