//Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.


const auto = {
    color : "Negro",
    marca : "Mercedes Benz",
    modelo : "2022",
    estado: false,
    Encendido :function () {

        document.write('El motor esta Encendido')
    },
    Apagado : ()=>{
       document.write('El motor esta Apagado') 
    }

 
}
document.write(`${auto.Encendido }`+ '<br>');
document.write ('Estado del auto:' + `${auto.estado}` + '<br>');
document.write(`${auto.Apagado}` + '<br>');
document.write ('Estado del auto:' + `${auto.estado}` + '<br>');


