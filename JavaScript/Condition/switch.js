let weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('rain ')
    break
  case 'cloudy':
    console.log('cold')
    break
  case 'sunny':
    console.log(' freely')
    break
  default:
    console.log('rain ')
}


let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log(' Monday')
    break
  case 'tuesday':
    console.log(' Tuesday')
    break
  case 'wednesday':
    console.log('Wednesday')
    break
  case 'thursday':
    console.log('Thursday')
    break
  case 'friday':
    console.log('Friday')
    break
  case 'saturday':
    console.log('Saturday')
    break
  case 'sunday':
    console.log('Sunday')
    break
  default:
    console.log(' not a week day.')
}
