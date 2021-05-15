let numero1= parseInt (prompt("Ingrese precio del primer producto sin IVA:"))
let numero2= parseInt (prompt("Ingrese precio del segundo producto sin IVA:"))


sumarProductos = (num1, num2) => {
    let sumaTotal = num1 + num2;
    return sumaTotal
}

descontarPrecio = (precio) => {
    let precioConDescuento = precio* 0.30;
    let precioDescontado = precio - precioConDescuento
       return precioDescontado
}

calcularIva = (subtotal) => {
    let calcular = subtotal * 0.21;
    return calcular
}

pagar = (subtotal1, impuesto) => {
let pagoFinal = subtotal1 + impuesto
return pagoFinal
}



let precioParcial = sumarProductos(numero1, numero2)
console.log ("el precio de la suma de los productos es $ "+precioParcial);
let ahorro = descontarPrecio (precioParcial);
console.log ("Con el descuento del 30% del banco terminariamos pagando $ "+ahorro+ " peeero..");
let precioIva = calcularIva (ahorro);
console.log ("Lamentablemente no zafamos de pagar impuestos, asi que de IVA terminamos pagando $ "+precioIva);
let precioFinal = pagar (ahorro, precioIva);
console.log ("Así que nuestra compra nos termina saliendo $ "+ precioFinal)