class Empleados {
    constructor(nombre, edad, puesto, salario) {
        this.nombre = nombre;
        this.edad = edad;
        this.puesto = puesto;
        this.salario = salario;
    }
    aumento(porcentaje){
        this.salario = this.salario + this.salario * porcentaje;
    }
    
}
  
  
    let arregloEmpleados = [];
    let continuar = true;
    while (continuar) {
  
    const nombre = prompt('Ingrese el nombre')
    const edad = parseInt(prompt('Ingrese la edad'))
    const puesto = prompt('Ingrese el puesto')
    const salario = parseInt(prompt('Ingrese el salario'))
    
    const empleado = new Empleados(nombre, edad, puesto, salario)
    arregloEmpleados.push(empleado)
    console.log("El empleado " + nombre + " cobra " + salario + " pesos al mes.")
    if (confirm("Quiere poner un aumento al salario?")){
        cantidad = parseFloat(prompt('Cuanto quiere aumentar? (en porcentaje)'))
        empleado.aumento(cantidad) 
        console.log("El empleado" + empleado.nombre + " ahora cobra " + empleado.salario) 
    } 
    continuar = confirm("quiere seguir agregando empleados")
  }

console.log(arregloEmpleados)