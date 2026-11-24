import { Navigate } from 'react-router-dom'

export function RotaProtegida({ sessao, children }) {
  // Sem sessão, a página confidencial não é renderizada.
  // Navigate troca a rota atual por /login.
  if (!sessao) {
    return <Navigate to="/login" replace />
  }

  // Com sessão, devolvemos o componente colocado dentro de RotaProtegida.
  return children
}
