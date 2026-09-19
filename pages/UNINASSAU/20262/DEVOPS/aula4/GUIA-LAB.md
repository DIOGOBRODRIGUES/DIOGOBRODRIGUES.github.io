# DevOps Tools · GitHub Actions

46 slides em português, 16:9, com notas do professor em todos os slides. Identidade inspirada nas cores da UNINASSAU, sem uso de logotipo oficial. Reveal.js 5.2.1 incluído localmente sob licença MIT. Não há CDN, fontes remotas ou ferramenta proprietária necessária.

## Abrir e apresentar

1. Extraia todo o ZIP, preservando `index.html` e a pasta `assets` juntos.
2. Abra `index.html` no navegador. A apresentação funciona offline.
3. Setas ou Espaço avançam, Shift+Espaço volta, Esc mostra o panorama, F alterna tela cheia e B pausa a tela.
4. Para a visão do apresentador com notas, execute `python3 -m http.server 8000` nesta pasta e abra http://localhost:8000. Pressione **S** e permita o popup. O servidor é local e não precisa de internet. A janela de notas pode ser limitada ao abrir por `file://`.
5. Para PDF pelo navegador: abra http://localhost:8000/?print-pdf, imprima em paisagem, sem cabeçalhos/rodapés e com gráficos de fundo.

Navegação horizontal por tópicos e vertical para aprofundamentos e laboratórios. Use Espaço para percorrer toda a sequência. Links diretos como `#/slide-24` levam ao slide desejado. Notas ficam ocultas na projeção. Para editar o deck, altere o HTML e `assets/aula.css` em qualquer editor.

## Prática

Requer conta GitHub, repositório gravável e Actions habilitado. Internet é necessária para executar os workflows no GitHub, mas não para apresentar os slides. Node.js 22 e npm são necessários apenas para executar o projeto localmente.

- `exemplos/workflows/01-primeiro.yml`: primeiro contato.
- `02-pratica.yml`: informações do runner e arquivos.
- `03-node-ci.yml`: instalação e testes.
- `04-ci-completa.yml`: lint de sintaxe e testes paralelos, build dependente, upload e download.
- `05-gate.yml`: execução manual com environment production. Apenas imprime mensagem, sem deploy.
- `exemplos/projeto-node/`: projeto completo, lockfile e workflow final em `.github/workflows/ci.yml`.

Copie **o conteúdo** de `projeto-node` para a raiz do repositório, incluindo `.github` (pasta oculta). Na evolução guiada, substitua `.github/workflows/ci.yml` por uma versão didática de cada vez. Não copie todos os workflows ao mesmo tempo. A branch usada é `main`; adapte os filtros se a sua branch tiver outro nome.

Execute `npm ci`, `npm run lint`, `npm test` e `npm run build`. `lint` faz verificação de sintaxe com `node --check`; o build copia arquivos para `dist/`. O projeto usa os testes nativos do Node e não tem dependências externas. Para falha real, altere `a + b` para `a - b`, observe os testes e restaure a soma. Não deixe o step propositalmente inválido no workflow final.

Para o gate, crie o environment `production` e configure required reviewers em Settings → Environments antes de acionar `05-gate.yml` na main. Só declarar environment no YAML não exige aprovação. A disponibilidade de proteções varia por plano/visibilidade; nos planos Free, Pro e Team, required reviewers estão disponíveis para repositórios públicos. Se houver bloqueio de autoaprovação, outra pessoa deve aprovar. O exemplo de secret exige criar API_TOKEN com valor fictício e não faz parte da CI final.

## Referências e versões

Exemplos destinados a github.com e runners hospedados Linux. As referências major são escolhas didáticas, não uma indicação de versão mais recente; em produção, avalie fixar Actions por SHA revisado. Artefacts v4 não se destinam a GitHub Enterprise Server. Consulte políticas de Actions e cotas da sua conta antes de turmas grandes.

- [Sintaxe de workflows](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax)
- [Eventos](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows)
- [checkout v4](https://github.com/actions/checkout/tree/v4)
- [setup-node v6](https://github.com/actions/setup-node/tree/v6)
- [upload-artifact v4](https://github.com/actions/upload-artifact/tree/v4)
- [download-artifact v4](https://github.com/actions/download-artifact/tree/v4)
- [Secrets](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets)
- [Environments e proteções](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments)
- [Notas do apresentador Reveal.js](https://revealjs.com/speaker-view/)

A aula tem previsão de 180 minutos, incluindo prática e desafio. Distribuição detalhada nas notas do slide 2. Os exemplos não publicam aplicação nem provisionam infraestrutura.
