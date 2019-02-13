const crypto = require('crypto');

function createHash(str){
    return crypto.createHash("sha256").update(str.toLowerCase().replace(/\s/g, "")).digest('base64')
}

function capitalise(str){
    let split = str.split("");
    split[0] = split[0].toUpperCase();
    for(let i = 0; i < split.length - 1; i++){
        if(split[i] === " "){
            split[i+1] = split[i+1].toUpperCase();
        }
    }
}

function submit(){
    let words = document.getElementById("textarea").value.replace(/\n/g, "").replace(/([0-9][0-9]*)(. )/g, 'ę').split('ę')
    
    console.log(words)
    for(word of words){
        if(word !== ""){
            let entry = glossary[createHash(word)];
            if(entry === undefined){
                document.getElementById("content").innerHTML += `<p>${word}: <a href="https://google.com/search?q=${word.replace(/ /g, "%20")}">Not in dictionary</a></p><br>`
                
            }else{
                document.getElementById("content").innerHTML += `<p>${entry.term}: ${entry.definition}</p><br>`
            }
        }
    }
}

document.getElementById("submit").addEventListener('click', function () { 
    submit();
 })