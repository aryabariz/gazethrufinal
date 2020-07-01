import React from 'react';
import '.././informasi.css';
import Atasan from '../../../components/atasan';
import AgendaSlider from '../../../components/slider/agendaSlider'


export default function agendaInternal(){
    return(     
        <div>
        <Atasan/>

        <div class="bawah">
           
           <AgendaSlider tipe='1'/>
        
        </div>

        </div>
    );
}