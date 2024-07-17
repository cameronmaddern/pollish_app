export const formatPercentage = (percentage: number): string => {
  if (percentage < 0 || percentage > 100) {
    throw new Error("Invalid percentage - must be between 0 and 100");
  }

  if (percentage === 0 || percentage === 100) {
    return percentage.toFixed(0) + "%";
  }

  return percentage.toFixed(1) + "%";
};
