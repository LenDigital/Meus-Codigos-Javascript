<script>
// Função para adicionar backlinks automáticos com base na categoria
    async function addBacklinks() {
    // Obter a categoria do artigo atual
    const category = document.body.getAttribute('data-category'); // Ajustar para o atributo correto no seu template

    if (!category) return; // Se a categoria não estiver definida, não faz nada

    // URL do feed do Blogger para obter os artigos da mesma categoria
    const feedUrl = `/feeds/posts/default/-/${encodeURIComponent(category)}?alt=json`;

    try {
        // Busca os dados do feed do Blogger
        const response = await fetch(feedUrl);
    const data = await response.json();

    // Obter os artigos do feed
    const entries = data.feed.entry || [];

        // Verificar se há artigos na categoria
        if (entries.length > 0) {
            // Seleciona o local onde os backlinks serão inseridos
            const contentElement = document.querySelector('.post-body');
    if (!contentElement) return;

    // Cria o bloco de backlinks
    const backlinksContainer = document.createElement('div');
    backlinksContainer.style = "margin-top: 20px; padding: 15px; background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 5px;";

    const titleElement = document.createElement('h3');
    titleElement.innerText = 'Leia também:';
    backlinksContainer.appendChild(titleElement);

            // Adicionar até 2 artigos da mesma categoria
            entries.slice(0, 2).forEach(entry => {
                const linkTitle = entry.title.$t;
                const linkUrl = entry.link.find(link => link.rel === "alternate").href;

    const backlinkElement = document.createElement('p');
    backlinkElement.innerHTML = `<a href="${linkUrl}" target="_blank" style="color: #4CAF50; text-decoration: none; font-weight: bold;">${linkTitle}</a>`;
    backlinksContainer.appendChild(backlinkElement);
            });

    // Insere o bloco de backlinks dentro do artigo, logo após o primeiro parágrafo
    const firstParagraph = contentElement.querySelector('p');
    if (firstParagraph) {
        contentElement.insertBefore(backlinksContainer, firstParagraph.nextSibling);
            }
        }
    } catch (error) {
        console.error("Erro ao carregar os backlinks:", error);
    }
}

    // Chama a função para adicionar os backlinks quando o conteúdo for carregado
    document.addEventListener('DOMContentLoaded', function () {
        addBacklinks();
});
</script>
