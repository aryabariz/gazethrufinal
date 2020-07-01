import React from 'react';
import '../peta.css';
import Atasan from '../../../components/atasan';
import LantaiSlider from '../../../components/slider/peta/lantaiSlider'


export default function satuSelatan(){
    return(     
        <div>
        <Atasan/>

        <div class="bawah">
           
        <LantaiSlider lantai="satu" lokasi="selatan"/>
        
        </div>

        </div>
    );
}