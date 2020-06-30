import React from 'react';
import './informasi.css';
import ButtonKiri from '../../components/button/buttonHorNeg';
import ButtonAtas from '../../components/button/buttonVerNeg';
import ButtonBawah from '../../components/button/buttonVerPos';
import Atasan from '../../components/atasan';
import gmbrinformasi from '../../assets/GmbrInformasi.png';


export default function menuInformasi(){

    return(     
        <div>
        <Atasan/>

        <div class="bawah">
            <div class="gmbrInformasi">
                <img class="ui fluid image" src={gmbrinformasi} alt="gmbrinformasi"/>
            </div>

            <div class="locBlt1">
            <ButtonBawah label="Agenda"/>
            </div>

            <div class="locBlt2">
            <ButtonKiri label="Prestasi"/>
            </div>

            <div class="locBlt3">
            <ButtonAtas label="Tentang"/>
            </div>
        </div>

        </div>
    );

}



