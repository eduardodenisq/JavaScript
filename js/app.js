window.onload = function(Calculadora){
	pantalla=document.getElementById("display");
}
x="0";//número en pantalla
xi=1;//inicia número en pantalla
coma=0;//punto decimal
ni=0;//número en espera
op="no";//operación en curso

function numero(xx){//toma número clickeado
		if(parseInt(x.length) < 8){
			if(x=="0" || xi==1){
				pantalla.innerHTML=xx;
				x=xx;
				if(xx=="."){//captura el punto
					pantalla.innerHTML="0.";
					x=xx;
					coma=1;
				}
			}
			else{
				if(xx=="." && coma==0){
					pantalla.innerHTML+=xx;
					x+=xx;
					coma=1;//cambia estado decimal
				}
				else if(xx=="." && coma==1){}//previene que se agreguen mas puntos
				else{
					pantalla.innerHTML+=xx;
					x+=xx
				}

			}
			xi=0//el número esta iniciado y se puede ampliar
		}
	}

function operador(s){
	igual();//si hay algo pendiente lo hara primero
	ni=x//primer número en espera
	op=s;//guarda tipo de operación
	pantalla.innerHTML="";
	xi=1;
}

function igual(){
	if(op=="no"){
		pantalla.innerHTML=x;
	}
	else{
		sl=ni+op+x;//operación de dos números en cadena
		sol=eval(sl)//conversión de cadena
		sol=sol.toString()
		sol=sol.substring(0,8)
		pantalla.innerHTML=sol
		x=sol;//se guarda solución
		op="no";//no hay nada pendidente
		xi=1;
	}
}

function raiz(){
	x=Math.sqrt(x)//opera raiz cuadrada
	x=x.toString()
	x=x.substring(0,8)
	pantalla.innerHTML=x;
	op="no";
	xi=1;
}

function signo(){
	nx=Number(x);
	nx=-nx;//se le agrega el negativo
	x=String(nx);
	pantalla.innerHTML=x;
	xi=1;
}

function on(){
	pantalla.innerHTML=0;
	x="0";
	coma=0;//pasa todos los valores a 0
	ni=0
	op="no"
}
