function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor digitado no campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
        // Se estiver vazio, exibe uma mensagem de erro na seção de resultados
        section.innerHTML = `<p class="mensagem-erro">Você precisa digitar o nome do prato ou da região.</p>`
        return;  // Interrompe a execução da função
    }

    // Converte o valor do campo de pesquisa para letras minúsculas para facilitar a comparação
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa variáveis vazias para armazenar os resultados, título, descrição e tags
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre os dados do array "dados" (um array com informações sobre pratos)
    for (let dado of dados) {
        // Converte o título, descrição e tags para letras minúsculas
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        // Verifica se o campo de pesquisa está contido no título, descrição ou tags
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Se houver uma correspondência, cria um novo bloco HTML para exibir o resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                    <!-- Título do prato como um link, abre em uma nova aba -->
                </h2>
                <p class="descricao-meta">${dado.descricao}.</p>
                <!-- Descrição do prato -->
                <a href="${dado.link}" target="_blank">Mais informações</a>
                <!-- Link para mais informações sobre o prato, abre em uma nova aba -->
            </div>
        `;
        }
    }

    // Se não houver resultados, exibe uma mensagem dizendo que nada foi encontrado
    if (!resultados) {
        resultados = `<p class="nenhum-resultado">Nada foi encontrado.</p>`;
    }

    // Exibe os resultados na seção correspondente
    section.innerHTML = resultados;
}



