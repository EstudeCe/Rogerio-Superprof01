import { NextPage } from "next";
import { useRouter } from "next/router";
import Header from "../../components/Header";

const Movies: NextPage = () => {
   const router = useRouter();

   return (
      <>
         <Header />
      </>
   );
};

export default Movies;
