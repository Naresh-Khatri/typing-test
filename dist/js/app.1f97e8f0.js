(function(e){function t(t){for(var o,s,i=t[0],c=t[1],l=t[2],u=0,h=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&h.push(r[s][0]),r[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(h.length)h.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/typing-test/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"44d4":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],s={name:"App"},i=s,c=(n("034f"),n("2877")),l=Object(c["a"])(i,r,a,!1,null,null,null),d=l.exports,u=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"title"},[e._v(" This is a typing practice game ")]),n("router-link",{staticClass:"start-button",attrs:{to:"/typingPage"}},[e._v("Start Game")])],1)},f=[],p={name:"homePage"},m=p,w=(n("7c76"),Object(c["a"])(m,h,f,!1,null,"6e174976",null)),y=w.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("mainComponent",{on:{scoreCorrect:function(t){return e.increaseScore()},gameEnded:function(t){return e.endgame()}}}),n("div",{staticClass:"content-box"},[this.completed?n("button",{staticClass:"text-style",on:{click:e.re_render}},[n("div",{staticClass:"text-style"},[e._v(" Your Speed is "+e._s(e.score)+" WPM")]),e._v(" Reload page to play again! ")]):n("div",{staticClass:"text-style"},[e._v("Score: "+e._s(e.score))])])],1)},v=[],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bodyy"},[n("router-link",{staticClass:"back-link",attrs:{to:"/"}},[e._v("←home")]),n("div",{staticClass:"countdown-box",attrs:{id:"2"}},[n("div",{staticClass:"countdown-text"},[e._v("Time: "+e._s(e.seconds))])]),n("div",{staticClass:"input-box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.userword,expression:"userword"}],ref:"search",staticClass:"input-field",attrs:{id:"1"},domProps:{value:e.userword},on:{keydown:[function(t){e.countdownStarted=!0},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?null:e.detectspace(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.reloadComponent(t)}],input:function(t){t.target.composing||(e.userword=t.target.value)}}})]),n("div",{staticClass:"content-box"},[n("div",{staticClass:"text-style"},e._l(e.randwordlist,(function(t,o){return n("div",{key:o,staticClass:"words-style"},[0==o?n("div",{staticClass:"top-word"},[e._v(" "+e._s(t))]):n("div",[e._v(" "+e._s(t)+" ")])])})),0)])],1)},k=[],_=(n("caad"),n("ac1f"),n("2532"),n("841c"),{props:["content","index"],data:function(){return{words:["America","Indian","a","able","about","above","across","add","after","again","air","all","almost","along","also","always","am","among","an","and","animal","another","answer","any","are","around","as","ask","at","away","back","be","because","been","before","began","begin","being","below","between","big","book","both","boy","but","by","call","came","can","cannot","car","carry","change","children","city","close","come","could","country","cut","day","dear","did","different","do","does","don't","down","each","earth","eat","either","else","end","enough","even","ever","every","example","eye","face","family","far","father","feet","few","find","first","follow","food","for","form","found","four","from","get","girl","give","go","good","got","great","group","grow","had","hand","hard","has","have","he","head","hear","help","her","here","hers","high","him","his","home","house","how","however","I","idea","if","important","in","into","is","it","it's","its","just","keep","kind","know","land","large","last","later","learn","least","leave","left","let","letter","life","light","like","likely","line","list","little","live","long","look","made","make","man","many","may","me","mean","men","might","mile","miss","more","most","mother","mountain","move","much","must","my","name","near","need","neither","never","new","next","night","no","nor","not","now","number","of","off","often","oil","old","on","once","one","only","open","or","other","our","out","over","own","page","paper","part","people","picture","place","plant","play","point","put","question","quick","quickly","quite","rather","read","really","right","river","run","said","same","saw","say","says","school","sea","second","see","seem","sentence","set","she","should","show","side","since","small","so","some","something","sometimes","song","soon","sound","spell","start","state","still","stop","story","study","such","take","talk","tell","than","that","the","their","them","then","there","these","they","thing","think","this","those","thought","three","through","time","to","together","too","took","tree","try","turn","two","under","until","up","us","use","very","walk","want","wants","was","watch","water","way","we","well","went","were","what","when","where","which","while","white","who","whom","why","will","with","without","word","work","world","would","write","year","yet","you","young","your"],userword:"",randword:"okay",i:0,seconds:60,countdownStarted:!1,randwordlist:[]}},created:function(){this.generateRandWordList(),this.SetIntervaal()},mounted:function(){this.$refs.search.focus()},methods:{generateRandWordList:function(){for(this.i=0;this.i<10;this.i++)this.randwordlist[this.i]=this.words[Math.floor(300*Math.random())]},genrandword:function(){this.randword=this.words[Math.floor(300*Math.random())]},pushAWordAtLast:function(){this.randwordlist.push(this.words[Math.floor(300*Math.random())])},detectspace:function(){this.userword.includes(this.randwordlist[0])?(this.pushAWordAtLast(),this.randwordlist.shift(),this.scoreCorrect(),document.getElementById("1").style.background="#243441",this.userword=""):document.getElementById("1").style.background="#bd0000",this.genrandword()},scoreCorrect:function(){this.$emit("scoreCorrect")},stopWatch:function(){0!==this.seconds&&this.countdownStarted&&this.seconds--,0==this.seconds&&this.$emit("gameEnded"),this.seconds<20&&this.seconds>10&&(document.getElementById("2").style.background="#bd6800"),this.seconds<=10&&(document.getElementById("2").style.background="#bd0000",document.getElementsByClassName("input-field").disabled=!0)},SetIntervaal:function(){setInterval(this.stopWatch,1e3)}}}),C=_,x=(n("68f5"),Object(c["a"])(C,b,k,!1,null,"4aa198e3",null)),O=x.exports,S={name:"typingPage",components:{mainComponent:O},props:{},data:function(){return{score:0,completed:!1}},created:function(){this.score=0},methods:{increaseScore:function(){this.completed||this.score++},endgame:function(){this.completed=!0},re_render:function(){console.log("rerending this")}}},P=S,j=(n("c8b0"),Object(c["a"])(P,g,v,!1,null,"002d2a84",null)),E=j.exports;o["a"].use(u["a"]);var M=new u["a"]({routes:[{path:"/",name:"homePage",component:y},{path:"/typingPage",name:"typingPage",component:E}]});o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(d)},router:M}).$mount("#app")},"67fc":function(e,t,n){},"68f5":function(e,t,n){"use strict";var o=n("d89d"),r=n.n(o);r.a},"7c76":function(e,t,n){"use strict";var o=n("44d4"),r=n.n(o);r.a},"85ec":function(e,t,n){},c8b0:function(e,t,n){"use strict";var o=n("67fc"),r=n.n(o);r.a},d89d:function(e,t,n){}});
//# sourceMappingURL=app.1f97e8f0.js.map