# 📝 Templates das Aulas - Front-End Frameworks (React)

## 🎯 **TEMPLATE PADRÃO PARA SLIDES DAS AULAS**

### **Estrutura Base de Cada Aula:**

```html
<!doctype html>
<html lang="pt-BR">
<head>
    <meta charset="utf-8">
    <title>Aula X: [Título da Aula]</title>
    <meta name="description" content="Aula X: [Descrição] | React">
    <meta name="author" content="Prof. Dr. Diogo Francisco Borba Rodrigues">
    <!-- Links CSS padrão -->
</head>
<body>
    <div class="reveal">
        <div class="slides">
            <!-- Slide de Abertura -->
            <!-- Objetivos da Aula -->
            <!-- Conteúdo Principal -->
            <!-- Prática/Dinâmica -->
            <!-- Resumo e Próximos Passos -->
        </div>
    </div>
</body>
</html>
```

---

## 📋 **AULA 2: SETUP E PRIMEIRO CONTATO COM REACT**

### **🎯 Estrutura Sugerida:**

#### **Slide 1: Abertura**
```html
<section>
    <p>🏛️ Centro Universitário Maurício de Nassau</p>
    <h3>Aula 2: Setup e Primeiro Contato com React</h3>
    <p>Prof. Dr. Diogo Francisco Borba Rodrigues</p>
    <div style="margin-top: 30px;">
        <p>⚛️ <em>"A biblioteca que mudou o desenvolvimento web"</em></p>
    </div>
</section>
```

#### **Slide 2: Objetivos da Aula**
```html
<section>
    <h2>🎯 Objetivos de Hoje</h2>
    <ul style="font-size: 1.2em;">
        <li>🛠️ Configurar ambiente de desenvolvimento React</li>
        <li>⚡ Criar primeira aplicação com Create React App</li>
        <li>📁 Entender estrutura de pastas do projeto</li>
        <li>🧩 Escrever primeiro código JSX</li>
        <li>🔍 Usar ferramentas do desenvolvedor</li>
    </ul>
    <div style="background: #61dafb; color: black; padding: 15px; border-radius: 10px; margin: 20px 0;">
        <p><b>💡 Meta da aula:</b> Sair daqui com React funcionando na sua máquina!</p>
    </div>
</section>
```

#### **Slide 3: Pré-requisitos**
```html
<section>
    <h2>📋 Checklist de Pré-requisitos</h2>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
        <div>
            <h4>✅ Conhecimentos</h4>
            <ul>
                <li>HTML básico</li>
                <li>CSS básico</li>
                <li>JavaScript ES6+</li>
                <li>Terminal/CMD básico</li>
            </ul>
        </div>
        <div>
            <h4>🛠️ Ferramentas</h4>
            <ul>
                <li>Node.js (v16+)</li>
                <li>npm ou yarn</li>
                <li>VS Code</li>
                <li>Git</li>
            </ul>
        </div>
    </div>
</section>
```

#### **Dinâmica Sugerida: "Environment Setup Race"**
```html
<section>
    <h3>🏁 DINÂMICA: "Environment Setup Race"</h3>
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px;">
        <ol>
            <li>🏃‍♂️ Dividir em duplas</li>
            <li>⏱️ 20 minutos para setup completo</li>
            <li>🏆 Primeira dupla a criar e rodar uma app React ganha</li>
            <li>🤝 Duplas que terminam ajudam as outras</li>
        </ol>
    </div>
</section>
```

---

## 📋 **AULA 3: JSX E COMPONENTES BÁSICOS**

### **🎯 Estrutura Sugerida:**

#### **Slide Conceitual: JSX**
```html
<section>
    <h2>🧩 JSX: HTML no JavaScript</h2>
    <section>
        <h3>💡 Analogia: Receita de Bolo</h3>
        <div style="display: flex; justify-content: space-around;">
            <div>
                <h4>🍰 HTML Tradicional</h4>
                <p>Ingredientes separados:</p>
                <p>HTML + CSS + JS</p>
            </div>
            <div>
                <h4>🧁 JSX</h4>
                <p>Tudo misturado na medida certa:</p>
                <p>HTML + JS = JSX</p>
            </div>
        </div>
    </section>
</section>
```

#### **Dinâmica: "Component Factory"**
```html
<section>
    <h3>🏭 DINÂMICA: "Component Factory"</h3>
    <p>Cada grupo será uma "fábrica" de componentes:</p>
    <ul>
        <li>🏷️ <b>Fábrica 1:</b> Componentes de Card</li>
        <li>🔘 <b>Fábrica 2:</b> Componentes de Button</li>
        <li>📝 <b>Fábrica 3:</b> Componentes de Form</li>
        <li>🧭 <b>Fábrica 4:</b> Componentes de Navigation</li>
    </ul>
    <p><b>Objetivo:</b> Criar 3 variações do seu componente em 30 minutos!</p>
</section>
```

---

## 📋 **AULA 4: PROPS E COMPOSIÇÃO**

### **🎯 Estrutura Sugerida:**

#### **Slide Conceitual: Props**
```html
<section>
    <h2>📡 Props: A Linguagem dos Componentes</h2>
    <section>
        <h3>🎭 Analogia: Teatro</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
                <h4>🎬 Diretor (Componente Pai)</h4>
                <p>Passa instruções para os atores</p>
            </div>
            <div>
                <h4>🎭 Ator (Componente Filho)</h4>
                <p>Recebe props e interpreta o papel</p>
            </div>
        </div>
        <p style="text-align: center; margin-top: 20px;">
            <em>"Props são as instruções que um componente recebe para saber como se comportar"</em>
        </p>
    </section>
</section>
```

---

## 📋 **AULA 5: ESTADO E HOOKS BÁSICOS**

### **🎯 Estrutura Sugerida:**

#### **Slide Conceitual: Estado**
```html
<section>
    <h2>🧠 Estado: A Memória dos Componentes</h2>
    <section>
        <h3>💡 Analogia: Controle Remoto</h3>
        <div style="text-align: center;">
            <p>🔘 <b>Botão:</b> Evento (onClick)</p>
            <p>⬇️</p>
            <p>📺 <b>TV:</b> Estado (volume, canal)</p>
            <p>⬇️</p>
            <p>🖼️ <b>Tela:</b> UI (o que você vê)</p>
        </div>
    </section>
</section>
```

#### **Dinâmica: "State Management Olympics"**
```html
<section>
    <h3>🏅 DINÂMICA: "State Management Olympics"</h3>
    <div style="background: #ffd700; color: black; padding: 20px; border-radius: 10px;">
        <h4>🏃‍♂️ Modalidades:</h4>
        <ul>
            <li>⚡ <b>Speed Counter:</b> Quem faz contador mais rápido</li>
            <li>🎨 <b>Color Changer:</b> Botão que muda cor da tela</li>
            <li>👁️ <b>Show/Hide Master:</b> Toggle de visibilidade</li>
            <li>📝 <b>Input Echo:</b> Mostrar texto em tempo real</li>
        </ul>
        <p><b>🏆 Prêmio:</b> Equipe vencedora escolhe próxima dinâmica!</p>
    </div>
</section>
```

---

## 📋 **PADRÕES DE ATIVIDADES PRÁTICAS**

### **🎯 Tipos de Exercícios por Nível:**

#### **🟢 Nível Iniciante (Aulas 1-4)**
1. **Copy & Modify** - Modificar código existente
2. **Fill in the Blanks** - Completar código parcial
3. **Component Puzzles** - Montar componentes como quebra-cabeça
4. **Style Challenges** - Aplicar estilos específicos

#### **🟡 Nível Intermediário (Aulas 5-8)**
1. **Feature Implementation** - Implementar funcionalidade específica
2. **Bug Hunting** - Encontrar e corrigir erros
3. **Refactoring** - Melhorar código existente
4. **Integration Challenges** - Conectar diferentes partes

#### **🔴 Nível Avançado (Aulas 9-12)**
1. **Architecture Design** - Planejar estrutura da aplicação
2. **Performance Optimization** - Otimizar aplicações existentes
3. **Custom Solutions** - Criar soluções personalizadas
4. **Code Review** - Avaliar e melhorar código de colegas

---

## 🎮 **BANCO DE DINÂMICAS REUTILIZÁVEIS**

### **🏆 Dinâmicas de Competição**
1. **Speed Coding** - Implementar feature em tempo limitado
2. **Bug Hunt Championships** - Encontrar erros no código
3. **Component Olympics** - Competições de desenvolvimento
4. **React Jeopardy** - Quiz em formato de game show

### **🤝 Dinâmicas Colaborativas**
1. **Pair Programming Rotation** - Trocar duplas a cada 15 min
2. **Code Review Circles** - Revisar código em círculo
3. **Feature Building Chain** - Cada um adiciona uma feature
4. **Human Debugging** - Representar fluxo de dados fisicamente

### **🎨 Dinâmicas Criativas**
1. **Component Marketplace** - "Vender" componentes criados
2. **UI Battle Royale** - Competição de interfaces
3. **React Storytelling** - Contar história com componentes
4. **Meme Component Challenge** - Criar componentes engraçados

---

## 📊 **SISTEMA DE AVALIAÇÃO CONTÍNUA**

### **📝 Rubrica de Avaliação de Projetos**

#### **🎯 Funcionalidade (25%)**
- ⭐ Básico: Funciona conforme especificado
- ⭐⭐ Bom: Funciona + tratamento de erros
- ⭐⭐⭐ Excelente: Funciona + extras criativos

#### **🎨 Interface e UX (25%)**
- ⭐ Básico: Interface limpa e funcional
- ⭐⭐ Bom: Interface atraente + responsiva
- ⭐⭐⭐ Excelente: Interface profissional + acessibilidade

#### **🧹 Qualidade do Código (25%)**
- ⭐ Básico: Código funcional e organizado
- ⭐⭐ Bom: Código limpo + componentes reutilizáveis
- ⭐⭐⭐ Excelente: Código exemplar + padrões avançados

#### **🚀 Inovação e Criatividade (25%)**
- ⭐ Básico: Segue especificação fielmente
- ⭐⭐ Bom: Adiciona melhorias próprias
- ⭐⭐⭐ Excelente: Soluções criativas e inovadoras

---

## 🛠️ **RECURSOS PRÁTICOS PARA O PROFESSOR**

### **📂 Checklist de Preparação de Aula**
- [ ] **Ambiente testado** - Código funciona em diferentes máquinas
- [ ] **Backup offline** - Códigos salvos localmente
- [ ] **Exercícios prontos** - 3 níveis de dificuldade
- [ ] **Dinâmica planejada** - Atividade interativa definida
- [ ] **Material de apoio** - Links e recursos organizados
- [ ] **Plano B** - Alternativa se tecnologia falhar

### **💾 Template de Código Base**
```javascript
// Template básico para exemplos em aula
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState('');

  return (
    <div className="App">
      <h1>🚀 Aula X - [Tópico]</h1>
      {/* Código do exemplo aqui */}
    </div>
  );
}

export default App;
```

### **📱 QR Codes Úteis**
- **GitHub da Turma** - QR para repositório de códigos
- **Material de Apoio** - QR para Drive com recursos
- **Feedback da Aula** - QR para formulário de avaliação
- **Próxima Aula** - QR para conteúdo da próxima semana

---

*Este template foi criado para facilitar a preparação das aulas e manter consistência na qualidade do ensino.*

**🎓 Prof. Dr. Diogo Francisco Borba Rodrigues**
