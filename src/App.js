import { Header } from './components/Header'
import { Card } from './components/Card'

import './style/Banner.css';
import './style/Card.css';
import ShoppingList from './components/ShoppingList';

function App() {
  return (
    <div>
      <Header />
      <Card />
      <ShoppingList />
    </div>
  );  
}

export default App;
