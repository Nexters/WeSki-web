const getBoundedPositions = (x: number, y: number, scale: number): [number, number] => {
  const CONTAINER = { width: 376, height: 200 };
  const IMAGE = { width: 376, height: 357 };
  const OFFSET_Y = IMAGE.height - CONTAINER.height;

  const scaledSize = {
    width: IMAGE.width * scale,
    height: IMAGE.height * scale,
  };

  const bounds = {
    x: {
      min: (CONTAINER.width - scaledSize.width) / 2,
      max: -(CONTAINER.width - scaledSize.width) / 2,
    },
    y: {
      min: -((scaledSize.height - CONTAINER.height + OFFSET_Y) / 2),
      max: Math.max((scaledSize.height - CONTAINER.height - OFFSET_Y) / 2, 0),
    },
  };

  const boundedPosition = {
    x: Math.max(bounds.x.min, Math.min(bounds.x.max, x)),
    y: Math.max(bounds.y.min, Math.min(bounds.y.max, y)),
  };

  return [boundedPosition.x, boundedPosition.y];
};

export default getBoundedPositions;
