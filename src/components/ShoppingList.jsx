import { plantList } from "../datas/plantList";
import '../style/ShoppingList.css'

export function ShoppingList() {
  const categories = plantList.reduce(
    (acc, plant) => 
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
      []
  )
  const sold = <div className="lmj-sales">Solde</div>
  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{ cat }</li>
        ))}
      </ul>
      <ul className='lmj-plant-list'>
        {plantList.map((plant) => (
            <li key={plant.id} className='lmj-plant-item'>
              { plant.name } 
              { plant.isSpecialOffer ? sold : null}
            </li>
        ))}
      </ul>
    </div>
    
  )
}
