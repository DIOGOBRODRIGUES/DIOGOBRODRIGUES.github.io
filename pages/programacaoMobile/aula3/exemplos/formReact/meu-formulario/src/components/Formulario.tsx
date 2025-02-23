import React, { useState } from "react";
import InputField from "./InputField"; // Importando o componente reutilizável

const Formulario: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    mensagem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.senha) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }
    console.log("Formulário enviado:", formData);
    alert("Formulário enviado com sucesso!");
    setFormData({ nome: "", email: "", senha: "", mensagem: "" });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Contato</h2>
      <form onSubmit={handleSubmit}>
        <InputField label="Nome" name="nome" value={formData.nome} placeholder="Digite seu nome" onChange={handleChange} />
        <InputField label="E-mail" type="email" name="email" value={formData.email} placeholder="Digite seu e-mail" onChange={handleChange} />
        <InputField label="Senha" type="password" name="senha" value={formData.senha} placeholder="Digite sua senha" onChange={handleChange} />
        <InputField label="Mensagem" name="mensagem" value={formData.mensagem} placeholder="Digite sua mensagem" onChange={handleChange} isTextArea />

        <button type="submit" style={styles.button}>Enviar</button>
      </form>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: "300px",
    margin: "50px auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  title: {
    color: "#333",
  },
  button: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Formulario;