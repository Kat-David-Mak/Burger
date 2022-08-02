import { useState} from 'react';
import './App.css';

function App() {  
const [showTopBread, setShowTopBread] = useState(true);
const [showTomato, setShowTomato] = useState(true);
const [showMeat, setShowMeat] = useState(true);
const [showLettuce, setShowLettuce] = useState(true);

  return (
    <div>      
      <div className="outercover">
      <h4> <i>Top Bread</i> </h4> <button className="addbutton" onClick={ () => setShowTopBread(true)}> Add </button>
      <button className="removebutton" onClick={ () => setShowTopBread(false)}> Remove </button>

      <h4> <i>Tomato</i> </h4> <button className="addbutton" onClick={ () => setShowTomato(true)}> Add </button>
      <button className="removebutton" onClick={ () => setShowTomato(false)}> Remove </button>

      <h4> <i>Meat</i> </h4> <button className="addbutton" onClick={ () => setShowMeat(true)}> Add </button>
      <button className="removebutton" onClick={ () => setShowMeat(false)}> Remove </button>
      
      <h4> <i>Lettuce</i> </h4> <button className="addbutton" onClick={ () => setShowLettuce(true)}> Add </button>
      <button className="removebutton" onClick={ () => setShowLettuce(false)}> Remove </button>
      </div>

      <div className="cover">
	    <div className="innercover">
      <h3 className="h3"> Choose Fillings On Your Right</h3>
    
      <h1 className="h1">ACA Burger</h1>
      {showTopBread  && 
      <div className="topbread">
        <p>
        </p>
      </div>
      }

      {/* Visible Divs */}
      {showTomato  && 
      <div className="tomato">
        <p>
        Tomato
        </p>
      </div>
      }

      {showMeat  && 
      <div className="meat">
        <p>
        Meat
        </p>
      </div>
      }

    {showLettuce  && 
     <div className="lettuce">
        <p>
        Lettuce
        </p>
      </div>
      }
      <div className="bottombread">
        <p>
        </p>
      </div>
	  </div>
  </div>
</div>
  );
}

export default App;
