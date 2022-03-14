/* Elon tem o sonho de colonizar marte, essa jornada será longa, Elon precisa passar por alguams etapas para chegar até o seu objetivo. 
Primeiro Elon precisa de verba para investir neste projeto.
Segundo passo é procurar por mão de obra qualificada.
Terceiro passo é testar os projetos.
Quarto passo é arrumar algum contrato de exploração espacial para a empresa se tornar sustentável.
Quinto passo conseguir desenvolver um foguete capaz de chegar até marte.
*/

const prompt = require('prompt-sync')();
console.clear();

console.log(
    'A jornada de Elon para colonização de marte começa aqui, será necessário passar por algumas etapas, á seguir:',
);

console.log();

console.log('Responda todas as perguntas com Sim ou Não');
console.log();

let contagemSim = 0;

let fundoInvestimento = prompt('Você já conseguiu seu fundo de investimento?');

if (fundoInvestimento == 'sim') {
    contagemSim++;
    console.log(`${fundoInvestimento}, consegui investimento`);
} else {
    console.log(`${fundoInvestimento} consegui investimento`);
}

let funcionarios = prompt(
    'Você já conseguiu especialistas para começar o projeto?',
);

if (funcionarios == 'sim') {
    contagemSim++;
    console.log(`${funcionarios}, consegui funcionários`);
} else {
    console.log(`${funcionarios} consegui funcionários`);
}
let testesBemSucedidos = prompt(
    'Os testes com os foguetes foram bem-sucedidos?',
);

if (testesBemSucedidos == 'sim') {
    contagemSim++;
    console.log(`${testesBemSucedidos}, os teste foram bem-sucedidos.`);
} else {
    console.log(`${testesBemSucedidos}, os testes não foram bem-sucedidos.`);
}

let contratoDePrestacaoDeServico = prompt(
    'Você conseguiu algum contrato de exploração espacial que gere renda a sua empresa?',
);

if (contratoDePrestacaoDeServico == 'sim') {
    contagemSim++;
    console.log(
        `${contratoDePrestacaoDeServico}, consegui contrato de exploração espacial.`,
    );
} else {
    console.log(
        `${contratoDePrestacaoDeServico} consegui contrato de exploração espacial.`,
    );
}

let fogueMarte = prompt(
    'Você conseguiu produzir um foguete capaz de realizar a viagem até Marte?',
);

if (fogueMarte == 'sim') {
    contagemSim++;
    console.log(
        `${fogueMarte}, consegui produzir um foguete capaz de viajar até marte`,
    );
} else {
    console.log(
        `${fogueMarte} consegui produzir um foguete capaz de viajar até marte`,
    );
}

if (contagemSim < 1) {
    console.log('Você falhou miseravelmente');
} else if (contagemSim == 1 || contagemSim == 2) {
    console.log('Você falhou, mas ainda consegue fugir da situação.');
} else if (contagemSim == 3) {
    console.log(
        'Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.',
    );
} else if (contagemSim == 4) {
    console.log(
        'Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.',
    );
} else if (contagemSim == 5) {
    console.log(
        'Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.',
    );
}

console.log(contagemSim);