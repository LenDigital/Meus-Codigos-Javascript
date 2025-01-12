// Defina as categorias e links dos seus backlinks
const categories = {
    'Dicas e Tutoriais': 'https://www.lendigital.site/search/label/Dicas%20e%20Tutoriais',
    'Empreendedorismo': 'https://www.lendigital.site/search/label/Empreendedorismo',
    'Tendências e Notícias': 'https://www.lendigital.site/search/label/Tend%C3%AAncias%20e%20Not%C3%ADcias',
    'Tecnologia': 'https://www.lendigital.site/search/label/Tecnologia',
    'Trabalho Online': 'https://www.lendigital.site/search/label/Trabalho%20Online',
    'Redes Sociais': 'https://www.lendigital.site/search/label/Redes%20Sociais',
    'Marketing': 'https://www.lendigital.site/search/label/Marketing'
};

// Função para adicionar backlinks aos artigos
async function addBacklinks() {
    // Selecione todos os artigos existentes na página
    const posts = document.querySelectorAll('.post'); // Alterar o seletor conforme o layout do seu blog

    // Para cada artigo encontrado
    posts.forEach(post => {
        // Encontre o conteúdo do artigo (parágrafos)
        const paragraphs = post.querySelectorAll('p');

        if (paragraphs.length >= 2) {
            // Pegue a categoria do artigo (ajustar conforme o modelo do seu Blogger)
            const category = post.querySelector('.post-labels a');
            if (category) {
                const categoryName = category.innerText;

                // Se a categoria do artigo estiver nas categorias definidas
                if (categories[categoryName]) {
                    // Crie o elemento de backlink
                    const backlink = document.createElement('a');
                    backlink.href = categories[categoryName];
                    backlink.innerText = `Leia mais sobre ${categoryName}`;
                    backlink.style.display = 'block';
                    backlink.style.marginTop = '15px';

                    // Insira o backlink após o segundo parágrafo
                    paragraphs[1].after(backlink);
                }
            }
        }
    });
}

// Execute a função quando o conteúdo estiver totalmente carregado
document.addEventListener('DOMContentLoaded', addBacklinks);
