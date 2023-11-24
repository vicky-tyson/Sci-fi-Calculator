var result = document.querySelector('#result-screen');
var items = document.querySelectorAll('.btn');

for(operator of items){
        
    operator.addEventListener('click', (e) => {
          btntext = e.target.innerText;
          if(btntext === 'X'){
             btntext = '*';
          }
          if(btntext === '÷'){
            btntext = '/';
          }
          if(btntext === '+'){
            btntext = '+'
          }
          if(btntext === '-'){
            btntext = '-'
          }
          if(btntext === '%'){
            btntext = '%'
          }
          result.value += btntext;
    });
}
function sin(){
    result.value = Math.sin(result.value);
}
function cos(){
    result.value = Math.cos(result.value);
}
function tan(){
    result.value = Math.tan(result.value);
}
function pi(){
    result.value = Math.PI
}
function log(){
    result.value = Math.log(result.value);
}
function e(){
    result.value = Math.E;
}
function pow(){
    result.value = Math.pow(result.value);
}
function sqroot(){
    result.value = Math.sqrt(result.value);
}

function factorial(){
    var i, num, f;
    f=1;
    num=result.value;
    for(i=1; i<=num; i++){
        f=f*i;
    }
    i=i-1;
    result.value=f;
}
function backspace(){
     result.value = result.value.substr(0, result.value.length - 1);
}