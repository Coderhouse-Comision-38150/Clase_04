function mostrarPalabras(texto,cantPalabras,cb,retardo) {
    var array = texto.split(' ')
    var index = 0
    var id = setInterval(() => {
        console.log(array[index++])
        if(index >= array.length) {
            clearInterval(id)
            cb(array.length+cantPalabras)
        }

    },retardo?retardo:1000)
}

mostrarPalabras('Hola mundo!',0, cantPalabrasAcc => {
    mostrarPalabras('Como estan',cantPalabrasAcc, cantPalabrasAcc => {
        mostrarPalabras('coders! Bienvenidos!',cantPalabrasAcc, cantPalabrasAcc => {
            console.log('Proceso terminado, Cantidad de palabras:',cantPalabrasAcc)
        },500)
    },500)
},500)

