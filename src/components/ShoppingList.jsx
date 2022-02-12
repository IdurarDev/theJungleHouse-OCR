import { plantList } from "../datas/plantList";
import { PlantItems } from "../components/PlantItems";

import '../style/ShoppingList.css'

import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

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
              { plant.isSpecialOffer ? sold : null}
              <PlantItems
                name={plant.name}
                cover='cover'
                id={plant.id}
                light={sun}
                water={water}
              />
            </li>
        ))}
      </ul>
    </div>
    
  )
}


