import './style/App.css';
import Sidebar from './components/sidebar/sidebar';


export default function App() {
  return(
    <div className='telaInteira'>
      <Sidebar
        nome="Thiago Rodrigues"
        email ="thiagoakira999@gmail.com"
      />
    </div>
  )
}
