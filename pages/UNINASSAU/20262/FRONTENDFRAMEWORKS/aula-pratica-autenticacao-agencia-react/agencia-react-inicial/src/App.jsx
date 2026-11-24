import { Navigate, Route, Routes } from 'react-router-dom'
import { RotaProtegida } from './components/RotaProtegida'
import { LoginPage } from './pages/LoginPage'
import { MissaoPage } from './pages/MissaoPage'
import { NotFoundPage } from './pages/NotFoundPage'

export default function App() {
  // PASSO 3 DA AULA:
  // A sessão ainda não existe. Vamos criá-la com useState e localStorage.
  const sessao = null

  // PASSO 3 DA AULA:
  // Esta função receberá a resposta do login e criará a sessão.
  function entrar() {
    window.alert('O login ainda será implementado durante a aula.')
  }

  // PASSO 5 DA AULA:
  // Esta função apagará a sessão e realizará o logout.
  function sair() {
    window.alert('O logout ainda será implementado durante a aula.')
  }

  return (
    <div className="app-shell">
      <Routes>
        {/* A página inicial encaminha o visitante para o formulário de login. */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* A página de login recebe a função que futuramente criará a sessão. */}
        <Route path="/login" element={<LoginPage onLogin={entrar} />} />

        {/*
          PROBLEMA INTENCIONAL:
          RotaProtegida ainda não verifica a sessão. Por isso qualquer pessoa
          consegue digitar /missao e entrar. Vamos corrigir isso no PASSO 4.
        */}
        <Route
          path="/missao"
          element={
            <RotaProtegida sessao={sessao}>
              <MissaoPage sessao={sessao} onLogout={sair} />
            </RotaProtegida>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}
