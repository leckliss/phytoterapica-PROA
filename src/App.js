import './App.css';
import Footer from './componentes/corpo/footer';
import Header from './componentes/corpo/header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Produtos1 from './componentes/oleos/p1/p1';
import Produtos2 from './componentes/oleos/p2/p2';
import Produtos3 from './componentes/oleos/p3/p3';
import Produtos4 from './componentes/oleos/p4/p4';
import Produtos5 from './componentes/oleos/p5/p5';
import Produtos6 from './componentes/oleos/p6/p6';
import Produtos7 from './componentes/oleos/p7/p7';

import Meio from './componentes/corpo/meio';

function App() {
  return (
    <main>
      <Router>
        <Header/>
          <Routes>
            <Route path='/' element={<Meio/>} />
            <Route path='/Meio' element={<Meio/>} />
            <Route path='/Produtos1' element={<Produtos1/>} />
            <Route path='/Produtos2' element={<Produtos2/>} />
            <Route path='/Produtos3' element={<Produtos3/>} />
            <Route path='/Produtos4' element={<Produtos4/>} />
            <Route path='/Produtos5' element={<Produtos5/>} />
            <Route path='/Produtos6' element={<Produtos6/>} />
            <Route path='/Produtos7' element={<Produtos7/>} />
          </Routes>

        <Footer/>
        </Router>
    </main>
  );
}

export default App;
