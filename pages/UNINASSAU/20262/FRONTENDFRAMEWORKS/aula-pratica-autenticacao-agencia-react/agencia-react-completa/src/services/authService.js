// A URL da API fica centralizada neste arquivo.
// Se existir VITE_API_URL no arquivo .env, usamos esse valor.
// Caso contrário, usamos o DummyJSON como API didática padrão.
const API_URL = import.meta.env.VITE_API_URL || 'https://dummyjson.com'

export async function autenticar(username, password) {
  let response

  try {
    // POST é usado porque precisamos enviar as credenciais no corpo da requisição.
    response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        // Este cabeçalho informa ao servidor que o corpo está em JSON.
        'Content-Type': 'application/json',
      },
      // JSON.stringify transforma o objeto JavaScript em texto JSON.
      body: JSON.stringify({ username, password }),
    })
  } catch {
    // fetch entra no catch quando não consegue alcançar o servidor.
    // Isso é diferente de receber uma resposta HTTP de erro.
    throw new Error('A central está sem comunicação. Verifique a internet e tente novamente.')
  }

  // Tentamos ler o corpo como JSON.
  // O catch interno evita que uma resposta vazia quebre a aplicação.
  const data = await response.json().catch(() => ({}))

  // fetch pode resolver a Promise mesmo quando o servidor responde com erro.
  // Por isso verificamos response.ok antes de considerar o login válido.
  if (!response.ok) {
    // Não exibimos a mensagem técnica da API porque ela pode estar em outro idioma.
    throw new Error('Codinome ou código de acesso inválido.')
  }

  // A página de login receberá os dados do usuário e os tokens retornados.
  return data
}
