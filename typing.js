const sentences=["The quick brown fox jumps over the lazy dog.","Sphinx of black quartz, judge my vow."];
const msg=document.getElementById("randomsentence")
const wordstyped=document.getElementById('textarea');
const btn=document.getElementById("button");
let starttime,endtime;
const playgame=()=>{
    let randomNum=Math.floor(Math.random()*sentences.length);
    msg.innerText=sentences[randomNum];
    let date=new Date();
    starttime=date.getTime();
    btn.innerText="Done";
}
const endPlay=()=>{
    let date=new Date();
    endtime=date.getTime();
    let totaltime=((endtime-starttime)/1000);

let userStr=wordstyped.value;
let wordCount=wordCounter(userStr);
let speed=Math.round((wordCount/totaltime)*60);
let finalmsg="You typed total at "+speed+" words per minutes ";
finalmsg+=Comparewords(msg.innerText,userStr);
msg.innerText=finalmsg;
    
}

const Comparewords=(str1,str2)=>{
    let word1=str1.split(" ");
    let word2=str2.split(" ");
    let cnt=0;
    word1.forEach(function(item,index){
        if(item == word2[index]){
            cnt++;
        }
    })


    let errorwords=(word1.length-cnt);
    let msgsent=cnt+"Correct out of "+ word1.length +" words and the total number of errors are" + errorwords +". ";
    return msgsent;

}

const wordCounter=(str)=>{
    let response=str.split(" ").length;
    return response;
}

btn.addEventListener('click',function(){if(this.innerText=='Start'){
    wordstyped.disabled=false;
    playgame();
}
else if(this.innerText=='Done'){
    wordstyped.disabled=true;
    btn.innerText='Start';
    endPlay();
}
})
