import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Channel_Detail from './components/ChannelDetails/ChannelDetail';

function App() {
  return (
    <div className="App">
        <Router>
          <div className="Home">
              <Link to="/">Home</Link>
          </div>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/channels/:channel_id" component={Channel_Detail} />
        </Router>
    </div>
  );
}

export default App;
