// Max velocity 60
// every 5km above the limit win a point
// Math.floor()
// case points better than 12 -> 'Suspend License'

verifyVelocity(130);

function verifyVelocity(velocity) {


  const maxVelocity = 60;
  const kmPerMinutes = 6;

  if (velocity <= maxVelocity)
    console.log('OK');

  else {
    const points = Math.floor((velocity - maxVelocity) / kmPerMinutes);

    if (points >= 12) {
      console.log('License as been suspended because you pass the the limits', points);
    }
    else
      console.log('License is save for now! you have', points, 'points')

  }


}

