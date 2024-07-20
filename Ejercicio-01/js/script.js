//Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.
function Encendido() {
    this.estado = 'Encendido';
    return 'El motor esta Encendido';
}
function Apagado() {
    this.estado = 'Apagado';
    return 'El motor esta Apagado';
}
const auto = {
    color : "Negro",
    marca : "Mercedes Benz",
    modelo : "2022",
    estado: 'Apagado',
    Encendido : Encendido(),
    Apagado : Apagado()

 
}
document.write(auto.Encendido + '<br>');
document.write ('Estado del auto:' + auto.estado + '<br>');
document.write(auto.Apagado + '<br>');
document.write ('Estado del auto:' + auto.estado + '<br>');


