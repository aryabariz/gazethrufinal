import React from 'react';
import '.././informasi.css';
import Atasan from '../../../components/atasan';
import PrestasiSlider from '../../../components/slider/prestasiSlider'


export default function prestasiNasional(){
    return(     
        <div>
        <Atasan/>

        <div class="bawah">
           
           <PrestasiSlider tipe="nasional"/>
        
        </div>

        </div>
    );
}