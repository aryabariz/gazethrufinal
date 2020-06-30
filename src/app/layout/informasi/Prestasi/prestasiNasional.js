import React from 'react';
import '.././informasi.css';
import Atasan from '../../../components/atasan';
import KontenSlider from '../../../components/slider/kontenSlider'


export default function prestasiNasional(){
    return(     
        <div>
        <Atasan/>

        <div class="bawah">
           
           <KontenSlider url="https://5edf40429ed06d001696cf4a.mockapi.io/agenda"/>
        
        </div>

        </div>
    );
}