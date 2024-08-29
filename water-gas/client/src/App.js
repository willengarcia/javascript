import React, { useState } from 'react';
import './App.css'
import Resultado from './componentes/Resultado';

const UploadForm = () => {
    const [image, setImage] = useState('');
    const [customerCode, setCustomerCode] = useState('');
    const [measureType, setMeasureType] = useState('WATER');

    const [urlImagem, setUrlImagem] = useState('#')
    const [valor, setValor] = useState('nulo')
    const [uuid, setUuid] = useState('nulo')

    const [resultado, setResultado] = useState(false)
    const chamaResultado = (c)=>{
        if(c == true){
            return <Resultado image_url={urlImagem} measure_value={valor} measure_uuid={uuid}></Resultado>
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const measureDateTime = new Date().toISOString(); // Define o datetime no formato ISO

        const data = {
            imageBase64: image, // Certifique-se de que a imagem é uma string codificada em Base64
            customer_code: customerCode,
            measure_datetime: measureDateTime,
            measure_type: measureType
        };
        console.log(data.image)
        try {
            const response = await fetch('/upload', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            console.log(result); // retorno
            setUrlImagem(result.image_url)
            setValor(result.measure_value)
            setUuid(result.measure_uuid)
            setResultado(!false)
        } catch (err) {
            console.error('Error uploading:', err);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result.split(',')[1]); // Obtém apenas a parte da string Base64
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className='container'>
            <div className='pesquisa'>
                <h1>Medidor por IA</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        className='input-text'
                        type="text"
                        placeholder="Customer Code"
                        value={customerCode}
                        onChange={(e) => setCustomerCode(e.target.value)}
                        required
                    />
                    <input
                        className='input-file'
                        type="file"
                        onChange={handleImageChange}
                        required
                    />
                    <select
                        className='select'
                        value={measureType}
                        onChange={(e) => setMeasureType(e.target.value)}
                    >
                        <option value="WATER">Water</option>
                        <option value="GAS">Gas</option>
                    </select>
                    <button type="submit" className='button'>Upload</button>
                </form>
            </div>
            {chamaResultado(resultado)}
        </div>
        
    );
};

export default UploadForm;
