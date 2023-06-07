function romanize( ) {
    let resultado = document.querySelector('#resultado')       
    let string = document.querySelector('#valor').value;
     

    
    resultado.classList.remove('erro')
    string = string.toUpperCase();
    string=Array(string)



    teste_numero = string.every(n => {
  return Number(string)===parseInt(string) && Number(string)>0 && Number(string)<3999
});

if(teste_numero===true){

var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
  for ( i in lookup ) {
    while ( string >= lookup[i]) {
      roman += i;
      string -= lookup[i];
    }
  }
  
   resultado.textContent=roman

}else{
 
let valido_romano = string.every(string => {
  return /^[IVXLCDM]+$/.test(string) && !/(.)\1{3}/.test(string);
});


if(valido_romano===true){



let romanos = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
let numero_arabic = 0;   

string=String(string).split('')  


    for (let i in string) {
  let atual = romanos[string[i]];
  let proximo = romanos[string[+i + 1]];


  console.log(`${string[i]} corresponde ao valor ${romanos[string[i]]}`);
  

  if ((atual === 1 && (proximo === 5 || proximo !== 10 || proximo===1000 ||proximo===500)) ||
        (atual===10 &&(proximo ==50 || proximo==100))  ||
        (!atual === 100 && (proximo == 500 || proximo === 1000))||
        (atual===100 &&(proximo ===500 && proximo==500))
        ) {
      valido = false;
    } 
  if (proximo && atual < proximo) {
   numero_arabic -=atual
  } else {
    numero_arabic += atual;
  }

}
 
resultado.textContent=numero_arabic


}else{
    resultado.classList.add("erro");
    resultado.textContent='inválido'
} 
 
}

}
