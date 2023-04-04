import { AiFillHeart  } from "react-icons/ai";
function FavoriteSystem({favorite, setFavorite, full}) {
    const handleFave = () => {
        setFavorite(!favorite);
    }
    return (
        <AiFillHeart style={favorite ? {fill: "red"} : {fill: "gray"}} onClick={handleFave}/>
    )
}
export default FavoriteSystem