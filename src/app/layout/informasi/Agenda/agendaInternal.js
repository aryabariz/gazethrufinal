import React from 'react';
import '.././informasi.css';
import Atasan from '../../../components/atasanHome';
import AgendaSlider from '../../../components/slider/agendaSlider'


export default function agendaInternal(){
    return(     
        <div>
        <Atasan/>

        <div class="bawah">
           
           <AgendaSlider tipe="internal"/>
        
        </div>

        </div>
    );
}