import {Header} from './components/Header'
import logo from './assets/logo.png'
// import {Card} from './components/Card'
import {ShoppingList} from './components/ShoppingList';

import './style/Banner.css';
// import './style/Card.css';

function App() {
  return (
    <div>
      <Header>
        <img src={logo} alt="logo de la maison jungle" className='lmj-logo' />
        <h1 className="lmj-title">La maison jungle</h1>
      </Header>
      {/* <Card /> */}
      <ShoppingList />
    </div>
  );  
}

export default App;
