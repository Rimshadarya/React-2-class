import React from "react";
import Card from "./Component/Card/Card";
import { Data } from "./Data";
import Footer from "./Component/Footer/Footer";

const App = () => {
  console.log(Data);
     

  return (

    <>    
      {Data.map((e, i) => {
        return <Card key={i} imgSrc={e.imgSrc} title={e.title} desc={e.desc} price={e.price} />;
      })}
<Footer/> 
    </>
  );
};

export default App;

