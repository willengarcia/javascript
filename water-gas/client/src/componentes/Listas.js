import React, { useState } from 'react';

const MyForm = () => {
    const [codigo, setCodigo] = useState('');
    const [filtro, setFiltro] = useState('WATER');
    const [lista, setListas] = useState({"measure_uuid": "","measure_datetime": "", "measure_type": "","has_confirmed": "","image_url": ""})

    const fetchMeasures = async (customerCode, measureType) => {
        const url = new URL(`/${customerCode}/list`, window.location.origin);
        
        if (measureType) {
            url.searchParams.append('measure_type', measureType);
        }

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) {
                throw new Error(`Erro ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();
            
            setListas(data.measures); // tratamento de dados

            console.log("data:", data);
        } catch (error) {
            console.error('Erro ao buscar medidas:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        await fetchMeasures(codigo, filtro);
    };

    return (
        <div className='formulario'>
            <div className='formulario-lista'>
            <form onSubmit={handleSubmit}>
                <label>Código Cliente:</label>
                <input
                    type="number"
                    required
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                />
                <label>Filtro</label>
                <select
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                >
                    <option value="WATER">WATER</option>
                    <option value="GAS">GAS</option>
                </select>
                <button type="submit">Pesquisar</button>
            </form>
            </div>
            <div className='resultado-lista'></div>
        </div>

    );
};

export default MyForm;