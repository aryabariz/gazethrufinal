import React from 'react';
import '../peta.css';
import AtasanHome from '../../../components/atasanHome';
import LantaiSlider from '../../../components/slider/peta/lantaiSlider'



export default function duaUtara(){
    return(     
        <div>
        <AtasanHome/>

        <div class="bawah">
           
        <LantaiSlider lantai="dua" lokasi="utara"/>
        
        </div>

        </div>
    );
}