function Tabela({vetor, selecionar}){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>código</th>
                    <th>Nome</th>
                    <th>Cpf</th>
                    <th>Café da manhã</th>
                </tr>
            </thead>
            <tbody>
                {
                    vetor.map((obj, indice) =>(
                        <tr key={indice}>
                            <td>{indice+1}</td>
                            <td>{obj.nome}</td>
                            <td>{obj.cpf}</td>
                            <td>{obj.cafe}</td>
                            <td>{obj.data}</td>
                            <td><button onClick={()=> {selecionar(indice)}} className="btn btn-success">Selecionar</button></td>
                        </tr>
    
                    ))
                }
            </tbody>
        </table>

    )    
}

export default Tabela;