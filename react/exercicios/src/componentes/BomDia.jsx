import React, { Fragment } from 'react'

// para retornar dois elementos jsx em um componente é preciso agrupar eles
// para isso você pode usar uma div 
// ou o React.Fragment (caso não queira que seja renderizado esse elemento que envolve os dois)
export default props => 
    <Fragment>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Até breve!</h2>
    </Fragment>