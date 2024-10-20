const calculateWebcamScaleRatio = (scale: number) => {
  return 1 / (1 + 0.6 * (scale - 1));
}

export default calculateWebcamScaleRatio;