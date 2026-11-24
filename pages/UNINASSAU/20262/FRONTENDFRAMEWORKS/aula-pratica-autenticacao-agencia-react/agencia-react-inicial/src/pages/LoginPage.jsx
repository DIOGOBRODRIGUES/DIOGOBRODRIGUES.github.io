import { useState } from 'react'

export function LoginPage({ onLogin }) {
  // Os campos já são controlados para concentrarmos a aula na autenticação.
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // PASSO 2 DA AULA:
  // Criaremos os estados de envio e erro e chamaremos o serviço de autenticação.
  function handleSubmit(event) {
    event.preventDefault()
    onLogin()
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
              />
            </div>

            <button className="button" type="submit">Iniciar autenticação</button>
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
