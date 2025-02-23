import React from "react";
import InputFieldPratic1 from "./InputFieldPratic1";


const FomularioPratic1: React.FC = ()=>{

    const fields =[
        {label: "Nome", id:"nome", type:"text", placeholder:"Digite seu nome"},
        {label:"E-mail", id:"email", type:"email", placeholder:"Digite seu e-mail"},
        {label:"Senha", id:"senha" ,type:"senha", placeholder:"Digite seu senha"},
        {label:"Mensagem", id:"mensagem", type:"text", placeholder:"Digite sua mensagem", isTextArea: true},
    ];

    return(
        <div style={styles.container}>
            <h2 style={styles.title}>Contato</h2>
            <form>
                {fields.map(({label, id, type, placeholder, isTextArea})=>(
                    <InputFieldPratic1
                        key={id}
                        label={label}
                        id ={id}
                        type={type}
                        placeholder={placeholder}
                        isTextArea = {isTextArea}
                    />
                ))}
                <button type="submit" style={styles.button}>Enviar</button>
            </form>
        </div>
    )

    
}

const styles:{[key:string]: React.CSSProperties}={
    container:{
        maxWidth: "300px",
        margin: "50px auto",
        padding: "20px",
        backgroundColor:"#fff",
        borderRadius:"10px",
        boxShadow:"0 0 10px rgba(0,0,0,0.1)",
        textAlign:"center",
    },
    title:{
        color:"#333",
    },
    button:{
        width:"100%",
        padding:"10px",
        marginTop:"10px",
        backgroundColor:"#007BFF",
        color:"white",
        border:"none",
        borderRadius:"5px",
        fontSize:"16px",
        cursor:"point",
    },


    
};

export default FomularioPratic1;