import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main className="page not-found">
      <span className="eyebrow">Coordenada inválida</span>
      <h1>404</h1>
      <p>A rota informada não pertence a esta operação.</p>
      <Link className="button" to="/login">Voltar ao terminal</Link>
    </main>
  )
}
