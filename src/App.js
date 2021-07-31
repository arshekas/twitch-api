import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Channel_Detail from './components/Channel_Detail';

function App() {
  return (
    <div className="App">
        <Router>
          <Link to="/">Home</Link>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/channels/:channel_id" component={Channel_Detail} />
        </Router>
    </div>
  );
}

export default App;
