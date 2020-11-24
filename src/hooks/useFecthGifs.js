import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFecthGifs =(categoria)=>{

    const [state, setState] = useState({
        data:[],
        loading:true
    });

    useEffect(()=>{

        getGifs(categoria)
            .then(img=>{

                setTimeout(() => {

                    setState({
                        data:img,
                        loading: false
                    });


                }, 1000);

            })


    },[categoria]);



    return state;


}