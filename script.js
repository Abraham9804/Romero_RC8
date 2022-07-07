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

Prestamos.forEach(dato => {
    contenedor.innerHTML +=`
    <p>El prestamo solicitado es de: ${dato.cantidad} pesos a pagar en ${dato.meses} meses, 
    por lo que usted pagará un total de ${dato.total} pesos en cuotas de ${dato.pagos.toFixed(2)} mensuales</p>
    
    
    `
}
    )










