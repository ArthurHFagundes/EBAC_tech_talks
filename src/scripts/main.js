AOS.init(); // para inicializar uma biblioteca de animações

const dataDoEvento = new Date("Dec 21, 2025 19:00:00"); // para estabelecer uma constante com uma data futura
const timeStampDoEvento = dataDoEvento.getTime(); // estabelecer uma constante para o "carimbo de data" como um código para o segundo, minuto, hora, dia e ano exatos

const contaTempo = setInterval(function() {

    const dataAtual = new Date(); // criamos uma constante para representar "o agora"
    const timeStampAtual = dataAtual.getTime(); // e criamos um "carimbo de data" representando esse "agora"
    const distanciaAteEvento = timeStampDoEvento - timeStampAtual; // calculo básico de diferença de data

    // estabelecendo constantes de cálculo
    const diasEmMS = 1000 * 60 * 60 * 24
    const horasEmMS = 1000 * 60 * 60
    const minutosEmMS = 1000 * 60
    const MS = 1000

    // cálculo dos dias, horas, minutos e segundos
    const diasAteEvento = Math.floor(distanciaAteEvento / diasEmMS ) // distância em timestamp do dia atual até o evento / pelos DIAS em MS
    const horasAteEvento = Math.floor((distanciaAteEvento % diasEmMS ) / horasEmMS ) // vai retornar o resto da divisão que sobrou do cálculo de cima / pelas HORAS em MS
    const minutosAteEvento = Math.floor((distanciaAteEvento % horasEmMS ) / minutosEmMS ) // vai retornar o resto da divisão que sobrou do cálculo de cima / pelos MINUTOS em MS
    const segundosAteEvento = Math.floor((distanciaAteEvento % minutosEmMS ) / MS ) // vai retornar o resto da divisão que sobrou do cálculo de cima / pelos MILISEGUNDOS

    // selecionar o elemento span e inserir contador
    document.getElementById('contador').innerHTML = `começa em <br> ${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}min ${segundosAteEvento}s`

    // caso a data já tenha passado
    if (distanciaAteEvento < 0) {
        clearInterval(contaTempo);
        document.getElementById('contador').innerHTML = `já terminou!`
    }
}, 1000) // o "1000ms" é igual a "1s" // nesse caso a cada 1s ele atualiza