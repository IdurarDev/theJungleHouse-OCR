import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

export function CareScale({scaleValue, careType}) {
  // const { scaleValue, careType } = props;
  // const scaleValue = props.scaleValue
  const range = [1, 2, 3];
  const scaleType = careType === 'light' ? {sun} : {water}
  return (  
    <div>
      {range.map((rangeElem) =>
          scaleValue >= rangeElem ? (
            <span key={rangeElem.toString()}>{scaleType}</span>
          ) : null
      )}
    </div>
  )
} 
