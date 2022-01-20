import { Fragment } from "react"
import '../style/Card.css'

let plantes = {
  "nameOne": "Monstera",
  "nameTwo": "Lierre",
  "nameThree": "Bouquet de fleurs",
  "priceOne" : 8,
  "priceTwo" : 10,
  "priceThree" : 15
} 

export const Card = () => {
  const title = 'mon panier';

  return (
    <Fragment> 
      <aside className="lmj-card">
        <h2>{title}</h2>
        <ul>
          <li>{`${plantes.nameOne}: ${plantes.priceOne} €`}</li>
          <li>{`${plantes.nameTwo}: ${plantes.priceTwo} €`}</li>
          <li>{`${plantes.nameThree}: ${plantes.priceThree} €`}</li>
        </ul>
        <p>Total du panier: {plantes.priceOne + plantes.priceTwo + plantes.priceThree} €</p> 
      </aside>
    </Fragment>
  )
}