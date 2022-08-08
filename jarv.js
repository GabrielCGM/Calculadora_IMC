function calcular(){
var alt = document.getElementById('alt').value
var peso = document.getElementById('peso').value
var imc = (peso / (alt*alt)).toFixed(2)


if(imc < 18.5){
    var result =  document.getElementById('resultado').style.color ='red'
    
    document.getElementById('resultado').innerHTML = 'SEU IMC É: ' + imc + '| ABAIXO DO PESO '
}
else if( 18.5 < imc && imc < 25){
    var result =  document.getElementById('resultado').style.color ='green'
    document.getElementById('resultado').innerHTML = 'SEU IMC É: ' + imc + '| PESO IDEAL '
}
else if( 25.5 < imc && imc < 29.9){
    var result =  document.getElementById('resultado').style.color ='yellow'
    document.getElementById('resultado').innerHTML = 'SEU IMC É: ' + imc + '| LEVEMENTE ACIMA DO PESO '
}
else if(29.9 < imc && imc < 34.9){
    var result =  document.getElementById('resultado').style.color ='yellow'
    document.getElementById('resultado').innerHTML = 'SEU IMC É: ' + imc + '| OBESIDADE GRAU 1 '
}
else if(35 < imc && imc < 39.9){
    var result =  document.getElementById('resultado').style.color ='red'
    document.getElementById('resultado').innerHTML = 'SEU IMC É: ' + imc + '| OBESIDADE GRAU 2 (SEVERA)'
}
else if(imc > 40){
    var result =  document.getElementById('resultado').style.color ='red'
    document.getElementById('resultado').innerHTML = 'SEU IMC É: ' + imc + '| OBESIDADE GRAU 3 (MÓRBIDA)'
}
}