import { AiFillStar } from "react-icons/ai";

function RatingSystem ({index, setRating, filled}) {
    const handleRating = () => {
        setRating(index);
    }
    return (
            <AiFillStar style={filled ? {fill: "orange"} : {fill: "gray"}} onClick={handleRating}/>
            /* <Rating
            name="half-rating" defaultValue={0} precision={0.5} /> */
    )
}
export default RatingSystem