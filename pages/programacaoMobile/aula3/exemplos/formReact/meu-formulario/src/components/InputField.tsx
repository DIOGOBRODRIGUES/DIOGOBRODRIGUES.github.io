import React from "react";

interface InputFieldProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isTextArea?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, type = "text", name, value, placeholder, onChange, isTextArea }) => {
  return (
    <div style={styles.container}>
      <label style={styles.label}>{label}</label>
      {isTextArea ? (
        <textarea name={name} value={value} placeholder={placeholder} onChange={onChange} style={styles.textarea} />
      ) : (
        <input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} style={styles.input} />
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    marginBottom: "10px",
  },
  label: {
    display: "block",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    resize: "none",
    height: "80px",
  },
};

export default InputField;
// ✅ Adicione esta linha para evitar o erro do TypeScript:
export {};