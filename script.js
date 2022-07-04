let cantidad
let meses 
let total
let pagos
let interes



class Prestamo{
    constructor(cantidad, meses, total, pagos){
        this.cantidad=cantidad,
        this.meses=meses,
        this.total=total,
        this.pagos=pagos
    }
    datosPrestamo(){
    return `La cantidad solicitada es ${this.cantidad} en un plazo de ${this.meses}, por lo que el monto total sera de ${this.total} en pagos de ${this.pagos.toFixed(2)}`
    }
}




while((isNaN(cantidad) || isNaN(meses)) || (cantidad < 1000 || cantidad >50000 || meses > 12)){
    alert("bienvenido al simulador de prestamos, recuerde que las cantidades a solicitar son de 1,000 a 50,000 pesos en un plazo maximo de 12 meses")
    cantidad = parseFloat(prompt("ingrese la cantidad deseada"))
    meses = parseInt(prompt("Ingrese los meses a pagar"))

    
}

function totales(){
    if((meses <= 3) && (cantidad >= 1000 && cantidad <=50000)){
        interes = 0.10
        total = cantidad + (cantidad * interes)
        pagos = total / meses
        
    }

    else if((meses >3 && meses <= 6) && (cantidad >= 1000 && cantidad <=50000)) {
        interes = 0.25
        total = cantidad + (cantidad * interes)
        pagos = total / meses
       
    
    }

    else if((meses >6 && meses <= 12) && (cantidad >= 1000 && cantidad <=50000)) {
        interes = 0.50
        total = cantidad + (cantidad * interes)
        pagos = total / meses
       
    
    }
}


totales()

const prestamo1 = new Prestamo(cantidad, meses, total, pagos)
const Prestamos = [prestamo1]

console.log(Prestamos.map(prestamo =>{	
    return{				
        Cantidad: prestamo.cantidad,
        Meses: prestamo.meses,
        total: prestamo.total,
        pagos: prestamo.pagos.toFixed(2)
    }
}))


alert(prestamo1.datosPrestamo(cantidad, meses, total, pagos))








