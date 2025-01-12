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
    setTimeout(() => {
        const posts = document.querySelectorAll('.post-body'); // Seleciona o corpo do artigo

        posts.forEach(post => {
            const paragraphs = post.querySelectorAll('p'); // Encontra os parágrafos no artigo
            if (paragraphs.length >= 2) {
                const category = post.querySelector('.post-labels a'); // Encontra a categoria do post
                if (category) {
                    const categoryName = category.innerText;
                    if (categories[categoryName]) {
                        const backlink = document.createElement('a');
                        backlink.href = categories[categoryName];
                        backlink.innerText = `Leia mais sobre ${categoryName}`;
                        backlink.style.display = 'block';
                        backlink.style.marginTop = '15px';
                        paragraphs[1].after(backlink); // Adiciona o backlink após o segundo parágrafo
                    }
                }

                // Agora vamos tentar adicionar o título e a descrição do artigo
                const title = document.querySelector('.post-title'); // Título do artigo
                const description = post.querySelector('.post-snippet'); // Descrição do artigo
                const image = post.querySelector('img'); // Imagem do artigo (primeira imagem encontrada)

                if (title && description) {
                    const titleText = title.innerText || 'Carregando título...'; // Título do artigo
                    const descriptionText = description.innerText || 'Carregando descrição...'; // Descrição do artigo
                    const imageUrl = image ? image.src : ''; // URL da imagem do artigo

                    // Exibe as informações (caso esteja configurado para isso)
                    console.log("Título:", titleText);
                    console.log("Descrição:", descriptionText);
                    console.log("Imagem:", imageUrl);

                    // Exibe as informações na página, se necessário
                    const infoBox = document.createElement('div');
                    infoBox.innerHTML = `
              <h3>${titleText}</h3>
              <p>${descriptionText}</p>
              <img src="${imageUrl}" alt="${titleText}" style="max-width: 100%; height: auto;">
            `;
                    post.prepend(infoBox); // Adiciona ao início do artigo
                }
            }
        });
    }, 1000); // Aguarda 1 segundo para garantir que todos os artigos estejam carregados
}

// Chama a função para adicionar os backlinks
addBacklinks();
