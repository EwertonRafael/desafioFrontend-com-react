import Formulario from './components/Formulario';
import Tabela from './components/Tabela';
import './App.css'
import { useEffect, useState } from 'react'
function App() {

  //objeto cliente
  const cliente = {  
    id: 0,
    nome: '',
    cpf: '',
    cafe: '',
    data: ''
  }

  //UseState
  const[btnCadastrar, setBtnCadastrar] = useState(true)
  const [lista, setLista] = useState([]);
  const [Colaborador, setColaborador] = useState(cliente)

  //useEffect
  useEffect(() => {
    fetch("http://localhost:8080/colaborador")
    .then(retorno => retorno.json())
    .then((retorno_convertido) => setLista(retorno_convertido))
  }, []);
  
  //cadastrar produto
  const cadastrar = () => {
    fetch('http://localhost:8080/cadastrar',{
      method:'post',
      body:JSON.stringify(Colaborador),
      headers:{
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {

      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem)
      }else{
        setColaborador([...setColaborador, retorno_convertido])
        alert('Colaborador cadastrado com sucesso')
        limparFormulario()
      }
    })
  }

  //atualizar produto
  const atualizar = () => {
    fetch('http://localhost:8080/atualizar',{
      method:'put',
      body:JSON.stringify(Colaborador),
      headers:{
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {

      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem)
      }else{
        alert('Colaborador atualizado com sucesso')
        //mensagem
        alert(retorno_convertido.mensagem)

          //cópia do vetor da lista
        let vetorTemp = [...lista]

        //indice
        let indice = vetorTemp.findIndex((p)=>{
          return p.id === Colaborador.id
        })

        //atualizar Colaborador do vetorTemp
        vetorTemp[indice] = Colaborador

        //atualizar o vetor da lista
        setLista(vetorTemp)

        //Limpar Formulário
        limparFormulario()
      }
    })
  }

  //deletar produto
  const deletar = () => {
    fetch('http://localhost:8080/deletar/' + Colaborador.id,{
      method:'delete',
      body:JSON.stringify(Colaborador),
      headers:{
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {

      //mensagem
      alert(retorno_convertido.mensagem)

      //cópia do vetor da lista
      let vetorTemp = [...lista]

      //indice
      let indice = vetorTemp.findIndex((p)=>{
        return p.id === Colaborador.id
      })

      //deletar Colaborador do vetorTemp
      vetorTemp.splice(indice, 1)

      //atualizar o vetor da lista
      setLista(vetorTemp)

      //limpar formulario
      limparFormulario()
      
    })
  }

  //Limpar formulario
  const limparFormulario = () => {
    setColaborador(Colaborador)
    setBtnCadastrar(true)
  }

  //Selecionar Colaborador
    const selecionarColaborador =(indice) =>{
      setColaborador(lista[indice])
      setBtnCadastrar(false)
    }

   //obtendo os dados do formulário
  const aoDigitar = (e) => {
    setColaborador({...Colaborador,[e.target.name]:e.target.value})
    
  }

  //retorno
  return (
    <div>
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={Colaborador} cancelar={limparFormulario} deletar={deletar} atualizar={atualizar}/>
      <Tabela vetor={lista} selecionar={selecionarColaborador}/>
    </div>
  );
}

export default App;
