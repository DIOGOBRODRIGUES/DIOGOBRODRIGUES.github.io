import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { RotaProtegida } from './components/RotaProtegida'
import { LoginPage } from './pages/LoginPage'
import { MissaoPage } from './pages/MissaoPage'
import { NotFoundPage } from './pages/NotFoundPage'

// Uma chave específica evita conflito com outros dados do localStorage.
const SESSION_KEY = 'agencia-react:sessao'

function lerSessaoSalva() {
  try {
    // localStorage devolve texto ou null quando a chave ainda não existe.
    const storedValue = localStorage.getItem(SESSION_KEY)
    if (!storedValue) return null

    // JSON.parse reconstrói o objeto que foi salvo como texto.
    const parsedSession = JSON.parse(storedValue)

    // Uma sessão sem accessToken está incompleta e não deve liberar a rota.
    if (!parsedSession?.accessToken) {
      localStorage.removeItem(SESSION_KEY)
      return null
    }

    return parsedSession
  } catch {
    // Se alguém alterar o valor e produzir um JSON inválido, limpamos a chave.
    localStorage.removeItem(SESSION_KEY)
    return null
  }
}

export default function App() {
  // O inicializador funcional lê o localStorage somente na criação do estado.
  const [sessao, setSessao] = useState(lerSessaoSalva)

  function entrar(authData) {
    // Criamos um objeto mínimo. A senha nunca entra na sessão.
    const minimalSession = {
      id: authData.id,
      nome: `${authData.firstName} ${authData.lastName ?? ''}`.trim(),
      username: authData.username,
      accessToken: authData.accessToken,
    }

    // O estado atualiza imediatamente a interface.
    setSessao(minimalSession)

    // localStorage permite restaurar a sessão depois do reload.
    localStorage.setItem(SESSION_KEY, JSON.stringify(minimalSession))
  }

  function sair() {
    // Logout precisa apagar o estado e o armazenamento persistente.
    setSessao(null)
    localStorage.removeItem(SESSION_KEY)
  }

  return (
    <div className="app-shell">
      <Routes>
        {/* A rota inicial escolhe o destino de acordo com a sessão atual. */}
        <Route
          path="/"
          element={<Navigate to={sessao ? '/missao' : '/login'} replace />}
        />

        {/* Quem já está autenticado não precisa retornar ao formulário. */}
        <Route
          path="/login"
          element={
            sessao
              ? <Navigate to="/missao" replace />
              : <LoginPage onLogin={entrar} />
          }
        />

        {/* RotaProtegida decide se MissaoPage pode ser renderizada. */}
        <Route
          path="/missao"
          element={
            <RotaProtegida sessao={sessao}>
              <MissaoPage sessao={sessao} onLogout={sair} />
            </RotaProtegida>
          }
        />

        {/* Qualquer endereço desconhecido apresenta uma página 404. */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}
