

alert("Bienvenido a tu carrito de compra.")
let productoSeleccionados;
let sumarProducto;
let almohadonSofia= 100;
let cubrecamaQueen= 200;
let cortinasOlivia= 300;
let alfombraLavable= 400;
let noQuiereMas = 0;
let montoTotal;
let totalBolsas=0;
let totalParcial;
let producto;
let sumar;
let diaEntrega = 1;


function perchero(){
    producto = parseInt(prompt("Ingrese producto a comprar \n1 - Almohadon Sofia\n2 - Cubrecama queen\n3 - Cortinas Olivia\n4 - Alfombra lavable"));

    if(producto === 1){
        alert('Elegiste al Almohadon Sofia tiene un valor de $'+almohadonSofia);
        productoSeleccionados = almohadonSofia;
    }else if(producto === 2){
        productoSeleccionados = cubrecamaQueen;
        alert('Elegiste al Cubrecama Queen tiene un valor de $ '+cubrecamaQueen );
    }else if(producto === 3){
        productoSeleccionados = cortinasOlivia;
       alert('Elegiste al Cortinas Olivia tiene un valor de $ '+cortinasOlivia );
    }else if(producto === 4){
        productoSeleccionados = alfombraLavable;
        alert('Elegiste al Alfombra lavable tiene un valor de $ '+alfombraLavable );
    }else{
        alert("No ingreso ninguna opción correcta, vuelva a empezar.");
    }
    
} 
perchero()


function sumarProd(cantProductos){   
    sumar= parseInt(prompt("Quiere comprar otro producto? \n1 - Almohadon Sofia\n2 - Cubrecama queen\n3 - Cortinas Olivia\n4 - Alfombra lavable\n5 - No, gracias!"));

    if(sumar === 1){
        sumarProducto = almohadonSofia;
    }else if (sumar === 2){        
        sumarProducto = cubrecamaQueen;
    }else if (sumar === 3){        
        sumarProducto = cortinasOlivia;
    }else if (sumar === 4){        
        sumarProducto = alfombraLavable;
    }else if (sumar === 5){        
        sumarProducto = noQuiereMas;
    }else{
        alert("No ingreso ninguna opción correcta, vuelva a empezar.");
    }
    totalParcial = cantProductos+sumarProducto;
  
}
sumarProd()

function sumaTotal(){
    montoTotal = productoSeleccionados + sumarProducto;
    alert('El monto total de su compra es de $ '+montoTotal);

}
sumaTotal()

diaEntrega=parseInt(prompt('En cuantos dias desea recibir'));
for(let i= 1; i <= diaEntrega; i++){
    alert( 'Tu entrega llegará en ' + diaEntrega +' dia/s');
    break;
}

function ticket(){
    let apellido= prompt("Ingrese su apellido");
    let direccion = prompt("Ingrese su calle");
    let bolsas= parseInt(prompt("Ingrese cuantas bolsas para regalo necesitará"));
    
    if(apellido, direccion) {
         alert('Enviaremos todo a Sra-Sr' + '\n*'  +apellido + '\n*en la calle ' +direccion + ' \n*en ' +bolsas + ' bolsa/s\n Gracias por comprar !');


    }else{
        alert("Ups! algo salio mal, recarga la pagina");
    }
}
ticket()

/*let productoDeco = parseInt(prompt("Ingrese cantidad de bolsas a necesitar."));
for (let i=0; i < productoDeco; i++){
    datos();
    alert(totalBolsas = productoDeco+montoTotal);
}
datos()
alert('El total de su compra es: '+montoTotal);*/




