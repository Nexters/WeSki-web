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

  const boundedPosition = {
    x: Math.max(bounds.x.min, Math.min(bounds.x.max, position.x)),
    y: Math.max(bounds.y.min, Math.min(bounds.y.max, position.y)),
  };

  return [boundedPosition.x, boundedPosition.y];
};

export default getBoundedPositions;
