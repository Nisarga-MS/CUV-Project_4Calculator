function display_7(){
    let output = document.querySelector('#outputDisplay');
    if(output.value == 0 && output.value.length == 1){
         return output.value =7;   
    }
    output.value += 7;
}

function display_8(){
    let output = document.querySelector('#outputDisplay');
    if(output.value ==0 && output.value.length ==1){
        return output.value=8;
    }
    output.value +=8;
}

function display_9(){
    let output = document.querySelector('#outputDisplay');
    if(output.value ==0 && output.value.length ==1){
        return output.value=9;
    }
    output.value +=9;
}
// DELETE 
function display_del(){
    let output = document.querySelector('#outputDisplay');
    let newValue = output.value.slice(0,-1);
    output.value = newValue;
}

function display_4(){
    let output = document.querySelector('#outputDisplay');
    if(output.value ==0 && output.value.length ==1){
        return output.value=4;
    }
    output.value +=4;
}

function display_5(){
    let output = document.querySelector('#outputDisplay');
    if(output.value ==0 && output.value.length ==1){
        return output.value=5;
    }
    output.value +=5;
}

function display_6(){
    let output = document.querySelector('#outputDisplay');
    if(output.value ==0 && output.value.length ==1){
        return output.value=6;
    }
    output.value +=6;
}
// PLUS
function display_plus(){
    let output = document.querySelector('#outputDisplay');
    let endValue= output.value[output.value.length-1];

    if( endValue === '-' || endValue === '.' || endValue === '/' || endValue === 'x'){
       let newValue = output.value.slice(0,-1);
        newValue += '+';
        return output.value = newValue;
    }

    if( endValue === '+'){
        return;
    }
    output.value += '+';

}

function display_1(){
    let output = document.querySelector('#outputDisplay');
    if(output.value ==0 && output.value.length ==1){
        return output.value=1;
    }
    output.value +=1;
}

function display_2(){
    let output = document.querySelector('#outputDisplay');
    if(output.value ==0 && output.value.length ==1){
        return output.value=2;
    }
    output.value +=2;
}

function display_3(){
    let output = document.querySelector('#outputDisplay');
    if(output.value ==0 && output.value.length ==1){
        return output.value=3;
    }
    output.value +=3;
}
// MINUS
function display_minus(){
    let output = document.querySelector('#outputDisplay');
    let endValue = output.value[output.value.length -1];

    if( endValue === '+' || endValue ==='.' || endValue ==='/' || endValue ==='x'){
        let newValue =output.value.slice(0,-1);
        newValue += '-';
        return output.value = newValue;
    }

    if(endValue === '-'){
        return;
    }
    output.value += '-'
}

function display_dot(){
    let output = document.querySelector('#outputDisplay');
    if(output.value[output.value.length -1] == '.'){
        return
    }
    output.value +='.';
}

function display_0(){
    let output = document.querySelector('#outputDisplay');
    output.value +=0;
}

// DIVIDE
 function display_divide(){
    let output = document.querySelector('#outputDisplay');
    let endValue= output.value[output.value.length-1];
    
    if(endValue ==='+' || endValue ==='-' || endValue ==='.' || endValue ==='x'){
        let newValue = output.value.slice(0,-1);
        newValue += '/';
        return output.value= newValue;
    }

    if(endValue === '/'){
        return ;
    }
    output.value +='/';
 }
// MULTIPLE
function display_multiple(){
    let output = document.querySelector('#outputDisplay');
    let endValue = output.value[output.value.length-1];

    if( endValue ==='+' || endValue ==='-' || endValue ==='.' || endValue ==='/'){
        let newValue = output.value.slice(0,-1);
        newValue += 'x';
        return output.value = newValue;
    }

    if(endValue ==='x'){
        return
    }
    output.value += 'x'
}
// RESET
function display_reset() {
    let output = document.querySelector('#outputDisplay');
    output.value= 0;   
}

// SOLUTION-> EVALUATE
function display_solution(){
    let expression = document.querySelector('#outputDisplay');
    let string ='';

    for(let i=0; i<expression.value.length;i++){
        if(expression.value[i] === 'x'){
            string +='*';
        }
        else{
            string += expression.value[i];
        }
          
    }
    let result = eval(string)
    expression.value = result;
}



