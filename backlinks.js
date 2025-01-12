// Função de exemplo para depuração
async function addBacklinks() {
    try {
        // Aguarda 1 segundo para garantir que os dados carreguem
        setTimeout(function () {
            // Selecione todos os artigos
            const posts = document.querySelectorAll('.post-body');

            posts.forEach(function (post) {
                // Verifica os parágrafos do post
                const paragraphs = post.querySelectorAll('p');

                if (paragraphs.length >= 2) {
                    // Defina os links de exemplo para as categorias
                    const categories = {
                        'Dicas e Tutoriais': 'https://www.lendigital.site/search/label/Dicas%20e%20Tutoriais',
                        'Empreendedorismo': 'https://www.lendigital.site/search/label/Empreendedorismo'
                    };

                    // Obtém a categoria do post
                    const category = post.querySelector('.post-labels a');
                    if (category) {
                        const categoryName = category.innerText;
                        // Verifica se a categoria existe nos links definidos
                        if (categories[categoryName]) {
                            const backlink = document.createElement('a');
                            backlink.href = categories[categoryName];
                            backlink.innerText = 'Leia mais sobre ' + categoryName;
                            paragraphs[1].after(backlink); // Adiciona o backlink após o segundo parágrafo
                        }
                    }
                }
            });
        }, 1000); // Timeout de 1 segundo
    } catch (error) {
        console.error("Erro no código:", error);
    }
}

// Chama a função de backlinks
addBacklinks();
