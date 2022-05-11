alert("Пожалуйста работа не доделана , проверьте завтра ((")
let firstRow = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61];
let secondRow =  [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92];
let thirdRow = [97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39];
let fourRow = [122, 120, 99, 118, 98, 110, 109, 44, 46, 47];
let fiveRow = [32];



let div = document.createElement('div');
div.className = "container";
document.body.prepend(div);

let keys = document.createElement('div');
keys.className = "keyboard";
keys.id="keyboard";
div.prepend(keys);

let firstRowKeys = document.createElement('div');
firstRowKeys.className="firstRowKeys";
firstRowKeys.id="firstRowKeys"
keys.append(firstRowKeys);

let secondRowKeys = document.createElement('div');
secondRowKeys.className="secondRowKeys";
secondRowKeys.id="secondRowKeys"
keys.append(secondRowKeys);

let thirdRowKeys = document.createElement('div');
thirdRowKeys.className="thirdRowKeys";
thirdRowKeys.id="thirdRowKeys"
keys.append(thirdRowKeys);

let fourRowKeys = document.createElement('div');
fourRowKeys.className="fourRowKeys";
fourRowKeys.id="fourRowKeys"
keys.append(fourRowKeys);

let fiveRowKeys = document.createElement('div');
fiveRowKeys.className="fiveRowKeys";
fiveRowKeys.id="fiveRowKeys"
keys.append(fiveRowKeys);

let text = document.createElement('textarea');
text.className = "text";
text.id ="text";
div.prepend(text);






function init (){
    let out ='';
    for(let i=0;i<firstRow.length;i++){
        out+='<div class ="k-key">'+String.fromCharCode(firstRow[i])+'</div>';
    }out+='<div class ="k-key backspace">Backspace</div>';
    document.querySelector('#firstRowKeys').innerHTML=out;

        let out2 ='';
        out2+='<div class ="k-key tab">Tab</div>';
    for(let i=0;i<secondRow.length;i++){
        
        out2+='<div class ="k-key">'+String.fromCharCode(secondRow[i])+'</div>';
    }out2+='<div class ="k-key del">Del</div>';
    document.querySelector('#secondRowKeys').innerHTML=out2;

        let out3 ='';
        out3+='<div class ="k-key capsLock">CapsLock</div>';
    for(let i=0;i<thirdRow.length;i++){
        out3+='<div class ="k-key">'+String.fromCharCode(thirdRow[i])+'</div>';
    }out3+='<div class ="k-key enter">Enter</div>';
    document.querySelector('#thirdRowKeys').innerHTML=out3;
        let out4 ='';
        out4+='<div class ="k-key leftShift">Shift</div>';
    for(let i=0;i<fourRow.length;i++){
        out4+='<div class ="k-key">'+String.fromCharCode(fourRow[i])+'</div>';
    }  
        out4+='<div class ="k-key arrowUp">↑</div>';
        out4+='<div class ="k-key shiftRight">Shift</div>';
    document.querySelector('#fourRowKeys').innerHTML=out4;
        let out5 ='';
        out5+='<div class ="k-key leftCtrl">Ctrl</div>';
        out5+='<div class ="k-key win">Win</div>';
        out5+='<div class ="k-key leftAlt">Alt</div>'
    for(let i=0;i<fiveRow.length;i++){
        out5+='<div class ="k-key space">'+String.fromCharCode(fiveRow[i])+'</div>';
    }
        out5+='<div class ="k-key rightAlt">Alt</div>'
        out5+='<div class ="k-key arrowLeft">←</div>';
        out5+='<div class ="k-key arrowDown">↓</div>';
        out5+='<div class ="k-key arrowRight">→</div>';
        out5+='<div class ="k-key rightCtrl">Ctrl</div>';
       
    document.querySelector('#fiveRowKeys').innerHTML=out5;
}   

init();


var body = document.querySelector("body");

/*document.onkeydown = function(event){
    console.log(event.code);
    console.log(event.keyCode);
    document.querySelectorAll('.k-key').forEach(function(element){
        element.classList.add('active');
    })
}
*/
let bukva = '';
body.addEventListener("keydown", event => {
    bukva = event.key;
});

document.onkeyup = function(event){
    document.querySelectorAll('.k-key').forEach(function(element){
        if(element.innerHTML===bukva){
            console.log(bukva);
            element.classList.add('active');  
            window.setTimeout(()=>element.classList.remove('active'), 200); 
            document.getElementById('text').value +=element.innerHTML;
        }
        if(bukva==='Backspace'){
            document.getElementById('text').value = document.getElementById('text').value.substring(document.getElementById('text').value.length, 1);
        }
    }) 
}





