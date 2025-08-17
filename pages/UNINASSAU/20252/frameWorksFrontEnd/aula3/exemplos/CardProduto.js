// Exemplo 2: Card de Produto
// components/CardProduto/CardProduto.js

import React from 'react';
import './CardProduto.css';

function CardProduto() {
  const produto = {
    nome: "iPhone 15",
    preco: 4999.99,
    imagem: "https://via.placeholder.com/200x200/61dafb/ffffff?text=iPhone+15",
    disponivel: true,
    categoria: "Smartphones"
  };

  const estiloPreco = {
    color: produto.disponivel ? '#4caf50' : '#f44336',
    fontWeight: 'bold',
    fontSize: '20px'
  };

  const formatarPreco = (preco) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco);
  };

  return (
    <div className="card-produto">
      <div className="card-header">
        <span className="categoria">{produto.categoria}</span>
        <span className={`status ${produto.disponivel ? 'disponivel' : 'indisponivel'}`}>
          {produto.disponivel ? '✅ Disponível' : '❌ Indisponível'}
        </span>
      </div>
      
      <div className="card-image">
        <img src={produto.imagem} alt={produto.nome} />
      </div>
      
      <div className="card-content">
        <h3 className="produto-nome">{produto.nome}</h3>
        <p className="produto-preco" style={estiloPreco}>
          {formatarPreco(produto.preco)}
        </p>
      </div>
      
      <div className="card-actions">
        <button 
          className={`btn-acao ${produto.disponivel ? 'btn-comprar' : 'btn-indisponivel'}`}
          disabled={!produto.disponivel}
        >
          {produto.disponivel ? '🛒 Adicionar ao Carrinho' : '❌ Indisponível'}
        </button>
        <button className="btn-favorito">
          ❤️ Favoritar
        </button>
      </div>
    </div>
  );
}

export default CardProduto;
