import { useState } from 'react'

export function MissaoPage({ sessao, onLogout }) {
  // Esta pequena interação já está pronta para deixar a área protegida divertida.
  const [mensagemRevelada, setMensagemRevelada] = useState(false)

  // Enquanto a autenticação não foi implementada, usamos um nome provisório.
  const nomeAgente = sessao?.nome ?? 'Visitante não identificado'

  return (
    <>
      <header className="topbar">
        <a className="brand" href="/missao" aria-label="Agência React — missão">
          <span className="brand__mark">AR</span>
          <span className="brand__text">
            <strong>Agência React</strong>
            <small>Canal confidencial</small>
          </span>
        </a>
        <span className="training-badge">acesso monitorado</span>
      </header>

      <main className="page mission-page">
        <section className="mission-header">
          <div>
            <span className="eyebrow">Acesso autorizado</span>
            <h1>Operação<br />Rota Protegida</h1>
          </div>
          <div className="agent-card">
            <small>Agente conectado</small>
            <strong>{nomeAgente}</strong>
            <span>NÍVEL DE ACESSO: REACT</span>
          </div>
        </section>

        <section className="mission-grid">
          <article className="briefing">
            <h2>Briefing da missão</h2>
            <p>O sistema só estará seguro quando os quatro testes abaixo passarem no navegador.</p>
            <div className="mission-steps">
              <div className="mission-step"><b>01</b><strong>Login válido</strong><span>A API reconhece o agente.</span></div>
              <div className="mission-step"><b>02</b><strong>Reload</strong><span>A sessão continua ativa.</span></div>
              <div className="mission-step"><b>03</b><strong>URL direta</strong><span>Visitantes voltam ao login.</span></div>
              <div className="mission-step"><b>04</b><strong>Logout</strong><span>A sessão desaparece de verdade.</span></div>
            </div>
          </article>

          <aside className="decoder">
            <h2>Mensagem interceptada</h2>
            <p>Decodifique a orientação final da operação.</p>
            {!mensagemRevelada ? (
              <div className="cipher">UkVBQ1QgR1VBUkQgIT09IEFQSSBTRUNVUklUWQ==</div>
            ) : (
              <div className="decoded-message">
                A rota protegida organiza a interface. O back-end ainda precisa proteger os dados.
              </div>
            )}
            <button className="button button--ghost" type="button" onClick={() => setMensagemRevelada((valor) => !valor)}>
              {mensagemRevelada ? 'Codificar novamente' : 'Decodificar mensagem'}
            </button>
          </aside>
        </section>

        <div className="mission-actions">
          <button className="button button--danger" type="button" onClick={onLogout}>Encerrar sessão</button>
        </div>
      </main>
    </>
  )
}
