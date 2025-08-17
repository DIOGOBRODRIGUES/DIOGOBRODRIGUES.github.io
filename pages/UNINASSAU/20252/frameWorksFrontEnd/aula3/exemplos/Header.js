// Exemplo 3: Header Completo
// components/Header/Header.js

import React from 'react';
import './Header.css';

function Header() {
  const menuItems = [
    { nome: 'Home', icone: '🏠' },
    { nome: 'Sobre', icone: '👥' },
    { nome: 'Serviços', icone: '⚙️' },
    { nome: 'Portfólio', icone: '📁' },
    { nome: 'Contato', icone: '📞' }
  ];
  
  const handleMenuClick = (item) => {
    alert(`Navegando para: ${item}`);
  };

  const handleLogin = () => {
    alert('Redirecionando para login...');
  };

  const handleSignup = () => {
    alert('Redirecionando para cadastro...');
  };

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <h1>🚀 TechCorp</h1>
          <span className="tagline">Inovação & Tecnologia</span>
        </div>
        
        {/* Navegação Principal */}
        <nav className="navigation">
          <ul className="menu">
            {menuItems.map((item, index) => (
              <li key={index} className="menu-item">
                <a 
                  href={`#${item.nome.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick(item.nome);
                  }}
                >
                  <span className="icone">{item.icone}</span>
                  <span className="texto">{item.nome}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Ações do usuário */}
        <div className="user-actions">
          <button className="btn-search" title="Buscar">
            🔍
          </button>
          <button className="btn-login" onClick={handleLogin}>
            Entrar
          </button>
          <button className="btn-signup" onClick={handleSignup}>
            Cadastrar
          </button>
        </div>
        
        {/* Menu Mobile (Hambúrguer) */}
        <div className="mobile-menu">
          <button className="hamburger">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
