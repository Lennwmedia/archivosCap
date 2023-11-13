'use strirct'

window.addEventListener('load', () => {

    var fecha = new Date;

    var año = fecha.getFullYear();
    var mes = fecha.getMonth();
    var day = fecha.getDay();
    var hora = fecha.getHours();
    var minuto = fecha.getMinutes()
    var segundo = fecha.getSeconds();


    var displayHora = `
        El año es: ${año}
        El mes es: ${mes}
        El día es: ${day}
        La hora es: ${hora}
        Minuto: ${minuto}
        Segundo: ${segundo}
    `;

    console.log(displayHora);
    console.log(fecha)

    console.log(Math.ceil(Math.random()*90000000))

});