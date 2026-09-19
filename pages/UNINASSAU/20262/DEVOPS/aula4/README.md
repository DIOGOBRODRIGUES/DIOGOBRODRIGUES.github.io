# GitHub Actions · Modelo do professor

46 slides em português, 16:9. Capa com instituição, nome do professor e links, tema **Simple**, destaque de código **GitHub** e a mesma estrutura HTML do modelo. Todos os arquivos ficam locais, inclusive os ícones; não há dependência de CDN. As fontes do tema usam alternativas do sistema para apresentação offline.

## Abrir

Extraia o ZIP e abra `index.html`. Para notas e todos os plugins, rode `python3 -m http.server 8000` na pasta e abra http://localhost:8000.

## Apresentar

- **Espaço / Shift+Espaço**: percorre toda a aula, incluindo fragmentos e slides verticais.
- **← / →**: troca de tópico; **↑ / ↓**: aprofundamento dentro do tópico. A seta direita pode pular os detalhes verticais: prefira Espaço na aula sequencial.
- **Esc**: panorama. **F**: tela cheia. **B**: pausa.
- **S**: janela do professor, com notas em todos os slides. Permita o popup.
- **Ctrl+Shift+F** (Windows/Linux) ou **Cmd+Shift+F** (macOS): busca.
- **Alt+clique**: zoom de uma região; repita para retornar.

## Recursos efetivamente usados

- Fragmentos para conceitos, etapas do desafio e respostas a perguntas.
- YAML com números de linha e destaque progressivo, por exemplo slides 7, 17 e 24.
- Auto-Animate nos slides 26–27: os jobs se reorganizam e o build aparece com dependências.
- Pilhas verticais para aprofundamento e práticas; atalhos internos no slide 2.
- Fundos por seção, contador nativo, hash e visão geral.
- Plugins Zoom, Notes, Search, Markdown e Highlight registrados como no modelo. Markdown está disponível para expansões; o conteúdo atual é HTML editável.

## Editar ou integrar

Edite `index.html` e `assets/aula.css`. Para usar a instalação Reveal.js já existente no seu site, substitua o prefixo `reveal.js/` em **todos** os imports pelo caminho correspondente. O modelo fornecido tinha profundidades relativas diferentes e Zoom duplicado: este arquivo usa caminhos consistentes e carrega cada plugin uma vez. O estilo de código usa o plugin oficial `highlight`, sem exigir `highlight_todos`.

O número da aula não foi informado: a capa mostra o título, e um comentário indica onde acrescentar a numeração.

Para PDF: http://localhost:8000/?print-pdf, imprimir em paisagem, com fundos e sem cabeçalhos. Fragmentos aparecem juntos, sem multiplicar páginas.

O projeto Node e os cinco workflows permanecem em `exemplos/`. Instruções e fontes técnicas no [GUIA-LAB.md](GUIA-LAB.md).

Referências Reveal.js: [fragmentos](https://revealjs.com/fragments/), [código](https://revealjs.com/code/), [Auto-Animate](https://revealjs.com/auto-animate/), [slides verticais](https://revealjs.com/vertical-slides/). Reveal.js usa licença MIT, incluída em `reveal.js/LICENSE`. Ícones Font Awesome Free sob as licenças indicadas em `assets/fontawesome/LICENSE.txt`.
