import React from 'react';
import { CareScale } from './CareScale';
import { plantList } from '../datas/plantList';

export function PlantItems(props) {
  return (
    <div className='lmj-plant-item-cover'>
      <p>{props.name}</p>
      <img src={props.light} alt="a sun" />
      <img src={props.water} alt="a water" />
      <CareScale careType='light' scaleValue={plantList.light} />
      <CareScale careType='water' scaleValue={plantList.water} />
    </div>
  )
}
