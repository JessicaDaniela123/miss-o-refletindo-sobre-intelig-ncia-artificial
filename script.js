const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Com o intenso avanço das tecnologias, uma nova Inteligência Artificial é implantada no ambiente escolar, com o objetivo de tornar a aprendizagem mais dinâmica. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo das consequências desse novo avanço. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Quis saber mais sobre o funcionamento dessa IA."
            }
        ]
    },
    {
        enunciado: "Através de pesquisas acerca desta nova Inteligência Artificial, descobriu-se que em suas diversas funcionalidades, estão incluídas a capacidade de auxiliar na realização de trabalhos, bem como a capacidade de sanar as possíveis dúvidas dos estudantes. Qual o pensamento atribuído a essas funcionalidades?",
        alternativas: [
            {
                texto: "Utilizar as funcionalidades desta IA pode trazer benefícios, visto que ela poderá ajudar a encontrar informações relevantes para futuros trabalhos e pesquisas, se utilizando de uma linguagem que facilite o entendimento.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Ocorre um sentimento de receio pela possibilidade de se tornar dependente desta tecnologia.",
                afirmacao: "Sente mais facilidade em utilizar seus próprios recursos para escrever e executar suas atividades."
            }
        ]
    },
    {
        enunciado: "Em uma das aulas ocorridas, o assunto foi colocado em pauta. O docente propõe que os estudantes utilizem essa nova tecnologia para desenvolver uma pesquisa. Como você realiza essa tarefa?",
        alternativas: [
            {
                texto: "UTiliza as informações fornecidas pela IA e não vê necessidade em fazer alterações nas informações obtidas, pois acredita em sua veracidade.",
                afirmacao: "Obtém confiança nas informações que a IA proporciona."
            },
            {
                texto: "Prefere utilizar as informções fornecidas pela IA apenas em poucas partes da pesquisa e vê a necessidade de buscar outras fontes de informação que podem transmitir maior confiança.",
                afirmacao: "Prefere utilizar seus próprios métodos e dispensa a ajuda da IA."
            }
        ]
    },
    {
        enunciado: "Na data de entrega do trabalho, ocorreu um debate acerca dos impactos dessa IA. Como você se posiciona?",
        alternativas: [
            {
                texto: "Defende que a IA pode ser vantajosa ao possibilitar a criação de novas oportunidades e melhorar as habilidades humanas.",
                afirmacao: "Impulsiona a inovação na área da IA e defende a criação de novos caminhos profissionais que a envolvam."
            },
            {
                texto: "Se mostra preocupado com a possibilidade de que esses novos avanços podem ocasionar a substituição dos seres humanos em diversas atividades.",
                afirmacao: "Sua preocupação com as pessoas te motiva a discutir meios de utilização da IA de maneira ética."
            }
        ]
    },
    {
        enunciado: "Após um tempo da implementação da Inteligência Artificial no ambiente escolar surgiu outro trabalho, desta vez, em grupo, para ser realizado. Qual a melhor decisão a ser tomada? ",
        alternativas: [
            {
                texto: "Através das opiniões dos integrantes do grupo, acaba confiando na IA e se rende ao trabalho produzido por ela.",
                afirmacao: "Percebe que confiar plenamente na IA, contribui para a diminuição da originalidade na execução de trabalhos."
            },
            {
                texto: "Revisa as informações produzidas pela IA e adiciona contribuiuções e perspectivas do grupo.",
                afirmacao: "Entende a importância de saber conciliar as funcionalidades da Inteligência Artificial com a criatividade e conhecimento humano. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
