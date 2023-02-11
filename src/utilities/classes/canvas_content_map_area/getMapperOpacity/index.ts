export function getMapperOpacity() {
  let opacity = 1;
  let autoStep = 16.6 / 1000;

  return function (isFaded: boolean) {
    if (!isFaded && opacity < 1) {
      opacity += autoStep;

      if (opacity > 1) {
        opacity = 1;
      }
    } else if (isFaded && opacity > 0) {
      opacity -= autoStep;
      if (opacity < 0) {
        opacity = 0;
      }
    }

    return opacity;
  };
}
