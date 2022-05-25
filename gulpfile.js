const { watch, series, parallel, src, dest } = require("gulp");

//Tarea inicio
function inicio(cb) {
    console.log("Generando proyecto CV");
    cb(); 
}
//Tarea final
function final(cb) {
    console.log("Proyecto CV generado");
    cb();
}
//Tarea default que copia archivo .html y .css a carpeta dist
function copia(cb){

}

exports.inicio=inicio;
exports.final=final;
exports.default=copia;

//Con esta finción se copiarian los archivos a la carpeta dist/
exports.pipeline = function(){
    return src("css/*.css").pipe(dest("dist/"));
           src("html/*.html").pipe(dest("dist/"));
}