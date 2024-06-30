let jogosAlugados = 0;

function quantidadeJogosAlugados() {                                    //exibi a quantidade de jogos alugados
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
    let gameSelecionado = document.getElementById(`game-${id}`);        //recebe como parâmetro o id relativo ao jogo
    let imagem = gameSelecionado.querySelector('.dashboard__item__img');
    let botao = gameSelecionado.querySelector('.dashboard__item__button');
    let nomeJogo = gameSelecionado.querySelector('.dashboard__item__name');
    //para devolver o jogo
    if (botao.classList.contains('dashboard__item__button--return')) {  //verifica se está classe se encontra entre as outras
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {  //confirma se o usuário quer seguir com ação e devolver o jogo
        botao.classList.remove('dashboard__item__button--return');      //altera a propriedade de estilo para o botão ficar como 'Alugado'
        imagem.classList.remove('dashboard__item__img--rented');        //imagem retorna a original
        botao.textContent = `Alugar`;
        jogosAlugados--;
        }
    //para alugar o jogo
    } else {                                                         
        botao.classList.add('dashboard__item__button--return');         //altera a propriedade de estilo para o botão ficar como 'Devolvido'
        imagem.classList.add('dashboard__item__img--rented');           //imagem fica opaca
        botao.textContent = `Devolver`;
        jogosAlugados++;
    }
    //apresenta quantos jogos foram alugados
    quantidadeJogosAlugados();

}

    // Inicializa a contagem considerando que os jogos já começam alugados
    document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    quantidadeJogosAlugados();
});