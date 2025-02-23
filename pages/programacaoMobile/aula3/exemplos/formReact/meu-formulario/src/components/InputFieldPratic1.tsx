import React from "react";

interface InputFieldProps{
  label:string;
  type?:string;
  id:string;
  placeholder?:string;
  isTextArea?:boolean;
}

const InputFieldPratic1: React.FC<InputFieldProps> =({label, type="text", id, placeholder, isTextArea})=>(
  <div style={styles.container}>
    <label style={styles.label} htmlFor={id}>{label}</label>
    {isTextArea?(
      <textarea id ={id} placeholder={placeholder} style={styles.textarea}/>
    ):(
      <input type={type} id ={id} placeholder={placeholder} style={styles.input}></input>
    )

    }
  </div>
)



const styles:{[key:string]:React.CSSProperties}={
  container:{
    marginBottom:"10px",
  },
  label:{
    display:"block",
    fontWeight:"bold",
    marginBottom: "5px",
  },
  input:{
    width:"90%",
    padding:"8px",
    border: "1px solid  #ccc",
    borderRadius:"5px",
  },

  textarea:{
    width: "90%",
    padding: "8px",
    border:"1px solid #ccc",
    resize:"none",
    height:"80px"
  },
};

export default InputFieldPratic1;