import { createContext, useState } from "react";

export const RatingContext = createContext({
    rating: 1,
    setRating: () => {},
});

export const RatingProvider = (props) => {
    const [rating, setRating] = useState(1);

    return (
        <RatingContext.Provider value={{
        rating,
        setRating,
        }}>
        {props.children}
        </RatingContext.Provider>
    )
}