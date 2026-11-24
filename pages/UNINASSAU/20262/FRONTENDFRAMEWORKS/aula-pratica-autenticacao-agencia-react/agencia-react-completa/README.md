# Agência React — solução completa

Solução comentada da aula prática **Operação Rota Protegida**.

## Executar

```bash
npm install
npm run dev
```

## Credenciais públicas de treinamento

```text
usuário: emilys
senha: emilyspass
```

Essas credenciais pertencem à API fictícia DummyJSON. Os alunos não devem usar
senhas pessoais.

## Testes manuais

1. Tente abrir `/missao` sem login.
2. Tente entrar com senha errada.
3. Entre com a credencial de treinamento.
4. Atualize a página na rota `/missao`.
5. Encerre a sessão.
6. Tente abrir `/missao` novamente.

## Conceitos demonstrados

- `POST` com `fetch`;
- `response.ok`;
- estados de envio e erro;
- sessão mínima sem senha;
- persistência com `localStorage`;
- rota protegida com `Navigate`;
- logout;
- limite entre proteção de interface e segurança do servidor.

Este projeto é didático. Armazenar token no `localStorage` permite demonstrar a
persistência da sessão, mas sistemas reais podem usar cookies `HttpOnly` e
outras medidas definidas pelo back-end.

