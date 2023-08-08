import {useEffect, useState} from 'react';

const BackToTop = () => {

 const [toTop, setToTop] = useState(false);

 useEffect(() => {
    const handleScroll = () => {
        setToTop(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
     
    window.removeEventListener('scroll', handleScroll);
    };
 }, []);


 const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};


return(
    <>
    {toTop && (
        <Button
        style={{
            position: 'fixed',
            bottom: '50px',
            right: '50px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'blueviolet',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold',
        }}
        onClick={scrollToTop}
        >
         &#11014;
        </Button>
    )}
    </>
);
} 

export default BackToTop;



