import React from 'react';
import '../peta.css';
import AtasanHome from '../../../components/atasanHome';
import LantaiSlider from '../../../components/slider/peta/lantaiSlider'


export default function tigaSelatan(){
    return(     
        <div>
        <AtasanHome/>

        <div class="bawah">
           
        <LantaiSlider lantai="tiga" lokasi="selatan"/>
        
        </div>

        </div>
    );
}