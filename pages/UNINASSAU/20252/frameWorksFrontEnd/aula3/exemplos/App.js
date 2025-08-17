// App.js - Exemplo de como usar todos os componentes
// Este arquivo mostra como importar e usar os componentes criados

import React from 'react';
import Header from './components/Header/Header';
import Botao from './components/Botao/Botao';
import CardProduto from './components/CardProduto/CardProduto';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header no topo */}
      <Header />
      
      {/* Conteúdo principal */}
      <main className="main-content">
        <section className="hero">
          <h1>🎉 Bem-vindos à Aula 3!</h1>
          <p>Aprendendo JSX e Componentes Básicos</p>
          <Botao />
        </section>
        
        <section className="produtos">
          <h2>📦 Nossos Produtos</h2>
          <div className="produtos-grid">
            <CardProduto />
            <CardProduto />
            <CardProduto />
          </div>
        </section>
        
        <section className="demo">
          <h2>🎯 Exemplos de JSX</h2>
          <div className="jsx-examples">
            {/* Exemplo de JSX com JavaScript */}
            <div className="example">
              <h3>Variáveis em JSX:</h3>
              {(() => {
                const nome = "React";
                const versao = "18";
                return <p>Estou aprendendo {nome} versão {versao}! 🚀</p>;
              })()}
            </div>
            
            {/* Exemplo de renderização condicional */}
            <div className="example">
              <h3>Renderização Condicional:</h3>
              {true ? (
                <p style={{color: 'green'}}>✅ React está funcionando!</p>
              ) : (
                <p style={{color: 'red'}}>❌ Algo deu errado...</p>
              )}
            </div>
            
            {/* Exemplo de lista */}
            <div className="example">
              <h3>Listas em JSX:</h3>
              <ul>
                {['HTML', 'CSS', 'JavaScript', 'React'].map((tech, index) => (
                  <li key={index}>
                    {index + 1}. {tech} {index === 3 ? '⭐' : ''}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="footer">
        <p>© 2025 - Aula de React - Prof. Diogo Rodrigues</p>
        <p>🎓 Centro Universitário Maurício de Nassau</p>
      </footer>
    </div>
  );
}

export default App;
