import React from 'react';
import '.././informasi.css';
import Atasan from '../../../components/atasanHome';
import AgendaSlider from '../../../components/slider/agendaSlider'


export default function agendaEksternal(){
    return(     
        <div>
        <Atasan/>

        <div class="bawah">
           
           <AgendaSlider tipe="eksternal"/>
        
        </div>

        </div>
    );
}