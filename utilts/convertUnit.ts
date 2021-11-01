const convertUnit = (distance: number) => {
  if(distance < 1000){
    return distance + ' m'
  }
  return (distance / 1000).toFixed(1) + ' km'
}

export default convertUnit