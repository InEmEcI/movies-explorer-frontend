import { useEffect, useState } from "react";

const useMediaQuery = () => {
  const [cardsNumber, setCardsNumber] = useState({
    default: 16,
    additional: 4,
  });

  useEffect(() => {
    if (window.screen.width <= 633) {
      setCardsNumber((prevState) => {
        return { ...prevState, default: 5, additional: 2 };
      });
    } else if (window.screen.width <= 1010) {
      setCardsNumber((prevState) => {
        return { ...prevState, default: 8, additional: 2 };
      });
    } else if (window.screen.width <= 1280) {
      setCardsNumber((prevState) => {
        return { ...prevState, default: 12, additional: 3 };
      });
    }
  }, []);

  return cardsNumber;
};

export default useMediaQuery;
