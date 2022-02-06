import './itemmenu.css'


export default function itemmenu(props) {
  
  let noticicacaoQtd
  let backgroundCor = props.vermelho ? 'red' : 'transparent'
  backgroundCor = props.verde ? 'green' : 'transparent'
  if(parseInt(props.noticicacaoNumero) >= 99){
    noticicacaoQtd = '99+'
  }
  else{
    noticicacaoQtd = props.noticicacaoNumero
  }

  return(
    <div className="menu">
    <div className="item" style={{
      background: props.ativado ? '#c0cdcf' : 'transparent',
      borderRadius: '10px'
      }}>
      <div className="itemDefi ">              
        <props.icon className='GroupIcon'/>
        <span>{props.nomeItem}</span>
      </div>
      <div className="notificacao" style={{
        background: backgroundCor,
        color: props.vermelho ? '#fff' : '#000'
      }}>
        <span >
          {noticicacaoQtd}
        </span>
      </div>
    </div>
  </div>
  )
}