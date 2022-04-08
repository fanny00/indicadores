import React, { useState, useEffect } from 'react';
import '../index.css'

const FinantialIndicators = () => {

   const [indicadores, setindicadores] = useState(null);

    useEffect( () => {
       // getIndicadores();
       fetch('https://mindicador.cl/api')
       .then((res) => res.json())
       .then((data) => {
           console.log(data);

           const indData = {
               libra_cobre: data.libra_cobre,
               tasa_desempleo: data.tasa_desempleo,
               imacec: data.imacec,
               euro: data.euro,
               dolar: data.dolar,
               dolar_intercambio: data.dolar_intercambio,
               uf: data.uf,
               utm: data.utm,
               bitcoin: data.bitcoin,
           }

           setindicadores(indData);
       })

    }, [])

    return (
        <div className='indicadores'>
            <h3 className=''>Indicadores Financieros</h3>
            {indicadores ?(
                
                <div className="flex flex-wrap -mx-1 overflow-hidden mt-8 px-8">

                    <div className="px-8 my-5 w-1/3 overflow-hidden shadow hover:shadow-lg text-sm text-left py-5">
                        <ul>
                            <li>{ indicadores.libra_cobre.nombre}</li>
                            <li className='font-normal'>{ indicadores.libra_cobre.unidad_medida}</li>
                            <li className='font-normal'>{ indicadores.libra_cobre.fecha }</li>
                            <li className='font-normal'>{ indicadores.libra_cobre.valor}</li>
                        </ul>
                        </div>

                        <div className="px-8 my-5 w-1/3 overflow-hidden shadow hover:shadow-lg text-sm text-left py-5">
                        <ul>
                            <li>{ indicadores.tasa_desempleo.nombre}</li>
                            <li className='font-normal' >{ indicadores.tasa_desempleo.unidad_medida}</li>
                            <li className='font-normal' >{ indicadores.tasa_desempleo.fecha}</li>
                            <li className='font-normal' >{ indicadores.tasa_desempleo.valor}</li>
                        </ul>
                        </div>

                        <div className="px-8 my-5 w-1/3 overflow-hidden shadow hover:shadow-lg text-sm text-left py-5">
                        <ul>
                            <li >{ indicadores.dolar.nombre}</li>
                            <li className='font-normal' >{ indicadores.imacec.unidad_medida}</li>
                            <li className='font-normal' >{ indicadores.imacec.fecha}</li>
                            <li className='font-normal' >{ indicadores.imacec.valor}</li>
                        </ul>
                    </div>

                    <div className="px-8 my-5 w-1/3 overflow-hidden shadow hover:shadow-lg text-sm text-left py-5">
                        <ul>
                            <li>{ indicadores.euro.nombre}</li>
                            <li className='font-normal' >{ indicadores.euro.unidad_medida}</li>
                            <li className='font-normal' >{ indicadores.euro.fecha }</li>
                            <li className='font-normal' >{ indicadores.euro.valor}</li>
                        </ul>
                        </div>

                        <div className="px-8 my-5 w-1/3 overflow-hidden shadow hover:shadow-lg text-sm text-left py-5">
                        <ul>
                            <li>{ indicadores.dolar.nombre}</li>
                            <li className='font-normal' >{ indicadores.dolar.unidad_medida}</li>
                            <li className='font-normal' >{ indicadores.dolar.fecha}</li>
                            <li className='font-normal' >{ indicadores.dolar.valor}</li>
                        </ul>
                        </div>

                        <div className="px-8 my-5 w-1/3 overflow-hidden shadow hover:shadow-lg text-sm text-left py-5">
                        <ul>
                            <li>{ indicadores.dolar_intercambio.nombre}</li>
                            <li className='font-normal' >{ indicadores.dolar_intercambio.unidad_medida}</li>
                            <li className='font-normal' >{ indicadores.dolar_intercambio.fecha}</li>
                            <li className='font-normal' >{ indicadores.dolar_intercambio.valor}</li>
                        </ul>
                    </div>

                    <div className="px-8 my-5 w-1/3 overflow-hidden shadow hover:shadow-lg text-sm text-left py-5">
                        <ul>
                            <li>{ indicadores.uf.nombre}</li>
                            <li className='font-normal' >{ indicadores.uf.unidad_medida}</li>
                            <li className='font-normal' >{ indicadores.uf.fecha }</li>
                            <li className='font-normal'>{ indicadores.uf.valor}</li>
                        </ul>
                        </div>

                        <div className="px-8 my-5 w-1/3 overflow-hidden shadow hover:shadow-lg text-sm text-left py-5">
                        <ul>
                            <li>{ indicadores.utm.nombre}</li>
                            <li className='font-normal' >{ indicadores.utm.unidad_medida}</li>
                            <li className='font-normal' >{ indicadores.utm.fecha}</li>
                            <li className='font-normal' >{ indicadores.utm.valor}</li>
                        </ul>
                        </div>

                        <div className="px-8 my-5 w-1/3 overflow-hidden shadow hover:shadow-lg text-sm text-left py-5">
                        <ul>
                            <li>{ indicadores.dolar.nombre}</li>
                            <li className='font-normal' >{ indicadores.bitcoin.unidad_medida}</li>
                            <li className='font-normal'>{ indicadores.bitcoin.fecha}</li>
                            <li className='font-normal'>{ indicadores.bitcoin.valor}</li>
                        </ul>
                    </div>

                </div>

                

                
                
            ): null}
           
      
       </div>
    );
}


export default FinantialIndicators;