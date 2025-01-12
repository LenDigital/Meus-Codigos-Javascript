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
    setTimeout(function () {
        const posts = document.querySelectorAll('.post-body'); // Seleciona o corpo do artigo

        posts.forEach(function (post) {
            const paragraphs = post.querySelectorAll('p'); // Encontra os parágrafos no artigo

            if (paragraphs.length >= 2) {
                const category = post.querySelector('.post-labels a'); // Encontra a categoria do post

                if (category) {
                    const categoryName = category.innerText;
                    if (categories[categoryName]) {
                        const backlink = document.createElement('a');
                        backlink.href = categories[categoryName];
                        backlink.innerText = 'Leia mais sobre ' + categoryName;
                        backlink.style.display = 'block';
                        backlink.style.marginTop = '15px';
                        paragraphs[1].after(backlink); // Adiciona o backlink após o segundo parágrafo
                    }
                }

                // Tenta obter o título do artigo
                const titleElement = post.querySelector('.post-title'); // Título do artigo
                const titleText = titleElement ? titleElement.innerText : 'Título não encontrado';

                // Tenta obter a descrição do artigo
                const descriptionElement = post.querySelector('.post-snippet') || post.querySelector('.post-body'); // Descrição do artigo
                const descriptionText = descriptionElement ? descriptionElement.innerText : 'Descrição não encontrada';

                // Tenta obter a imagem do artigo
                const imageElement = post.querySelector('img'); // Primeira imagem encontrada
                const imageUrl = imageElement ? imageElement.src : '';

                // Exibe as informações no console para debug
                console.log("Título:", titleText);
                console.log("Descrição:", descriptionText);
                console.log("Imagem:", imageUrl);

                // Adiciona as informações ao início do artigo
                const infoBox = document.createElement('div');
                infoBox.innerHTML = `
            <h3>${titleText}</h3>
            <p>${descriptionText}</p>
            ${imageUrl ? `<img src="${imageUrl}" alt="${titleText}" style="max-width: 100%; height: auto;">` : ''}
          `;
                post.prepend(infoBox); // Adiciona ao início do artigo
            }
        });
    }, 1000); // Aguarda 1 segundo para garantir que todos os artigos estejam carregados
}

// Chama a função para adicionar os backlinks
addBacklinks();
