<script>
    function addBacklinks() {
    var backlinks = {
        "Dicas e Tutoriais": [
    {title: "Dicas e Tutoriais - Aprenda Novas Habilidades", url: "https://www.lendigital.site/search/label/Dicas%20e%20Tutoriais" }
    ],
    "Empreendedorismo": [
    {title: "Empreendedorismo - Como Começar seu Negócio", url: "https://www.lendigital.site/search/label/Empreendedorismo" }
    ]
        // Continue com outras categorias...
    };

    // Obter a categoria do artigo
    var category = document.body.getAttribute('data-category');
    if (!category || !backlinks[category]) return;

    // Selecionar o local onde os backlinks serão inseridos
    var contentElement = document.querySelector('.post-body');
    if (!contentElement) return;

    // Criar o bloco de backlinks
    var backlinksContainer = document.createElement('div');
    backlinksContainer.style = "margin-top: 20px; padding: 15px; background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 5px;";

    var titleElement = document.createElement('h3');
    titleElement.innerText = 'Leia também:';
    backlinksContainer.appendChild(titleElement);

    backlinks[category].forEach(function(link) {
        var backlinkElement = document.createElement('p');
    backlinkElement.innerHTML = '<a href="' + link.url + '" target="_blank" style="color: #4CAF50; text-decoration: none; font-weight: bold;">' + link.title + '</a>';
    backlinksContainer.appendChild(backlinkElement);
    });

    // Inserir após o segundo parágrafo
    var paragraphs = contentElement.querySelectorAll('p');
    if (paragraphs.length >= 2) {
        var secondParagraph = paragraphs[1];
    contentElement.insertBefore(backlinksContainer, secondParagraph.nextSibling);
    }
}
    document.addEventListener('DOMContentLoaded', addBacklinks);
</script>
