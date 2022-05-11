//alert("Пожалуйста работа не доделана , проверьте завтра ((")
let firstRow = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61];
let secondRow = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92];
let thirdRow = [97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39];
let fourRow = [122, 120, 99, 118, 98, 110, 109, 44, 46, 47];
let fiveRow = [32];

let one = [1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61];
let two = [1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 92];
let trhee = [1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101];
let four = [1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46];
let five = [32];

let special = [126, 33, 64, 35, 36, 37, 94, 38, 42, 40, 41, 95, 43];


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
h2.innerHTML ='Клавиатура создана в операционной системе Windows. Для переключения языка комбинация: левыe CTRL + SHIFT'
div.append(h2)


let bukva = '';
let capsOn = false;


function init (){
    let out ='';
    let cases = function(a){
        if(!capsOn){
       return String.fromCharCode(a).toLowerCase();}
       else{return String.fromCharCode(a).toUpperCase();}
    }
    for(let i=0;i<firstRow.length;i++){
        out+='<div class ="k-key">'+cases(firstRow[i])+'</div>';
    }out+='<div class ="k-key backspace">Backspace</div>';
    document.querySelector('#firstRowKeys').innerHTML=out;

        let out2 ='';
        out2+='<div class ="k-key tab">Tab</div>';
    for(let i=0;i<secondRow.length;i++){
        
        out2+='<div class ="k-key">'+cases(secondRow[i])+'</div>';
    }//out2+='<div class ="k-key del">Del</div>';
    document.querySelector('#secondRowKeys').innerHTML=out2;

        let out3 ='';
        out3+='<div class ="k-key capsLock">CapsLock</div>';
    for(let i=0;i<thirdRow.length;i++){
        out3+='<div class ="k-key">'+cases(thirdRow[i])+'</div>';
    }out3+='<div class ="k-key enter">Enter</div>';
    document.querySelector('#thirdRowKeys').innerHTML=out3;
        let out4 ='';
        out4+='<div class ="k-key shift">Shift</div>';
    for(let i=0;i<fourRow.length;i++){
        out4+='<div class ="k-key">'+cases(fourRow[i])+'</div>';
    }  
        out4+='<div class ="k-key arrow">↑</div>';
        out4+='<div class ="k-key shift">Shift</div>';
    document.querySelector('#fourRowKeys').innerHTML=out4;
        let out5 ='';
        out5+='<div class ="k-key ctrl">Ctrl</div>';
        out5+='<div class ="k-key win">Win</div>';
        out5+='<div class ="k-key alt">Alt</div>'
    for(let i=0;i<fiveRow.length;i++){
        out5+='<div class ="k-key space">'+cases(fiveRow[i])+'</div>';
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

body.addEventListener("keydown", event => {
    bukva = event.key;
   // console.log(bukva)
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
        if(element.innerHTML.toLowerCase()===bukva.toLowerCase()&&element.innerHTML.length<2){
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
        if(bukva==='CapsLock'&&element.innerHTML==='CapsLock'){
            if (capsOn === true){capsOn= false}else{capsOn=true}
           init();
            
        }
       
        
    }) 
}


document.onkeyup = function(event){
    document.querySelectorAll('.k-key').forEach(function(element){  
        if(bukva!=='СapsLock'&&element.innerHTML!=='CapsLock'){
        window.setTimeout(()=>element.classList.remove('active'), 200);}
        if(bukva==='CapsLock'&&element.innerHTML==='CapsLock'){
            event.preventDefault();
            if(!capsOn){
            element.classList.remove('active'); }else{element.classList.add('active')}
            text.autofocus = true;
        }
        
    })
}

document.onclick = function(event){
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
                                if(event.target.className==='k-key capsLock'){
                                    if (capsOn === true){capsOn= false}else{capsOn=true}
                                    init();
                                }
}
   






