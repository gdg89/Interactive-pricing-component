

//PERSONALIZANDO BACKROUND DO RANGE PERCORRIDO

const colorBgRange = 'hsl(174, 86%, 45%)'; // color de fondo percorrido
const range = document.getElementById('slider_1');//seleccionando o elemento input
const currentValue = 
	((range.value - range.min) / (range.max - range.min)) * range.max;//Acessamos o valor atual do input

/*updateBackgroundColor é uma função que vou chamar para 
 atualizar a cor do background percorrido pelo seletor, 
 passando o valor atualizado do seletor e a cor de preenchimento.
 Vamos chamar a função imediatamente para já preencher a cor do que já foi percorrido pelo seletor*/

 const updateBackgroundColor = (value, color) => {
	range.style.setProperty(
		'background',
		`linear-gradient(to right, ${color} 0%, ${color}
		 ${value}%,
		 #d3d3d3 ${value}%,
		 #d3d3d3 100%)`,
	);
};
updateBackgroundColor(currentValue, colorBgRange);

//Agora adicionamos um listener para o input atulizar o background a cada alteração de valor do input:
range.addEventListener('input', function(){
	//retorna o valor atual do seletor
	const updateValue = ((this.value - this.min) / (this.max - this.min)) * this.max;
	//chama a função que atualiza o background
	updateBackgroundColor(updateValue, colorBgRange);
})



//INTERAÇÕES ENTRE PAGEVIEWS, SLIDER E PRECIOS

	//APLICADO LOGICAS AL RANGE 
	function interacoes(){
		let checkOn = document.getElementById('switch').checked;
		if (checkOn == true){
			const rangeValue = range.value;// recuperar valor do range
 			if (rangeValue <= 20){//atribuir valor para calcular descuento.
 				valor = 8;
 				document.getElementById('pgviews').innerHTML = '10K';
			}else if(rangeValue >= 21 && rangeValue <=40){
				valor = 12;
				document.getElementById('pgviews').innerHTML = '50K';
			}else if(rangeValue >= 41 && rangeValue <=60){
				valor = 16;
				document.getElementById('pgviews').innerHTML = '100K';
			}else if(rangeValue >= 61 && rangeValue <=80){
				valor = 24;
				document.getElementById('pgviews').innerHTML = '500K';
			}else if(rangeValue >= 81 && rangeValue <=100){
				valor = 36;
				document.getElementById('pgviews').innerHTML = '1M';
			}
		let descontado = valor - (valor*(25/100));//calculando descuento
	 	document.getElementById('price').innerHTML ='$' + descontado;//imprimiendo precio con descuento
			
 		}else{
 			const rangeValue = range.value;//recuperando valor do range
 			if (rangeValue <= 20){//atribuir los pageviewgs y precios correspondientes
 				document.getElementById('pgviews').innerHTML = '10K';
 				document.getElementById('price').innerHTML = '$8';
			}else if(rangeValue >= 21 && rangeValue <=40){
				document.getElementById('pgviews').innerHTML = '50K';
 				document.getElementById('price').innerHTML = '$12';
			}else if(rangeValue >= 41 && rangeValue <=60){
				document.getElementById('pgviews').innerHTML = '100K';
 				document.getElementById('price').innerHTML = '$16';
			}else if(rangeValue >= 61 && rangeValue <=80){
				document.getElementById('pgviews').innerHTML = '500K';
 				document.getElementById('price').innerHTML = '$24';
			}else if(rangeValue >= 81 && rangeValue <=100){
				document.getElementById('pgviews').innerHTML = '1M';
 				document.getElementById('price').innerHTML = '$36';
			}

 		}

	}	
 

// verificando estado del switch, y atribuindo valores y descuentos
		
 function bldo(){
	let check = document.getElementById('switch').checked;
	if(check == false){// sim 'check' é false vira true y imprime descuento segun valores del range
		document.getElementById('price_style').className = 'price';
		check = true;// com 'check' em true realizr calculo de disconto
	    const rangeValueY = range.value;//primero recuperar valor do range
 			if (rangeValueY <= 20){//atribuir valor para calcular descuento.
 				valor = 8;
			}else if(rangeValueY >= 21 && rangeValueY <=40){
				valor = 12;
			}else if(rangeValueY >= 41 && rangeValueY <=60){
				valor = 16;
			}else if(rangeValueY >= 61 && rangeValueY <=80){
				valor = 24;
			}else if(rangeValueY >= 81 && rangeValueY <=100){
				valor = 36;
			}
		 let descontado = valor - (valor*(25/100));//calculando descuento
	 	document.getElementById('price').innerHTML = '$' + descontado;//imprimiendo precio con descuento
			
	
	}else{
		check = false;// com 'check' em false manter precio original.
		document.getElementById('price_style').className = 'price_none';
		const rangeValueX = range.value;//primero recuperar valor do range
 			if (rangeValueX <= 20){//atribuir los pageviewgs y precios correspondientes
 				document.getElementById('pgviews').innerHTML = '10K';
 				document.getElementById('price').innerHTML = '$8';
			}else if(rangeValueX >= 21 && rangeValueX <=40){
				document.getElementById('pgviews').innerHTML = '50K';
 				document.getElementById('price').innerHTML = '$12';
			}else if(rangeValueX >= 41 && rangeValueX <=60){
				document.getElementById('pgviews').innerHTML = '100K';
 				document.getElementById('price').innerHTML = '$16';
			}else if(rangeValueX >= 61 && rangeValueX <=80){
				document.getElementById('pgviews').innerHTML = '500K';
 				document.getElementById('price').innerHTML = '$24';
			}else if(rangeValueX >= 81 && rangeValueX <=100){
				document.getElementById('pgviews').innerHTML = '1M';
 				document.getElementById('price').innerHTML = '$36';
			}
		
	}
}

 // DOS FUNCIONES QUE NO CONSEGUI APLICAR COMO  FUNCIONES DE CALLBACK
 		/*
		 //ATRIBUNDO VALORES
		    // testado.. Funciona.... 
				var atribuindoValores = function(){
					const rangeValue = range.value;//primero recuperar valor do range
				 	if (rangeValue <= 20){//atribuir los pageviewgs y precios correspondientes
				 		document.getElementById('pgviews').innerHTML = '10K';
				 		document.getElementById('price').innerHTML = '8';
					}else if(rangeValue >= 21 && rangeValue <=40){
						document.getElementById('pgviews').innerHTML = '50K';
				 		document.getElementById('price').innerHTML = '12';
					}else if(rangeValue >= 41 && rangeValue <=60){
						document.getElementById('pgviews').innerHTML = '100K';
				 		document.getElementById('price').innerHTML = '16';
					}else if(rangeValue >= 61 && rangeValue <=80){
						document.getElementById('pgviews').innerHTML = '500K';
				 		document.getElementById('price').innerHTML = '24';
					}else if(rangeValue >= 81 && rangeValue <=100){
						document.getElementById('pgviews').innerHTML = '1M';
				 		document.getElementById('price').innerHTML = '36';
					}

				}
		//LOGICA DE DISCONTO
			// testada .. finciona!!... pero al aplicar en cada click realizara el descuento sobre el numero ya impresso.Es mejor tomar el valor del range para realizar el calculo.
					 var rangeDiscount =  function(){
					 	const precio = document.getElementById('price').innerHTML;
					 	let valor = 0;
					 	switch (precio){
					 		case "8":
					 		     valor = 8;
					 		  	 break;
					 		case "12":
					 			 valor = 12;
					 			 break;
					 		case "16":
					 			 valor = 16;
					 			 break;
					 		case "24":
					 			 valor = 24;
					 			 break;
					 		case "36":
					 			 valor = 36;
					 			 break;
							}
						        
						     
						let descontado = valor - (valor*(25/100));
						 document.getElementById('price').innerHTML = descontado;
						console.log(descontado);
					 }
		*/




