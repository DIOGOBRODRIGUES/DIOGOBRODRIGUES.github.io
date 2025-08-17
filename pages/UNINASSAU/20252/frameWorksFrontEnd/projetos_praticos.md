# 🎯 Projetos Práticos - Front-End Frameworks (React)
**Disciplina completa com projetos incrementais**

---

## 📋 **FILOSOFIA DOS PROJETOS**

### **🎯 Princípios Pedagógicos:**
1. **Learning by Doing** - 70% prática, 30% teoria
2. **Projetos Incrementais** - Cada aula adiciona complexidade
3. **Portfolio Building** - Todos os projetos viram portfólio
4. **Real World Applications** - Simular problemas reais
5. **Peer Learning** - Trabalho colaborativo

### **📊 Estrutura de Avaliação:**
- **Funcionalidade (30%)** - A aplicação funciona?
- **Código Limpo (25%)** - Organização e boas práticas
- **Interface (25%)** - Design e usabilidade
- **Criatividade (20%)** - Soluções inovadoras

---

## 🟢 **MÓDULO 1: FUNDAMENTOS (Aulas 1-4)**

### **🎯 Projeto 1: Cartão de Visita Digital**
**Aula 2-3 | Duração: 2 semanas**

#### **📋 Especificações:**
- **Objetivo:** Criar um cartão de visita pessoal digital
- **Tecnologias:** React básico, JSX, CSS
- **Entrega:** Aplicação funcionando no Netlify/Vercel

#### **🛠️ Funcionalidades Obrigatórias:**
- ✅ Foto pessoal
- ✅ Nome e profissão
- ✅ Links para redes sociais
- ✅ Informações de contato
- ✅ Design responsivo

#### **🎨 Funcionalidades Extras (+Pontos):**
- 🌟 Animações CSS
- 🌟 Tema dark/light
- 🌟 QR Code com contato
- 🌟 Curriculum downloadável
- 🌟 Seção de skills/tecnologias

#### **📁 Estrutura de Arquivos:**
```
src/
├── App.js
├── App.css
├── components/
│   ├── Header.js
│   ├── ProfilePhoto.js
│   ├── ContactInfo.js
│   ├── SocialLinks.js
│   └── Skills.js
└── assets/
    ├── profile.jpg
    └── icons/
```

#### **💻 Código Base Fornecido:**
```jsx
// App.js template
import React from 'react';
import './App.css';
import Header from './components/Header';
import ProfilePhoto from './components/ProfilePhoto';

function App() {
  const dadosPessoais = {
    nome: "Seu Nome Aqui",
    profissao: "Desenvolvedor React Jr",
    email: "seuemail@email.com",
    telefone: "(11) 99999-9999"
  };

  return (
    <div className="cartao-visita">
      <Header dados={dadosPessoais} />
      <ProfilePhoto />
      {/* Implementar outros componentes */}
    </div>
  );
}
```

---

### **🎯 Projeto 2: Lista de Tarefas Inteligente**
**Aula 4 | Duração: 1 semana**

#### **📋 Especificações:**
- **Objetivo:** Todo list com funcionalidades avançadas
- **Tecnologias:** React Hooks (useState), Props, Event Handling
- **Entrega:** Aplicação funcional com dados persistentes

#### **🛠️ Funcionalidades Obrigatórias:**
- ✅ Adicionar tarefa
- ✅ Marcar como concluída
- ✅ Remover tarefa
- ✅ Filtrar (todas/pendentes/concluídas)
- ✅ Contador de tarefas

#### **🎨 Funcionalidades Extras (+Pontos):**
- 🌟 Prioridade das tarefas (alta/média/baixa)
- 🌟 Data de vencimento
- 🌟 Categorias/tags
- 🌟 Busca por texto
- 🌟 Drag & Drop para reordenar

#### **💻 Código Exemplo:**
```jsx
function TodoApp() {
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState('todas');

  const adicionarTarefa = (texto) => {
    const novaTarefa = {
      id: Date.now(),
      texto: texto,
      concluida: false,
      prioridade: 'media'
    };
    setTarefas([...tarefas, novaTarefa]);
  };

  // Implementar outras funções...
}
```

---

## 🟡 **MÓDULO 2: INTERATIVIDADE (Aulas 5-8)**

### **🎯 Projeto 3: Buscador de CEP**
**Aula 5-6 | Duração: 2 semanas**

#### **📋 Especificações:**
- **Objetivo:** Aplicação que busca informações de endereço por CEP
- **Tecnologias:** useEffect, fetch API, useState
- **API:** ViaCEP (https://viacep.com.br/)

#### **🛠️ Funcionalidades Obrigatórias:**
- ✅ Input para digitação do CEP
- ✅ Validação de formato do CEP
- ✅ Busca automática na API
- ✅ Exibição dos dados do endereço
- ✅ Loading state durante busca

#### **🎨 Funcionalidades Extras (+Pontos):**
- 🌟 Histórico de CEPs consultados
- 🌟 Mapa do endereço (Google Maps)
- 🌟 Comparação entre CEPs
- 🌟 Export dos dados em JSON
- 🌟 Busca por cidade/estado

#### **💻 Hook Customizado:**
```jsx
// hooks/useCep.js
import { useState, useEffect } from 'react';

export function useCep(cep) {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    if (cep && cep.length === 8) {
      buscarCep(cep);
    }
  }, [cep]);

  const buscarCep = async (cepParam) => {
    setLoading(true);
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cepParam}/json/`);
      const data = await response.json();
      setDados(data);
    } catch (error) {
      setErro(error);
    } finally {
      setLoading(false);
    }
  };

  return { dados, loading, erro };
}
```

---

### **🎯 Projeto 4: Dashboard Financeiro Pessoal**
**Aula 7-8 | Duração: 2 semanas**

#### **📋 Especificações:**
- **Objetivo:** Controle de gastos pessoais com gráficos
- **Tecnologias:** Context API, useReducer, LocalStorage
- **Libs:** Chart.js ou Recharts para gráficos

#### **🛠️ Funcionalidades Obrigatórias:**
- ✅ Cadastro de receitas/despesas
- ✅ Categorização de gastos
- ✅ Gráfico de gastos por categoria
- ✅ Saldo atual
- ✅ Histórico de transações

#### **🎨 Funcionalidades Extras (+Pontos):**
- 🌟 Metas de gastos por categoria
- 🌟 Relatórios mensais/anuais
- 🌟 Export para CSV/PDF
- 🌟 Alertas de gastos excessivos
- 🌟 Comparativo mensal

#### **🧠 Context de Finanças:**
```jsx
// contexts/FinancasContext.js
import React, { createContext, useContext, useReducer } from 'react';

const FinancasContext = createContext();

const initialState = {
  transacoes: [],
  saldo: 0,
  categorias: ['Alimentação', 'Transporte', 'Lazer', 'Outros']
};

function financasReducer(state, action) {
  switch (action.type) {
    case 'ADICIONAR_TRANSACAO':
      return {
        ...state,
        transacoes: [...state.transacoes, action.payload],
        saldo: state.saldo + action.payload.valor
      };
    // outros casos...
  }
}

export function FinancasProvider({ children }) {
  const [state, dispatch] = useReducer(financasReducer, initialState);
  
  return (
    <FinancasContext.Provider value={{ state, dispatch }}>
      {children}
    </FinancasContext.Provider>
  );
}
```

---

## 🔴 **MÓDULO 3: AVANÇADO (Aulas 9-12)**

### **🎯 Projeto 5: Blog Pessoal com Admin**
**Aula 9-10 | Duração: 2 semanas**

#### **📋 Especificações:**
- **Objetivo:** Blog completo com área administrativa
- **Tecnologias:** React Router, Context, JSON Server (mock API)
- **Recursos:** CRUD de posts, autenticação simulada

#### **🛠️ Funcionalidades Obrigatórias:**
- ✅ Listagem de posts públicos
- ✅ Página individual do post
- ✅ Sistema de login (simulado)
- ✅ CRUD de posts (admin)
- ✅ Navegação entre páginas

#### **🎨 Funcionalidades Extras (+Pontos):**
- 🌟 Sistema de comentários
- 🌟 Busca de posts
- 🌟 Tags/categorias
- 🌟 Editor de texto rico
- 🌟 Upload de imagens

#### **🛣️ Estrutura de Rotas:**
```jsx
// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetalhes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
        <Route path="/admin/novo-post" element={<PrivateRoute><NovoPost /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}
```

---

### **🎯 Projeto 6: E-commerce de Livros**
**Aula 11-12 | Duração: 2 semanas**

#### **📋 Especificações:**
- **Objetivo:** Loja virtual completa com carrinho
- **Tecnologias:** All previous + Performance optimization
- **API:** Google Books API para dados dos livros

#### **🛠️ Funcionalidades Obrigatórias:**
- ✅ Catálogo de produtos
- ✅ Carrinho de compras
- ✅ Cálculo de total
- ✅ Checkout simulado
- ✅ Busca de livros

#### **🎨 Funcionalidades Extras (+Pontos):**
- 🌟 Wishlist
- 🌟 Avaliações dos livros
- 🌟 Recomendações
- 🌟 Filtros avançados
- 🌟 Histórico de compras

---

## 🏆 **PROJETO FINAL (Aulas 13-15)**

### **🎯 Escolha Seu Próprio Projeto**

#### **🛒 Opção 1: E-commerce Completo**
- **Produtos:** Escolha sua categoria
- **Backend:** Firebase ou Supabase
- **Pagamento:** Stripe (modo teste)
- **Deploy:** Vercel + domínio próprio

#### **📱 Opção 2: Rede Social Temática**
- **Tema:** Livros, filmes, receitas, etc.
- **Features:** Posts, likes, comentários, follows
- **Real-time:** Socket.io para notificações
- **Mobile:** Progressive Web App (PWA)

#### **🎓 Opção 3: Sistema de Gestão**
- **Área:** Acadêmico, hospitalar, etc.
- **Usuários:** Multi-level (admin, user, etc.)
- **Relatórios:** Dashboards com gráficos
- **Export:** PDF, Excel, etc.

#### **💰 Opção 4: Fintech MVP**
- **Objetivo:** App financeiro simples
- **Features:** Conta digital simulada
- **Segurança:** JWT, hash de senhas
- **Compliance:** Seguir padrões bancários

---

## 📊 **CRITÉRIOS DE AVALIAÇÃO DETALHADOS**

### **🎯 Rubrica Completa (1-5 pontos cada)**

#### **⚙️ Funcionalidade (30%)**
- **5:** Todas as funcionalidades + extras criativos
- **4:** Todas as funcionalidades obrigatórias
- **3:** Maioria das funcionalidades
- **2:** Funcionalidades básicas
- **1:** Funcionalidades mínimas

#### **🧹 Qualidade do Código (25%)**
- **5:** Código exemplar + padrões avançados
- **4:** Código limpo + componentes reutilizáveis
- **3:** Código organizado e funcional
- **2:** Código funcional com pequenos problemas
- **1:** Código funcional mas desorganizado

#### **🎨 Interface e UX (25%)**
- **5:** Interface profissional + acessibilidade
- **4:** Interface atraente + responsiva
- **3:** Interface limpa e funcional
- **2:** Interface básica mas utilizável
- **1:** Interface funcional

#### **🚀 Inovação (20%)**
- **5:** Soluções muito criativas e inovadoras
- **4:** Adiciona melhorias significativas
- **3:** Algumas melhorias próprias
- **2:** Pequenas personalizações
- **1:** Segue especificação básica

---

## 🛠️ **RECURSOS DE APOIO**

### **📚 Biblioteca de Componentes**
```jsx
// Componentes reutilizáveis para todos os projetos
export { Button } from './Button';
export { Input } from './Input';
export { Card } from './Card';
export { Loading } from './Loading';
export { Modal } from './Modal';
```

### **🎨 Design System Básico**
```css
/* Variáveis CSS para consistência */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --success-color: #28a745;
  --danger-color: #dc3545;
  --warning-color: #ffc107;
  
  --font-family: 'Inter', sans-serif;
  --border-radius: 8px;
  --box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

### **🔧 Utilitários Comuns**
```jsx
// utils/helpers.js
export const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('pt-BR');
};

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
```

---

## 🎯 **CRONOGRAMA DE ENTREGAS**

### **📅 Calendario Acadêmico:**

| Semana | Projeto | Entrega | Tipo |
|--------|---------|---------|------|
| 2-3 | Cartão de Visita | Deploy + Apresentação | Individual |
| 4 | Lista de Tarefas | GitHub + Demo | Individual |
| 5-6 | Buscador de CEP | Deploy + Code Review | Dupla |
| 7-8 | Dashboard Financeiro | Apresentação + Pitch | Dupla |
| 9-10 | Blog Pessoal | Deploy + SEO | Trio |
| 11-12 | E-commerce | Apresentação + Demo | Trio |
| 13-15 | Projeto Final | Apresentação + Deploy | Livre escolha |

### **📊 Distribuição de Pontos:**
- **Projetos 1-2:** 10 pontos cada (20 total)
- **Projetos 3-4:** 15 pontos cada (30 total)
- **Projetos 5-6:** 20 pontos cada (40 total)
- **Projeto Final:** 30 pontos
- **Participação:** 30 pontos
- **Total:** 150 pontos

---

## 🎤 **APRESENTAÇÕES E DEMOS**

### **🎯 Estrutura das Apresentações (15 min/grupo):**
1. **Demo da Aplicação (5 min)** - Mostrar funcionalidades
2. **Desafios e Soluções (3 min)** - Problemas enfrentados
3. **Código Destacado (5 min)** - Partes mais interessantes
4. **Próximos Passos (2 min)** - Como melhoraria

### **📊 Critérios de Apresentação:**
- **Clareza na comunicação**
- **Organização do conteúdo**
- **Demonstração técnica**
- **Respostas às perguntas**

---

*Esta estrutura de projetos foi elaborada para garantir aprendizado incremental e preparação completa para o mercado de trabalho em React.*

**🎓 Prof. Dr. Diogo Francisco Borba Rodrigues**  
**Centro Universitário Maurício de Nassau - 2025.2**
