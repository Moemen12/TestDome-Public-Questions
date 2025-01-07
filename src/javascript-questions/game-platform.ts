// Using Reduce

export  function calculateFinalSpeedReduce(
  initialSpeed: number,
  inclinations: Array<number>
): number {
  try {
    const result = inclinations.reduce(
      (speed: number, inclination: number): number => {

        console.log("speed : ", speed, "and angle is ", inclination);

        inclination <= 0 ? (speed += -inclination) : (speed -= inclination);
        if (speed <= 0) {
          throw new Error("Speed dropped to 0");
        }

        return speed;
      },
      initialSpeed
    );

    return result;
  } catch (error) {
    return 0;
  }
}


// Using For of Loop

export function calculateFinalSpeedForLoop(
  initialSpeed:number,
  inclinations:Array<number>
):number {
  if (initialSpeed <= 0) {
    return 0;
  }
  for (const inclination of inclinations) {
    if (inclination <= 0) {
      console.log("speed : ", initialSpeed, "and angle is ", inclination);
      
      
      initialSpeed += -inclination;

      if (initialSpeed <= 0) {
        return 0;
      }
    } else {
      console.log("speed : ", initialSpeed, "and angle is ", inclination);

      initialSpeed -= inclination;

      if (initialSpeed <= 0) {
        return 0;
      }
    }
  }

  return initialSpeed;
}