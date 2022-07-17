import logo from './logo.svg'
import docker from './docker.svg'
import './App.css'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<a href="https://reactjs.org/">
					<img src={logo} className="App-logo" alt="logo" />
				</a>
				<a href="https://www.docker.com/">
					<img src={docker} className="App-logo" alt="logo" />
				</a>
				&nbsp;&nbsp;&nbsp;&nbsp;
				<p>
					Hello React from Docker by &nbsp;
					<a href="https://github.com/bankerneel/react-sample-docker-app">
						Neel Banker
					</a>
				</p>
			</header>
		</div>
	)
}

export default App
