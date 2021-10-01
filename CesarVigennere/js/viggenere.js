const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
            'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
            'w', 'x', 'y', 'z'];

//llave
let key = "";


$(document).ready(function() {
    $('#ci').click(function() {
        //aquí vamos a cifrar
        key = document.getElementById('llave').value;
        key = key.replace(/ /g, '');
        let mess = document.getElementById('mess').value;
        mess = mess.replace(/ /g, '');
        let newMess = "";
        let keyComplete = "";
        //Aquí empieza el algoritmo
        if (revision(mess, key)) {
            for (var i = 0; i < mess.length; i++) {
                keyComplete += key.charAt(i%Number(key.length));
            }
            for (var i = 0; i < mess.length; i++) {
                //obtener la posicion de la letra por letra del mensaje
                let charr = mess.charAt(i);
                let posm = getPosition(charr);
                charr = keyComplete.charAt(i);
                let posk = getPosition(charr);
                let newVal = change(posm, posk);
                newMess += abc[newVal];
            }
            document.getElementById("rs").innerHTML = newMess; 
        }
    });
    $('#de').click(function() {
        //para cifrar vamos a usar la funcion
        // y = (x+z)mod27 pq estamos usando la ñ
        //vamos a traer los datos de los campos de texto
        key = document.getElementById('llave').value;
        //vamos a verificar los datos
        key = key.replace(/ /g, '');
        //obtener el mensaje
        let mess = document.getElementById('mess').value;
        mess = mess.replace(/ /g, '');
        let newMess = "";
        let keyComplete = "";
        //algoritmo
        if (revision(mess, key)) {
            for (var i = 0; i < mess.length; i++) {
                keyComplete += key.charAt((i%Number(key.length)));
            }
            for (var i = 0; i < mess.length; i++) {
                //obtener la poscion de la letra por letra del mensaje
                let charr = mess.charAt(i);
                let posm = getPosition(charr);
                charr = keyComplete.charAt(i);
                let posk = getPosition(charr);
                //ejecutamos el algoritmo
                let newVal = rechange(posm, posk);
                newMess += abc[newVal]; //mensaje decifrado
            }
            //imprimir el resultado
            document.getElementById("rs").innerHTML = newMess;
        }
    });
});




function change(posm, posk) {
    // y = (x + z)mod27
    let y = (posm+posk)%27;
    return y;
}

function rechange(posm, posk) {
    let val = 0;
    if ((posm-posk) >= 0) {
        val = (posm - posk) %27;
    } else {
        val = (posm - posk + 27)%27;
    }
    return val;
}

function getPosition(letra) {
    let position = abc.indexOf(letra);
    return position;
}

function revision(mess, desp) {
    const re = /^([a-zñ?]+([]*[a-zñ?]?['-]?[a-zñ?]+)*)$/

    var acc = true;

    if(!re.test(mess)){
        sd();
        acc = false;
    }
    if(!re.test(desp)){
        sdd();
        acc = false;
    }
    if(desp.length > mess.length){
        sz();
    }
    return acc;
}
