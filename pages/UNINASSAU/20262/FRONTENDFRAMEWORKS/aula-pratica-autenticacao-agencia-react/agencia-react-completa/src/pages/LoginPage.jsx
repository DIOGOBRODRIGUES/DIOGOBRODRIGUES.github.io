import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { autenticar } from '../services/authService'

export function LoginPage({ onLogin }) {
  // Estados dos campos controlados do formulário.
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // enviando controla o texto e o bloqueio temporário do botão.
  const [enviando, setEnviando] = useState(false)

  // erro começa vazio e recebe uma mensagem quando algo falha.
  const [erro, setErro] = useState('')

  // useNavigate permite mudar de rota depois que o login for confirmado.
  const navigate = useNavigate()

  async function handleSubmit(event) {
    // Impede o envio tradicional do formulário, que recarregaria a página.
    event.preventDefault()

    // Validação simples antes de chamar a API.
    if (!username.trim() || !password) {
      setErro('Informe o codinome e o código de acesso.')
      return
    }

    // Preparamos a interface para uma nova tentativa.
    setEnviando(true)
    setErro('')

    try {
      // A execução espera a resposta do serviço de autenticação.
      const authData = await autenticar(username.trim(), password)

      // App recebe os dados e cria a sessão sem armazenar a senha.
      onLogin(authData)

      // replace evita que o botão Voltar retorne ao formulário após o login.
      navigate('/missao', { replace: true })
    } catch (error) {
      // O serviço já produziu uma mensagem adequada para a interface.
      setErro(error.message)
    } finally {
      // finally executa tanto no sucesso quanto na falha.
      setEnviando(false)
    }
  }

  return (
    <>
      <header className="topbar">
        <a className="brand" href="/login" aria-label="Agência React — início">
          <span className="brand__mark">AR</span>
          <span className="brand__text">
            <strong>Agência React</strong>
            <small>Divisão de interfaces</small>
          </span>
        </a>
        <span className="training-badge">ambiente de treinamento</span>
      </header>

      <main className="page login-layout">
        <section className="hero-copy">
          <span className="eyebrow">Operação Rota Protegida</span>
          <h1>A missão começa no <em>login.</em></h1>
          <p>
            Uma rota confidencial foi publicada sem proteção. A equipe precisa autenticar o agente,
            preservar a sessão e bloquear visitantes não identificados.
          </p>
          <div className="signal-list" aria-label="Objetivos da missão">
            <span><i></i> Identificar o agente usando uma API</span>
            <span><i></i> Manter a sessão após o reload</span>
            <span><i></i> Proteger o acesso direto pela URL</span>
          </div>
        </section>

        <section className="terminal" aria-labelledby="login-title">
          <div className="terminal__bar" aria-hidden="true">
            <i></i><i></i><i></i><span>auth-terminal.exe</span>
          </div>
          <h2 id="login-title">Identificação do agente</h2>
          <p className="terminal__subtitle">Use apenas as credenciais públicas de treinamento.</p>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="username">Codinome</label>
              <input
                id="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Digite o usuário"
                autoComplete="username"
                disabled={enviando}
              />
            </div>

            <div className="field">
              <label htmlFor="password">Código de acesso</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Digite a senha"
                autoComplete="current-password"
                disabled={enviando}
              />
            </div>

            {/* role="alert" ajuda leitores de tela a anunciar o erro. */}
            {erro && <p className="error-message" role="alert">{erro}</p>}

            <button className="button" type="submit" disabled={enviando}>
              {enviando ? 'Verificando credenciais…' : 'Iniciar autenticação'}
            </button>
          </form>

          <div className="credentials">
            <span>Credenciais fictícias</span>
            <code>usuário: emilys</code>
            <code>senha: emilyspass</code>
          </div>
        </section>
      </main>
    </>
  )
}
