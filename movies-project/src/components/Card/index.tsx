import { CardContainer } from "./styles";
import { AiFillStar } from "react-icons/ai";

interface CardProps {
   title: string;
   popularity: number;
   path: string;
}

function Card({ title, popularity, path }: CardProps) {
   const imagePath = "https://image.tmdb.org/t/p/w500";
   return (
      <CardContainer>
         <img src={`${imagePath}${path}`} alt={title} />

         <h1>{title}</h1>
         <button>
            <AiFillStar />
            <p>{Math.floor(popularity)}</p>
         </button>
      </CardContainer>
   );
}

export default Card;
