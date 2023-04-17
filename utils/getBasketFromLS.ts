export const getBasketFromLS = () => {
  if (typeof window !== "undefined") {
    const jsonData = localStorage.getItem("basket");
    const jsonCount = localStorage.getItem("countTotal");

    return {
      basket: jsonData ? JSON.parse(jsonData) : [],
      countTotal: jsonCount ? JSON.parse(jsonCount) : 0,
    };
  }
};
