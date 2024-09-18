export const formatNumber = (num) => {
    if (+num >= 1000) {
      return num.toLocaleString();
    } else return num;
  };
  