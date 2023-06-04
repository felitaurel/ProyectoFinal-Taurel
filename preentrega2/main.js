class Empleados {
    constructor(nombre, cargo, salario) {
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = salario;
    }
    aumento(porcentaje){
        this.salario = this.salario + this.salario * porcentaje;
    }
    
}
  

const items = JSON.parse(localStorage.getItem("empleados")) || []


const crearEmpleado = () => {
    const crearItem = document.querySelector("#crearEmpleado")
    crearItem.addEventListener("submit",(e)=>{
        e.preventDefault()
        const nombre = e.target.children["nombre"].value
        const cargo = e.target.children["cargo"].value
        const sueldo = e.target.children["sueldo"].value
        const empleado = new Empleados(nombre, cargo, sueldo)
        items.push(empleado)
        localStorage.setItem("empleados",JSON.stringify(items) )
        verItem(empleado)
        console.log(empleado)
        crearItem.reset()
        
    })
} 

const verItem = (item) =>{
    var lugar = document.querySelector("parrafo")
    var descripcion = document.createElement('p')
    descripcion.innerHTML = `<p>El empleado ${item.nombre} tiene el cargo de ${item.cargo} y un sueldo de  ${item.sueldo}</p>`
    
    document.body.appendChild(descripcion)
    
}
const verItems = () =>{

    items.forEach(item => {
        verItem(item)
    })
    
}
verItems()
crearEmpleado()


  /*
    let arregloEmpleados = [];
    let continuar = true;
    while (continuar) {
  
    const nombre = prompt('Ingrese el nombre')
    const edad = parseInt(prompt('Ingrese la edad'))
    const puesto = prompt('Ingrese el puesto')
    const salario = parseInt(prompt('Ingrese el salario'))
    
    const empleado = new Empleados(nombre, edad, puesto, salario)
    
    let persona = [nombre, edad, puesto, salario]
    arregloEmpleados.push(persona)
    console.log("El empleado " + nombre + " cobra " + salario + " pesos al mes.")
    if (confirm("Quiere poner un aumento al salario?")){
        cantidad = parseFloat(prompt('Cuanto quiere aumentar? (en porcentaje)'))
        empleado.aumento(cantidad) 
        console.log("El empleado" + empleado.nombre + " ahora cobra " + empleado.salario) 
    } 
    continuar = confirm("Quiere seguir agregando empleados?")

    
  }

  if (confirm("Quiere despedir algun empleado?")){
    
    
    despedido = prompt("Escriba el primer nombre del empleado")
    for (var i = 0; i < arregloEmpleados.length; i++){
        if (arregloEmpleados[i][0].indexOf(despedido) != -1){
            arregloEmpleados.splice(i, 1)
        }   
    }
    console.log("El empleado " + despedido + " ha sido despedido")
}
console.log(arregloEmpleados);


if (confirm("Quiere algun dato de un empleado?")){ // aca podria preguntarle que dato especifico del empleado quiere mediante un prompt y devolver solo ese dato
    datos = prompt("Escriba el primer nombre del empleado que quiere analizar")
    for (var i = 0; i < arregloEmpleados.length; i++){
        if (arregloEmpleados[i][0].indexOf(datos) != -1){
            console.log(`El empleado ${arregloEmpleados[i][0]} tiene ${arregloEmpleados[i][1]} años y un sueldo de ${arregloEmpleados[i][3]} pesos en su puesto de ${arregloEmpleados[i][2]}`)
        }   
    }
}*/

/*

const verEmpleado = ({id,pregunta,opciones}) =>{
    const formularioPregunta = document.createElement("form")
    formularioPregunta.className = "formularioPregunta"
    formularioPregunta.id = "formularioPregunta" + id
    const titulo = document.createElement("h3")
    titulo.innerText = pregunta
    formularioPregunta.append(titulo)
    opciones.forEach((opcion,index) => {
        const input = document.createElement("input")
        input.id = "opcion" + index
        input.type = "radio"
        input.name = "respuesta"
        input.value = index
        const label = document.createElement("label")
        label.setAttribute("for","opcion" + index)
        label.innerText = opcion
        formularioPregunta.append(input,label)
    });
    const btn = document.createElement("button")
    btn.innerText = "Siguiente"
    btn.type="submit"
    formularioPregunta.append(btn)
    const app = document.querySelector("#app")
    app.append(formularioPregunta)

//----------------------------------------
    formularioPregunta.addEventListener("submit",(e)=>{
        e.preventDefault()
        const repuestaUsuario = e.target.children["respuesta"].value
        preguntas.forEach((pregunta)=>{
            if(pregunta.correcta == repuestaUsuario){
            pregunta.respuesta = true
        }
        })
        console.log(preguntas)
        verPregunta(preguntas[id++])
    })

}
verEmpleado(preguntas[0])*/