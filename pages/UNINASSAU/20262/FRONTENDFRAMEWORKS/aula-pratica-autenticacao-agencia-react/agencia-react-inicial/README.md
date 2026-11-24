# Agência React — versão inicial

Projeto inicial da aula prática **Operação Rota Protegida**.

O visual e os componentes principais já estão prontos. A autenticação, a sessão,
a proteção da rota e o logout serão implementados ao vivo com a turma.

## Executar

```bash
npm install
npm run dev
```

Abra o endereço informado pelo Vite.

## Falha intencional inicial

Digite `/missao` diretamente na URL. A página será aberta sem login porque a
proteção ainda não foi implementada.

## Arquivos que serão modificados

- `src/services/authService.js`
- `src/pages/LoginPage.jsx`
- `src/App.jsx`
- `src/components/RotaProtegida.jsx`

Use o arquivo `../ROTEIRO-PROFESSOR.md` para conduzir a implementação.

