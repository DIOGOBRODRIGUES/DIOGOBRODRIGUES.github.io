export function RotaProtegida({ children }) {
  // PROBLEMA INTENCIONAL:
  // Neste momento o componente libera tudo que estiver dentro dele.
  // No PASSO 4, ele verificará a sessão antes de devolver children.
  return children
}
