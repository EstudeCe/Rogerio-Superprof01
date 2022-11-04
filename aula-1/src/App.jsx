import { useState } from "react";
import "./App.css";

function App() {
   //  let valorInicial = 0;
   const [value, setValue] = useState(0);

   function increase() {
      // valorInicial++;

      setValue(value + 1);

      // console.log(valorInicial);
   }
   return (
      <div className="main">
         <h1>Contador</h1>
         {/* <p>{valorInicial}</p> */}
         <p>{value}</p>
         <div>
            <button onClick={() => increase()}>Aumentar</button>

            <button>Resetar</button>
            <button>Diminuir</button>
         </div>
      </div>
   );
}

export default App;
