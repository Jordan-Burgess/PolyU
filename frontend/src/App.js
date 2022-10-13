import './App.css';
import Main from './pages/Main'
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './components/Auth';

export default function App() {

  return (
    <Router>
      <AuthProvider>
      <div className="App">
        <Main/>
      </div>
      </AuthProvider>
    </Router>
  );
}
