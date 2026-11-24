# Aula prática guiada — Agência React: Operação Rota Protegida

## Proposta da aula

A turma será uma equipe de agentes encarregada de corrigir uma aplicação que
publicou uma rota confidencial sem proteção. A interface já está pronta e chama
atenção visualmente. Durante a aula, professor e estudantes implementam juntos:

1. login por API;
2. feedback de envio e falha;
3. sessão no React;
4. persistência após reload;
5. rota protegida;
6. logout.

O código da versão completa possui comentários que podem ser lidos em voz alta.
Você não precisa apresentar uma explicação teórica longa antes de programar.

---

## Arquivos da pasta

- `agencia-react-inicial`: versão que será aberta no início da aula;
- `agencia-react-completa`: solução comentada para consulta do professor;
- `ROTEIRO-PROFESSOR.md`: sequência exata da aula.

Não distribua a versão completa antes da prática se quiser preservar as
previsões e descobertas.

---

## Preparação do professor

Antes da aula:

- execute `npm install` nas duas versões;
- execute `npm run dev` na versão completa;
- confirme o login com `emilys` e `emilyspass`;
- teste uma senha errada;
- abra `/missao` em uma janela anônima;
- confirme que o reload mantém a sessão;
- deixe a versão completa aberta apenas para consulta;
- disponibilize a versão inicial para as equipes.

Credenciais usadas na aula:

```text
usuário: emilys
senha: emilyspass
```

São dados públicos e fictícios do DummyJSON. Oriente os alunos a não usar senhas
pessoais.

---

## Papéis nos trios

Cada equipe terá três papéis:

- **Piloto:** digita o código.
- **Navegador:** lê o comentário seguinte e orienta o piloto.
- **Auditor:** prevê o comportamento e observa Console, Network e localStorage.

Troque os papéis depois de cada checkpoint.

---

## Cronograma de 150 minutos

| Período | Missão |
|---|---|
| 0–10 min | Apresentação da história e execução do projeto inicial |
| 10–20 min | Descoberta da falha: acesso direto a `/missao` |
| 20–40 min | Missão 1: serviço de autenticação |
| 40–65 min | Missão 2: formulário, carregamento e erro |
| 65–75 min | Checkpoint: login inválido e login válido |
| 75–100 min | Missão 3: estado de sessão em `App` |
| 100–115 min | Missão 4: persistência após reload |
| 115–130 min | Missão 5: rota protegida e logout |
| 130–145 min | Teste cruzado e desafio dos bugs |
| 145–150 min | Fechamento e relação com a AV2 |

---

# Abertura — existe uma falha no sistema

Abra a versão inicial e execute:

```bash
npm run dev
```

## Fala sugerida

> A Agência React publicou uma missão confidencial. Existe uma página de login,
> mas alguém com o endereço correto talvez consiga ignorá-la. Antes de abrir o
> código, vamos tentar invadir o sistema.

Peça aos estudantes que digitem `/missao` diretamente na URL.

## Perguntas

- O formulário de login protegeu a página?
- Esconder o link do menu impediria o acesso?
- Qual informação a aplicação precisa consultar antes de mostrar a missão?

## Respostas esperadas

- O login não protegeu a página.
- Esconder o link não impede que alguém digite a URL.
- A aplicação precisa saber se existe uma sessão autenticada.

Explique apenas isto:

```text
credenciais → API → sessão → decisão da rota
```

---

# Missão 1 — comunicar com a central

Abra `src/services/authService.js` e substitua o conteúdo pelo código abaixo.
Digite e leia os comentários com a turma.

```js
// A URL da API fica centralizada neste arquivo.
// Se existir VITE_API_URL no .env, usamos esse valor.
// Caso contrário, usamos o DummyJSON.
const API_URL = import.meta.env.VITE_API_URL || 'https://dummyjson.com'

export async function autenticar(username, password) {
  let response

  try {
    // POST é usado porque enviaremos dados no corpo da requisição.
    response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        // O servidor precisa saber que o corpo está em JSON.
        'Content-Type': 'application/json',
      },
      // JSON.stringify transforma o objeto JavaScript em texto JSON.
      body: JSON.stringify({ username, password }),
    })
  } catch {
    // O catch representa falha de comunicação com o servidor.
    throw new Error('A central está sem comunicação. Verifique a internet.')
  }

  // Tentamos converter o corpo da resposta para objeto JavaScript.
  const data = await response.json().catch(() => ({}))

  // fetch não considera automaticamente todo status HTTP um erro.
  if (!response.ok) {
    // Uma mensagem nossa mantém o idioma e não expõe detalhes desnecessários.
    throw new Error('Codinome ou código de acesso inválido.')
  }

  // Quando tudo funciona, devolvemos os dados para a página de login.
  return data
}
```

## Pare e pergunte

1. Por que usamos `POST` e não `GET`?
2. O que `JSON.stringify` produz?
3. Por que precisamos verificar `response.ok`?
4. Esse arquivo precisa conhecer `useState`?

## Respostas

1. Porque estamos enviando dados no corpo da requisição.
2. Uma representação textual em JSON.
3. Porque `fetch` pode receber uma resposta HTTP de erro sem entrar no `catch`.
4. Não. O serviço apenas se comunica com a API.

Não aprofunde JWT. Diga apenas:

> O servidor devolve uma credencial chamada token. Nesta aula, ela será parte da
> sessão. Na disciplina de Back-end, o servidor será responsável por validar essa
> credencial nos endpoints protegidos.

---

# Missão 2 — controlar o terminal de login

Abra `src/pages/LoginPage.jsx`.

## 2.1 Adicione os imports

No início do arquivo, mantenha `useState` e adicione:

```jsx
import { useNavigate } from 'react-router-dom'
import { autenticar } from '../services/authService'
```

Leia:

> A página importará o serviço para autenticar e o roteador para mudar de tela
> depois do sucesso.

## 2.2 Crie os estados de feedback

Depois dos estados `username` e `password`, digite:

```jsx
// enviando controla o botão enquanto esperamos a API.
const [enviando, setEnviando] = useState(false)

// erro começa vazio e recebe uma mensagem quando algo falha.
const [erro, setErro] = useState('')

// useNavigate permite abrir /missao depois do sucesso.
const navigate = useNavigate()
```

Pergunte:

> Por que não basta ter apenas o estado do usuário e da senha?

Resposta esperada: a interface também precisa representar o andamento e a falha
da operação.

## 2.3 Substitua `handleSubmit`

```jsx
async function handleSubmit(event) {
  // Impede o formulário de recarregar o documento.
  event.preventDefault()

  // Evitamos chamar a API quando os campos estão vazios.
  if (!username.trim() || !password) {
    setErro('Informe o codinome e o código de acesso.')
    return
  }

  // Preparamos a interface para uma nova tentativa.
  setEnviando(true)
  setErro('')

  try {
    // Esperamos o serviço devolver os dados do usuário autenticado.
    const authData = await autenticar(username.trim(), password)

    // App receberá os dados e criará a sessão.
    onLogin(authData)

    // Depois do sucesso, abrimos a rota confidencial.
    navigate('/missao', { replace: true })
  } catch (error) {
    // A mensagem produzida pelo serviço aparece na interface.
    setErro(error.message)
  } finally {
    // finally sempre libera o botão, com sucesso ou falha.
    setEnviando(false)
  }
}
```

## 2.4 Mostre a mensagem de erro

Antes do botão do formulário, adicione:

```jsx
{erro && <p className="error-message" role="alert">{erro}</p>}
```

## 2.5 Transforme o botão em indicador de estado

Substitua o botão por:

```jsx
<button className="button" type="submit" disabled={enviando}>
  {enviando ? 'Verificando credenciais…' : 'Iniciar autenticação'}
</button>
```

Nos dois inputs, adicione:

```jsx
disabled={enviando}
```

## Teste deliberado

Primeiro use:

```text
usuário: emilys
senha: senha-errada
```

Depois use:

```text
usuário: emilys
senha: emilyspass
```

Neste momento o serviço deve funcionar, mas `App` ainda exibirá o alerta da
versão inicial. Isso é esperado.

## Fala sugerida

> Já conseguimos provar que a API reconhece ou rejeita uma credencial. Ainda não
> temos uma sessão. Login é o evento; sessão é o estado que continua depois dele.

Troque os papéis dos integrantes.

---

# Missão 3 — criar a sessão

Abra `src/App.jsx`.

## 3.1 Importe `useState`

```jsx
import { useState } from 'react'
```

## 3.2 Crie a chave e a leitura segura

Antes de `App`, digite:

```jsx
// Uma chave específica evita conflito com outros dados do localStorage.
const SESSION_KEY = 'agencia-react:sessao'

function lerSessaoSalva() {
  try {
    // localStorage devolve texto ou null.
    const storedValue = localStorage.getItem(SESSION_KEY)
    if (!storedValue) return null

    // JSON.parse reconstrói o objeto salvo.
    const parsedSession = JSON.parse(storedValue)

    // Uma sessão sem token está incompleta.
    if (!parsedSession?.accessToken) {
      localStorage.removeItem(SESSION_KEY)
      return null
    }

    return parsedSession
  } catch {
    // JSON inválido não pode quebrar a aplicação.
    localStorage.removeItem(SESSION_KEY)
    return null
  }
}
```

## 3.3 Substitua `const sessao = null`

```jsx
// O inicializador funcional lê o armazenamento apenas na criação do estado.
const [sessao, setSessao] = useState(lerSessaoSalva)
```

## 3.4 Substitua a função `entrar`

```jsx
function entrar(authData) {
  // Criamos uma sessão mínima. A senha não é copiada.
  const minimalSession = {
    id: authData.id,
    nome: `${authData.firstName} ${authData.lastName ?? ''}`.trim(),
    username: authData.username,
    accessToken: authData.accessToken,
  }

  // O estado atualiza a tela atual.
  setSessao(minimalSession)

  // localStorage permite recuperar a sessão depois do reload.
  localStorage.setItem(SESSION_KEY, JSON.stringify(minimalSession))
}
```

## Pergunta antes do teste

> Por que não salvamos `password` dentro de `minimalSession`?

Resposta: a senha não é necessária depois da autenticação e sua exposição teria
um impacto maior.

Faça o login e abra DevTools → Application → Local Storage. Mostre que a chave
existe e que não há senha.

Atualize a página. A sessão deve continuar existindo.

---

# Missão 4 — impedir a invasão pela URL

Abra `src/components/RotaProtegida.jsx` e substitua o conteúdo:

```jsx
import { Navigate } from 'react-router-dom'

export function RotaProtegida({ sessao, children }) {
  // Sem sessão, a página confidencial não é renderizada.
  if (!sessao) {
    return <Navigate to="/login" replace />
  }

  // Com sessão, devolvemos o componente colocado dentro da proteção.
  return children
}
```

## Teste

1. Apague `agencia-react:sessao` no DevTools.
2. Digite `/missao` diretamente.
3. Confirme que a URL volta para `/login`.
4. Faça login novamente.
5. Confirme que `/missao` agora é exibida.

## Fala essencial

> Este componente protege o fluxo da interface. Ele não protege os dados do
> servidor. Uma pessoa ainda pode chamar a API por outro programa. O back-end
> precisa validar a credencial em cada endpoint protegido.

---

# Missão 5 — encerrar a sessão de verdade

Em `App.jsx`, substitua a função `sair`:

```jsx
function sair() {
  // O estado fecha imediatamente a área protegida.
  setSessao(null)

  // O armazenamento precisa ser apagado para o reload não restaurar a sessão.
  localStorage.removeItem(SESSION_KEY)
}
```

Agora ajuste a rota `/` para escolher o destino:

```jsx
<Route
  path="/"
  element={<Navigate to={sessao ? '/missao' : '/login'} replace />}
/>
```

E ajuste a rota `/login`:

```jsx
<Route
  path="/login"
  element={
    sessao
      ? <Navigate to="/missao" replace />
      : <LoginPage onLogin={entrar} />
  }
/>
```

## Teste final da missão

Execute exatamente esta sequência:

```text
login válido
→ abrir /missao
→ atualizar a página
→ decodificar a mensagem
→ clicar em Encerrar sessão
→ atualizar novamente
→ tentar abrir /missao diretamente
```

Resultado esperado: depois do logout, o usuário não retorna à missão nem com
reload nem digitando a URL.

---

# Teste cruzado entre equipes

Uma equipe testa o computador da outra sem receber explicações.

## Cartão de teste

- [ ] Campos vazios apresentam orientação.
- [ ] Credencial errada apresenta erro sem quebrar a tela.
- [ ] Credencial válida abre a missão.
- [ ] Reload mantém a sessão.
- [ ] Logout remove a sessão.
- [ ] `/missao` sem sessão volta ao login.
- [ ] A senha não aparece no localStorage.
- [ ] Um integrante explica por que a rota protegida não substitui o back-end.

---

# Desafio divertido: encontre o agente infiltrado

Entregue um destes bugs para cada equipe diagnosticar:

## Bug A — login executa durante a renderização

```jsx
<LoginPage onLogin={entrar()} />
```

Correção:

```jsx
<LoginPage onLogin={entrar} />
```

## Bug B — objeto salvo sem conversão

```js
localStorage.setItem(SESSION_KEY, minimalSession)
```

Correção:

```js
localStorage.setItem(SESSION_KEY, JSON.stringify(minimalSession))
```

## Bug C — logout só visual

```js
function sair() {
  setSessao(null)
}
```

Pergunte o que acontece depois do reload. Correção: remover também a chave do
localStorage.

## Bug D — proteção invertida

```jsx
if (sessao) return <Navigate to="/login" replace />
```

Correção:

```jsx
if (!sessao) return <Navigate to="/login" replace />
```

---

# Plano B sem internet

Se a API estiver indisponível, substitua temporariamente `authService.js` por:

```js
export async function autenticar(username, password) {
  // A pequena espera permite continuar demonstrando o estado "enviando".
  await new Promise((resolve) => setTimeout(resolve, 700))

  if (username !== 'agente' || password !== 'react2026') {
    throw new Error('Codinome ou código de acesso inválido.')
  }

  return {
    id: 99,
    firstName: 'Agente',
    lastName: 'React',
    username,
    accessToken: 'token-local-de-treinamento',
  }
}
```

Credenciais do modo local:

```text
usuário: agente
senha: react2026
```

Explique que essa função é somente uma simulação para a aula e não autentica um
usuário real.

---

# Fechamento

Peça que a turma complete oralmente:

```text
O formulário coleta __________.
A API valida __________.
O estado React representa __________.
O localStorage permite __________.
A rota protegida decide __________.
O back-end precisa garantir __________.
```

Respostas esperadas:

```text
credenciais
as credenciais
a sessão atual
a restauração depois do reload
se a página pode ser renderizada
a segurança dos dados e endpoints
```

## Critério de saída

Cada trio deve demonstrar, sem consultar outro grupo:

1. falha de login;
2. sucesso de login;
3. reload com sessão;
4. acesso direto bloqueado;
5. logout definitivo;
6. ausência da senha no armazenamento.

