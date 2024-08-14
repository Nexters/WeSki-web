const getBoundedPositions = (
  position: { x: number; y: number; scale: number },
  container: {
    width: number;
    height: number;
  }
) => {
  const CONTAINER = { width: container.width, height: container.height };
  const IMAGE = { width: container.width, height: container.height };

  const scaledSize = {
    width: IMAGE.width * position.scale,
    height: IMAGE.height * position.scale,
  };

  const bounds = {
    x: {
      min: (CONTAINER.width - scaledSize.width) / 2,
      max: -(CONTAINER.width - scaledSize.width) / 2,
    },
    y: {
      min: -((scaledSize.height - CONTAINER.height) / 2),
      max: Math.max((scaledSize.height - CONTAINER.height) / 2, 0),
    },
  };

  return [bounds.x, bounds.y];
};

export default getBoundedPositions;
