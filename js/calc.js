const calcular = document.getElementById('calcular');
const blimpar = document.getElementById('limpar');

function area () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const largura = document.getElementById('largura').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && largura !== '') {

        const valorAREA = ((largura * altura)/2).toFixed(2);

        resultado.textContent = `A Área do ${nome} é ${valorAREA}`;

    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

    resultado.classList.add("active");
}

function limpar(){
    document.getElementById('nome').value="";
    document.getElementById('altura').value="";
    document.getElementById('largura').value="";
    document.getElementById('resultado').textContent = "";

    document.getElementById('resultado').classList.remove('active');
}

calcular.addEventListener('click', area);
blimpar.addEventListener('click', limpar);


function ficar1() {
    const altura = document.getElementById('altura');
    if(altura.value != undefined)
    {
        altura.classList.add("ficar1");    
    }
}

function ficar2() {
    const largura = document.getElementById('largura');
    if(largura.value != undefined)
        largura.classList.add("ficar2");    
}
