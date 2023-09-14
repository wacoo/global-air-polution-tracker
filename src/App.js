import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import City from './components/City';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index  element={<Home />}/>
        <Route path="/cities"  element={<City />}/>
      </Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
