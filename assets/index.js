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
text.autofocus =true;
//text.readOnly =true;
div.prepend(text);

let h1= document.createElement('h1');
h1.className = "h1";
h1.innerHTML ="RSS VIRTUAL KEYBOARD"
div.prepend(h1)

let h2= document.createElement('h2');
h2.className = "h2";
h2.innerHTML ='Клавиатура создана в операционной системе Windows. Для переключения языка комбинация: левыe ctrl + shift'
div.append(h2)






function init (){
    let out ='';
    let lowerCase = function(a){
       return String.fromCharCode(a).toLowerCase();
    }
    for(let i=0;i<firstRow.length;i++){
        out+='<div class ="k-key">'+lowerCase(firstRow[i])+'</div>';
    }out+='<div class ="k-key backspace">Backspace</div>';
    document.querySelector('#firstRowKeys').innerHTML=out;

        let out2 ='';
        out2+='<div class ="k-key tab">Tab</div>';
    for(let i=0;i<secondRow.length;i++){
        
        out2+='<div class ="k-key">'+lowerCase(secondRow[i])+'</div>';
    }//out2+='<div class ="k-key del">Del</div>';
    document.querySelector('#secondRowKeys').innerHTML=out2;

        let out3 ='';
        out3+='<div class ="k-key capsLock">CapsLock</div>';
    for(let i=0;i<thirdRow.length;i++){
        out3+='<div class ="k-key">'+String.fromCharCode(thirdRow[i])+'</div>';
    }out3+='<div class ="k-key enter">Enter</div>';
    document.querySelector('#thirdRowKeys').innerHTML=out3;
        let out4 ='';
        out4+='<div class ="k-key shift">Shift</div>';
    for(let i=0;i<fourRow.length;i++){
        out4+='<div class ="k-key">'+String.fromCharCode(fourRow[i])+'</div>';
    }  
        out4+='<div class ="k-key arrow">↑</div>';
        out4+='<div class ="k-key shift">Shift</div>';
    document.querySelector('#fourRowKeys').innerHTML=out4;
        let out5 ='';
        out5+='<div class ="k-key ctrl">Ctrl</div>';
        out5+='<div class ="k-key win">Win</div>';
        out5+='<div class ="k-key alt">Alt</div>'
    for(let i=0;i<fiveRow.length;i++){
        out5+='<div class ="k-key space">'+String.fromCharCode(fiveRow[i])+'</div>';
    }
        out5+='<div class ="k-key alt">Alt</div>'
        out5+='<div class ="k-key arrow">←</div>';
        out5+='<div class ="k-key arrow">↓</div>';
        out5+='<div class ="k-key arrow">→</div>';
        out5+='<div class ="k-key ctrl">Ctrl</div>';
       
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
    console.log(bukva)
});




document.onkeydown = function(event){
    event.preventDefault();
    document.querySelectorAll('.k-key').forEach(function(element){ 
            const vstavka = function () {
            document.getElementById('text').value +=element.innerHTML;
            element.classList.add('active');             
}
        switch(bukva){
            case "ArrowUp"  :if(element.innerHTML==='↑')vstavka();break;          
            case"ArrowDown" :if(element.innerHTML==='↓')vstavka();break;   
            case"ArrowLeft" :if(element.innerHTML==='←')vstavka();break;
            case"ArrowRight":if(element.innerHTML==='→')vstavka();break;       
        }
        if(element.innerHTML===bukva&&element.innerHTML.length<2){
          vstavka();     
        }

        if(element.innerHTML===bukva&&element.innerHTML==='Backspace'){
            element.classList.add('active');  
            document.getElementById('text').value = document.getElementById('text').value.slice(0,-1);
        }
        if(element.innerHTML===bukva&&element.innerHTML==='Enter'){
            element.classList.add('active');  
            document.getElementById('text').value += '\n';
        }
        if(element.innerHTML===bukva&&element.innerHTML==='Shift'){
            element.classList.add('active');   
            //смена верхнего ряда и toUpperCase TODO
        }
        if(element.innerHTML===bukva&&element.innerHTML==='Alt'){
            element.classList.add('active');   
        }
        if(bukva==='Control'&&element.innerHTML==='Ctrl'){
            element.classList.add('active');   
            //смена верхнего ряда и toUpperCase TODO
        }
        if(bukva==='Tab'&&element.innerHTML==='Tab'){
            event.preventDefault();
            element.classList.add('active');  
            text.autofocus =true;
            document.getElementById('text').value += '    '; 
            //смена верхнего ряда и toUpperCase TODO
        }
       
        
    }) 
}


document.onkeyup = function(event){
    document.querySelectorAll('.k-key').forEach(function(element){  
        window.setTimeout(()=>element.classList.remove('active'), 200);
    })
}

document.onclick = function(event){
    console.log(event.target);
    if(event.target.className==='k-key' || event.target.className==='k-key arrow'){
        document.getElementById('text').value +=event.path[0].innerHTML;}
        if(event.target.className==='k-key backspace'){
            document.getElementById('text').value = document.getElementById('text').value.slice(0,-1);}
           if(event.target.className==='k-key enter'){
            document.getElementById('text').value += '\n';}
                if(event.target.className==='k-key shift'){
                    }
                    if(event.target.className==='k-key ctrl'){
                        }
                        if(event.target.className==='k-key alt'){
                           }
                            if(event.target.className==='k-key tab'){
                                document.getElementById('text').value += '    ';}
}
   
    





