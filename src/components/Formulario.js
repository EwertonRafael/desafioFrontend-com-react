

function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, deletar, atualizar}) {

  return (
    <form>
      <input type="text" value={obj.nome} onChange={eventoTeclado} name="nome" placeholder="Nome" autoComplete="off" className="form-control" required/>
      <input type="text" value={obj.cpf} onChange={eventoTeclado} name="cpf" placeholder="CPF" autoComplete="off" className="form-control" required/>
      <input type="text" value={obj.cafe} onChange={eventoTeclado} name="cafe" placeholder="Café da manhã" autoComplete="off" className="form-control" required/>
      <input type="date" value={obj.data} onChange={eventoTeclado} name="data" autoComplete="off" className="form-control" required/>

      {
        botao
        ?
        <input type="button" value="Cadastrar" onClick={cadastrar} className="btn btn-primary" />
        :
        <div>
          <input type="button" value="Atualizar" onClick={atualizar} className="btn btn-warning"/>
          <input type="button" value="Deletar" onClick={deletar} className="btn btn-danger"/>
          <input type="button" value="Cancelar" onClick={cancelar} className="btn btn-secondary"/>
        </div>
      }
    </form>
  )
}

export default Formulario;