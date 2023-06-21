AOS.init();


const dataDoEvento =  new Date ("Apr 13, 2025 11:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 *24;
    const horaEmMs = 1000 *60 *60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor (distanciaAteOEvento / diaEmMs); //contagem dos dias até o evento
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);//contagem das horas do dia té o evento
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs)/minutoEmMs);//contagem dos minutos até o evento
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs)/1000);//contagem dos segundos até o evento


    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if(distanciaAteOEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000)