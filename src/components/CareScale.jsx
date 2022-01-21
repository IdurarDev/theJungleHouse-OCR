// const { scaleValue, careType } = props;
export function CareScale({scaleValue, careType}) {
  // const scaleValue = props.scaleValue
  const range = [1, 2, 3];
  const scaleType = careType === 'light' ? '☀️' : '💧'
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
