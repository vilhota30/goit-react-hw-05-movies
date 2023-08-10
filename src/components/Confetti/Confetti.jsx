import React, {useState, useEffect} from 'react';
import ReactConfetti from 'react-confetti';


const Confetti = () => { 

    const [windowDimension, setDimention] = useState({width: window.innerWidth, height: window.innerHeight});
    const [Btn, setBtn] = useState(false);
      const detectSize = () => {
          setDimention({width: window.innerWidth, height: window.innerHeight});
     };
    
     useEffect(()=> {
        window.addEventListener('resize', detectSize);

        return () => {
            window.removeEventListener('resize', detectSize);
        }
     },[windowDimension]);
    

    return (
        <>
          <button onClick={()=>setBtn(!Btn)} style={{color: 'blue',}}>(click me to see the miracle;)</button> 
        { Btn && (
        <ReactConfetti
         width={windowDimension.width}
         height={windowDimension.height}
         tweenDuration={100}
        />)}
        </>
    )
}

export default Confetti;