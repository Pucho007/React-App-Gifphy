import React, {useState} from 'react';
import PropTypes from 'prop-types'



export const AddCategory = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState('');


    const handleInputChange=(e)=>{
        const palabra= e.target.value;

        setInputValue(palabra);
    }


    const handleSubmit=(e)=>{
        e.preventDefault();
        
        if(inputValue.trim().length>2){
            
            setCategorias(categorias=>[inputValue,...categorias]);
            setInputValue('');
        }
        

    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>{inputValue}</h2>
            <input 
                type="text"
                value={inputValue}
                onChange={ handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes={
    setCategorias:PropTypes.func.isRequired
};
