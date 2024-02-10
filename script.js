const perguntas = [
    {
      pergunta: "O que é um teste de unidade?",
      respostas: [
        "Teste de uma única função ou método",
        "Teste de integração de várias partes do sistema",
        "Teste manual realizado por usuários finais",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o principal objetivo da automação de testes?",
      respostas: [
        "Reduzir a quantidade de testes necessários",
        "Aumentar a eficiência e a confiabilidade dos testes",
        "Substituir completamente os testes manuais",
      ],
      correta: 1
    },
    {
      pergunta: "O que é regressão de software?",
      respostas: [
        "Uma técnica de desenvolvimento de software",
        "Uma técnica de teste para verificar se uma modificação não afeta as funcionalidades existentes",
        "Um tipo de teste de aceitação",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o principal objetivo do planejamento de testes?",
      respostas: [
        "Garantir que todos os bugs sejam corrigidos antes do lançamento",
        "Garantir que todos os requisitos sejam testados",
        "Definir a estratégia e os recursos necessários para executar os testes de forma eficaz",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o princípio de Pareto aplicado aos testes de software?",
      respostas: [
        "Concentrar os esforços nos 20% dos testes que representam 80% dos problemas",
        "Priorizar testes manuais sobre testes automatizados",
        "Dedicar mais recursos aos testes de integração do que aos testes de unidade",
      ],
      correta: 0
    },
    {
      pergunta: "O que é teste de carga?",
      respostas: [
        "Teste para verificar o comportamento do sistema com um grande volume de dados ou usuários",
        "Teste para verificar a funcionalidade de uma única parte do sistema",
        "Teste para verificar a integração entre diferentes componentes do sistema",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a diferença entre teste de caixa branca e teste de caixa preta?",
      respostas: [
        "O teste de caixa branca se concentra na funcionalidade do software, enquanto o teste de caixa preta examina o código-fonte",
        "O teste de caixa branca examina apenas os aspectos visíveis do software, enquanto o teste de caixa preta examina o código-fonte",
        "O teste de caixa branca verifica a lógica interna do software, enquanto o teste de caixa preta verifica apenas a interface do usuário",
      ],
      correta: 2
    },
    {
      pergunta: "O que é um bug?",
      respostas: [
        "Uma falha no código-fonte do software",
        "Um problema que afeta a funcionalidade do software",
        "Um erro cometido pelos testadores durante a execução dos testes",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um teste de aceitação?",
      respostas: [
        "Um teste realizado pelos desenvolvedores para verificar se o código está pronto para ser entregue ao cliente",
        "Um teste para verificar se o software atende aos requisitos do cliente",
        "Um teste para verificar a integração entre diferentes partes do sistema",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma ferramenta de gerenciamento de defeitos?",
      respostas: [
        "Uma ferramenta para ajudar os desenvolvedores a introduzir mais bugs no software",
        "Uma ferramenta para documentar e acompanhar bugs encontrados durante os testes",
        "Uma ferramenta para automatizar a geração de casos de teste",
      ],
      correta: 1
    }
  ];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
}