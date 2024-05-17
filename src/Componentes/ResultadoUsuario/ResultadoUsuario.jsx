import React from "react";

const ResultadoUsuario = props => {
    const { firstName, lastName, email} = props.nuevoUsuario;
    return (
        <>
            <h2> Your Form Data </h2>
            <h4 className="result"> First Name: {firstName} </h4>
            <h4 className="result"> Last Name: {lastName} </h4>
            <h4 className="result"> Email: {email} </h4>
        </>
    )
}

export default ResultadoUsuario;