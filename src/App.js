import './App.css';
import Main from './Containers/Main/Main';
import { BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  );
}

export default App;
