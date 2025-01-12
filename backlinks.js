// Definição das categorias e links
const categories = {
    'Dicas e Tutoriais': 'https://www.lendigital.site/search/label/Dicas%20e%20Tutoriais',
    'Empreendedorismo': 'https://www.lendigital.site/search/label/Empreendedorismo',
    'Tendências e Notícias': 'https://www.lendigital.site/search/label/Tend%C3%AAncias%20e%20Not%C3%ADcias',
    'Tecnologia': 'https://www.lendigital.site/search/label/Tecnologia',
    'Trabalho Online': 'https://www.lendigital.site/search/label/Trabalho%20Online',
    'Redes Sociais': 'https://www.lendigital.site/search/label/Redes%20Sociais',
    'Marketing': 'https://www.lendigital.site/search/label/Marketing'
};

// Função para adicionar backlinks automaticamente
async function addBacklinks() {
    // Espera 1 segundo para garantir que os artigos estejam carregados
    setTimeout(() => {
        // Seleciona todos os artigos no corpo do post
        const posts = document.querySelectorAll('.post-body');

        posts.forEach(post => {
            // Encontra todos os parágrafos do artigo
            const paragraphs = post.querySelectorAll('p');

            if (paragraphs.length >= 2) {
                // Encontra o link da categoria do post
                const category = post.querySelector('.post-labels a');

                if (category) {
                    const categoryName = category.innerText;

                    // Verifica se a categoria do post está definida no objeto 'categories'
                    if (categories[categoryName]) {
                        // Cria o backlink
                        const backlink = document.createElement('a');
                        backlink.href = categories[categoryName];
                        backlink.innerText = `Leia mais sobre ${categoryName}`;
                        backlink.style.display = 'block';
                        backlink.style.marginTop = '15px';

                        // Adiciona o backlink após o segundo parágrafo
                        paragraphs[1].after(backlink);
                    }
                }
            }
        });
    }, 1000); // Aguarda 1 segundo para garantir que todos os artigos estejam carregados
}

// Chama a função para adicionar os backlinks
addBacklinks();
