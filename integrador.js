alert("Bienvenidos al restarurante de zamora")
plata=parseInt(prompt("Con cuanto dinero vienes?"))
entrada=parseInt(prompt("Ingrese el valor de la entrada"))
segundo=parseInt(prompt("Ingrese el valor del segundo"))
postre=parseInt(prompt("Ingrese el valor del postre"))
total=entrada+segundo+postre
vuelto=plata-entrada-segundo-postre
igv=total*18/100
console.log("Viniste con $",plata,)
console.log("El valor de la entrada es:",entrada,)
console.log("El valor de el segundo es de:",segundo,)
console.log("El valor de el postre es de:",postre,)
console.log("El costo total es de:",total)
console.log("El costo total con el IGV es de:",igv+total)
console.log("Tu vuelto seria:",vuelto,)
