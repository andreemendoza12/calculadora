/*SUMA*/

function suma(){
	var nro1Value = document.getElementById('nro1').value
	var nro2Value = document.getElementById('nro2').value
	
	var resultado = document.getElementById('nro3')
	resultado.value = parseInt(nro1Value) + parseInt(nro2Value)
	cambioColor()
}

var botonSuma = document.getElementById('suma')
botonSuma.addEventListener('click', suma)

/*RESTA*/

function resta(){
	var nro1Value = document.getElementById('nro1').value
	var nro2Value = document.getElementById('nro2').value

	var resultado = document.getElementById('nro3')
	resultado.value = parseInt(nro1Value) - parseInt(nro2Value)
	cambioColor()
}

var botonResta = document.getElementById('resta')
botonResta.addEventListener('click', resta)

/*multiplicar*/

function multiplicar(){
	var nro1Value = document.getElementById('nro1').value
	var nro2Value = document.getElementById('nro2').value

	var resultado = document.getElementById('nro3')
	resultado.value = parseInt(nro1Value)* parseInt(nro2Value)
	cambioColor()
}

var botonMultiplicar = document.getElementById('multiplicacion')
botonMultiplicar.addEventListener('click', multiplicar)



/*dividir*/

function dividir(){
	var nro1Value = document.getElementById('nro1').value
	var nro2Value = document.getElementById('nro2').value

	var resultado = document.getElementById('nro3')
	resultado.value = parseInt(nro1Value)/ parseInt(nro2Value)
	cambioColor()
}

var botonDividir = document.getElementById('division')
botonDividir.addEventListener('click', dividir)


/*limpiar*/

function limpiar(){
	var nro1 = document.getElementById('nro1')
	var nro2 = document.getElementById('nro2')
	var nro3 = document.getElementById('nro3')

	nro1.value = ""
	nro2.value = ""
	nro3.value = ""
	document.getElementById('limpiar').disabled = true
	document.getElementById('suma').disabled = true
	document.getElementById('resta').disabled = true
	document.getElementById('multiplicacion').disabled = true
	document.getElementById('division').disabled = true
}
var botonlimpiar = document.getElementById('limpiar')
botonlimpiar.addEventListener('click',limpiar)

/*cambiar la fuente de color*/

function cambioColor(){

	var nro3 = document.getElementById('nro3')
	var nro3Value = nro3.value

	if (nro3Value < 0) {
		nro3.style.color = "red"
	}
	else if(nro3Value > 0){
		nro3.style.color= "green"
	}
    else {
    	nro3.style.color = "blue"
    }
}

/*habilitar botones*/
function habilitarBotones(){
	var nro1Value= document.getElementById('nro1').value
	var nro2Value= document.getElementById('nro2').value
	if (nro1Value && nro2Value) {
		document.getElementById('limpiar').disabled = false
		document.getElementById('suma').disabled = false
		document.getElementById('resta').disabled = false
		document.getElementById('multiplicacion').disabled = false
		document.getElementById('division').disabled = false
	}
	else{
		document.getElementById('limpiar').disabled = true
		document.getElementById('suma').disabled = true
		document.getElementById('resta').disabled = true
		document.getElementById('multiplicacion').disabled = true
		document.getElementById('division').disabled = true
	}

}

var nro1 = document.getElementById('nro1')
nro1.addEventListener('input',habilitarBotones)
var nro2 = document.getElementById('nro2')
nro2.addEventListener('input',habilitarBotones)



