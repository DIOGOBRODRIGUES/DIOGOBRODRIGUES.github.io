// Exemplo 1: Componente Básico - Botão
// components/Botao/Botao.js

import React from 'react';
import './Botao.css';

function Botao() {
  const cliquei = () => {
    alert("Botão clicado! 🎉");
  };

  return (
    <button 
      className="botao-estiloso"
      onClick={cliquei}
    >
      Clique em mim! 🚀
    </button>
  );
}

export default Botao;
