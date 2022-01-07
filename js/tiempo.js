

const mostrarTiempo=()=>{
    let fecha=new Date();
    let horaActual=fecha.toLocaleTimeString();

    document.getElementById("time").innerHTML=horaActual;

    const diasSemana=['Dom','Lun','Mar','Mie','Jue','Vie','Sab'];
    let diaTexto= diasSemana[fecha.getDay()];

    let diaMes=fecha.getDate(); 
    
    const meses =['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    let mes=meses[fecha.getMonth()];

    let fechaFinal=`${diaTexto} ${diaMes} de ${mes} de ${fecha.getFullYear()}`

    document.getElementById("date").innerHTML=fechaFinal;

}


setInterval(mostrarTiempo,1000);

