import React from 'react'
// import { getGifs } from '../helpers/getGifs';
import { useFecthGifs } from '../hooks/useFecthGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {

    // const [cards, setCards] = useState([]);

    // useEffect(()=>{
    //     getGifs(categoria)
    //         .then(setCards);
    // }, [categoria]);

    const {data:cards,loading}= useFecthGifs(categoria);

    // console.log(cards, loading);

    return (
        <>
            <h1 className='animate__animated animate__headShake'>{categoria}</h1>
            {loading && 'CARGANDO...'}
                {
                    cards.map((card)=>(
                        <GifGridItem 
                            key={card.id}
                            {...card}
                        />
                    )) 
                }
        </>
    )
}


