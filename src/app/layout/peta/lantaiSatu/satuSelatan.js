import React from 'react';
import '../peta.css';
import AtasanHome from '../../../components/atasanHome';
import LantaiSlider from '../../../components/slider/peta/lantaiSlider'


export default function satuSelatan(){
    return(     
        <div>
        <AtasanHome/>

        <div class="bawah">
           
        <LantaiSlider lantai="satu" lokasi="selatan"/>
        
        </div>

        </div>
    );
}