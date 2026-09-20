Crie uma apresentação de aula em HTML utilizando Reveal.js

Não quero apenas um roteiro ou um prompt: quero os arquivos finais da apresentação, prontos para abrir no navegador, acompanhados de um pacote ZIP com todos os recursos necessários.

## 1. Informações da aula

- Instituição: Centro Universitário Maurício de Nassau — UNINASSAU.
- Professor: Prof. Diogo Rodrigues.
- Disciplina: FRONT-END FRAMEWORKS.
- Curso e período: [CURSO E PERÍODO].
- Número e título da aula: 6.
Se alguma informação secundária estiver ausente, adote uma solução coerente e informe a suposição. Pergunte antes apenas quando a ausência comprometer o conteúdo ou a identificação da aula.

## 2. Padrão visual

Preserve a identidade da apresentação de referência:

- Formato widescreen, com área-base de 1280 × 720.
- Azul-marinho como cor principal, azul de apoio, detalhes em vermelho e fundos claros nos slides de conteúdo.
- Paleta de referência: #081D36, #174A7E, #C8202F, #F7F8FA e #102B47.
- Trate essa paleta como o padrão visual adotado pelo professor, não como um manual oficial de marca.
- Tipografia sem serifa, títulos fortes, contraste elevado e bastante espaço em branco.
- Capa com fundo tecnológico ou imagem relacionada à disciplina, escurecida para preservar a legibilidade.
- Slides internos claros, com hierarquia visual consistente.
- Divisórias e fechamento podem usar fundo azul-marinho.
- Diagramas, fluxos, comparações e infográficos devem explicar o conteúdo, não apenas decorar.

Não invente nem imite o logotipo institucional. Utilize a identificação textual quando não houver um arquivo oficial fornecido.

Inclua na capa o nome completo do professor e os links:

LinkedIn:
https://www.linkedin.com/in/diogo-francisco-borba-rodrigues-3a1b5179/

GitHub:
https://github.com/DIOGOBRODRIGUES

Utilize ícones com rótulos acessíveis e mantenha esses links discretos.

## 3. Organização didática

Estruture a aula em uma sequência coerente:

1. Capa.
2. Situação-problema ou pergunta mobilizadora.
3. Objetivos de aprendizagem.
4. Retomada breve dos conhecimentos necessários.
5. Conceitos e termos técnicos.
6. Exemplos contextualizados.
7. Aplicação prática ou relação com o projeto da disciplina.
8. Atividade de consolidação.


Adapte essa sequência ao tema. Não force a mesma quantidade de slides para todas as aulas.

Para cada conceito importante:

- Apresente uma definição clara e tecnicamente correta.
- Explique por que ele importa.
- Inclua um exemplo próximo da realidade dos alunos.
- Diferencie-o de conceitos semelhantes, quando necessário.
- Explicite os termos técnicos antes de utilizá-los em atividades.

Evite slides que sejam apenas listas de palavras. Cada slide deve ter uma mensagem central compreensível.

Distribua conteúdos extensos em mais slides, sem reduzir excessivamente a fonte para fazê-los caber. Como referência, use títulos entre 40 e 56 px e textos entre 26 e 32 px. Questões extensas podem usar texto um pouco menor, mantendo boa leitura em projeção.

## 4. Imagens, diagramas e infográficos

Utilize recursos visuais quando ajudarem a compreender:

- Processos e etapas.
- Relações entre conceitos.
- Comparações.
- Estruturas e hierarquias.
- Fluxos de informação.
- Exemplos aplicados.

Prefira diagramas em HTML/CSS ou SVG quando isso facilitar a edição e garantir nitidez.

Não invente dados para criar gráficos. Exemplos com dados fictícios devem estar claramente identificados.

Use imagens próprias, fornecidas ou com licença adequada. Inclua os arquivos no pacote quando permitido e registre créditos quando necessários. Evite recursos visuais que dependam de serviços externos para aparecer.

## 5. Recursos nativos do Reveal.js

Explore os recursos nativos com finalidade didática, sem excesso de efeitos:

- Auto-Animate para conectar estados de um mesmo conceito, processo ou comparação.
- Fragments para apresentar etapas e argumentos progressivamente.
- Transições discretas e consistentes.
- Fundos diferenciados na capa, divisórias e fechamento.
- Barra de progresso e numeração de slides.
- Navegação por teclado e controles visíveis.
- Visão geral.
- Busca textual.
- Zoom.
- Notas do apresentador.
- Suporte a Markdown e destaque de sintaxe quando houver conteúdo que justifique esses recursos.

Carregue os plugins oficiais necessários sem duplicações.

Respeite a preferência do sistema por movimento reduzido. Não utilize reprodução automática de slides, áudio ou vídeo sem solicitação.

Inclua um menu discreto por blocos da aula, adaptado aos conteúdos, e um botão de ajuda com atalhos. O menu não deve se sobrepor ao conteúdo, à numeração ou aos controles, inclusive em janelas menores.

Prefira identificadores estáveis nos slides e seletores semânticos. Evite depender de números fixos de posição no JavaScript, para permitir reordenar e inserir slides com segurança.


## 6. Notas do professor

Inclua notas em `<aside class="notes">` nos slides relevantes, contendo:

- Orientação para a explicação oral.
- Exemplo complementar.
- Pergunta para estimular participação.
- Dificuldades ou confusões frequentes.
- Tempo estimado, quando útil.
- Fontes que sustentam afirmações técnicas específicas.

As notas devem complementar os slides, e não apenas repetir seus textos.

Não invente referências. Verifique informações que dependam de versões, normas, legislação ou atualizações recentes.

## 7. Estrutura técnica e entrega

Entregue uma pasta organizada contendo:

- `index.html`
- `assets/aula.css`
- `assets/aula.js`
- Imagens e outros recursos utilizados dentro de `assets/`.
- Biblioteca Reveal.js e plugins dentro de `vendor/`.
- Licenças das dependências.
- `LEIA-ME.txt` com instruções de abertura, edição e apresentação.

Requisitos:

- HTML em português do Brasil, com título, descrição e autoria.
- Caminhos relativos coerentes.
- Dependências locais com versão identificada.
- Conteúdo principal disponível diretamente no HTML.
- CSS e JavaScript separados e organizados.
- Nenhuma dependência obrigatória de CDN, Google Fonts ou conexão com a internet para apresentar os slides.
- Links externos podem exigir internet, mas isso não deve afetar a apresentação.
- Não remova nem sobrescreva a apresentação de referência.

Explique no LEIA-ME:

- Como abrir o arquivo.
- Atalhos principais.
- Como editar conteúdo e aparência.
- Como utilizar notas do apresentador por um servidor local, quando necessário.
- Como acessar o modo de impressão para PDF.
- Que o PDF pode incluir respostas e fragmentos revelados, exigindo revisão antes da distribuição aos alunos.

## 8. Verificação antes da entrega

Abra a apresentação no navegador e confira, quando o ambiente permitir:

- Carregamento dos arquivos locais.
- Ausência de textos cortados ou sobrepostos.
- Contraste e legibilidade.
- Encaixe dos slides mais densos.
- Questões completas.
- Revelação correta dos gabaritos.
- Menu, controles e links.
- Animações e fragments.
- Comportamento em tela de apresentação e em janela menor.

Corrija os problemas encontrados. Informe claramente qualquer recurso que não tenha sido testado.

Ao final, entregue o HTML e o ZIP completo, com uma explicação breve das melhorias e de como abrir a apresentação.