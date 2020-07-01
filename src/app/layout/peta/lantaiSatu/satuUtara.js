import React from 'react';
import '../peta.css';
import Atasan from '../../../components/atasan';
import KontenSlider from '../../../components/slider/kontenSlider'


export default function satuUtara(){
    return(     
        <div>
        <Atasan/>

        <div class="bawah">
           
           <KontenSlider/>
        
        </div>

        </div>
    );
}