function moveRobot(initialX, initialY, initialDirection, instructions) {
    const directions = ['N', 'E', 'S', 'W'];
    let currentX = initialX;
    let currentY = initialY;
    let currentDirection = initialDirection;
    const moveForward = {
      N: () => currentY++,
      E: () => currentX++,
      S: () => currentY--,
      W: () => currentX--,
    };
    const turnRight = {
      N: () => (currentDirection = 'E'),
      E: () => (currentDirection = 'S'),
      S: () => (currentDirection = 'W'),
      W: () => (currentDirection = 'N'),
    };
    const instructionMap = {
      R: () => turnRight[currentDirection](),
      F: () => moveForward[currentDirection](),
    };
    for (const instruction of instructions) {
      const instructionFunction = instructionMap[instruction];
      if (instructionFunction && typeof instructionFunction === 'function') {
        instructionFunction();
      }
    }
    return { x: currentX, y: currentY, direction: currentDirection };
  }
  // Example usage
  const result = moveRobot(0, 0, 'E', 'RFFF');
  console.log(result); // Output: { x: 0, y: 3, direction: 'S' }