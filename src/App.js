import HelloWord from './components/HelloWord'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {
	return (
    	<div> 
			<h1>davi e gay</h1>  
			<p>lista dos gays</p>
			<HelloWord/>
			<SayMyName nome="davi"/>
			<Pessoa
			nome="junior"
			idade="19"
			profissao="putinha"
			foto="https://v"/>
		</div>	
	)
}

export default App