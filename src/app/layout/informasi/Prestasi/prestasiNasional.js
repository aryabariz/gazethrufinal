import React from 'react';
import '.././informasi.css';
import Atasan from '../../../components/atasan';
import KontenSlider from '../../../components/slider/kontenSlider'


export default function prestasiNasional(){
    return(     
        <div>
        <Atasan/>

        <div class="bawah">
           
           <KontenSlider/>
        
        </div>

        </div>
    );
}