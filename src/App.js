import './App.css';
import Navbar from './components/Navbar';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Homescreen from './screens/Homescreen';
import { BrowserRouter, Route } from 'react-router-dom';
import Productdescscreen from './screens/Productdescscreen';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<BrowserRouter>
				<Route path='/' component={Homescreen} exact></Route>
				<Route path='/product/:id' component={Productdescscreen}></Route>
			</BrowserRouter>
		</div>
	);
}

export default App;
