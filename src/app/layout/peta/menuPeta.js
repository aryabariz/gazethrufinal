import React from 'react';
import './peta.css';
import ButtonKiri from '../../components/button/buttonHorNeg';
import ButtonAtas from '../../components/button/buttonVerNeg';
import ButtonBawah from '../../components/button/buttonVerPos';
import Atasan from '../../components/atasan';
import gmbrpeta from '../../assets/GmbrPeta.png';


export default function menuPeta(){

    return(     
        <div>
        <Atasan/>

        <div class="bawah">
            <div class="gmbrPeta">
                <img class="ui fluid image" src={gmbrpeta} alt="gmbrpeta"/>
            </div>

            <div class="locBlt1">
            <ButtonBawah label="Lantai 1"/>
            </div>

            <div class="locBlt2">
            <ButtonKiri label="Lantai 2"/>
            </div>

            <div class="locBlt3">
            <ButtonAtas label="Lantai 3"/>
            </div>
        </div>

        </div>
    );

}



