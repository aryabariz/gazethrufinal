import React from 'react';
import '../peta.css';
import Atasan from '../../../components/atasan';
import ButtonAtas from '../../../components/button/buttonVerNeg';
import ButtonBawah from '../../../components/button/buttonVerPos';
import gmbrlt1  from '../../../assets/gmbrLnt1.jpeg'

export default function denahLantaiSatu(){
    return(     
        <div>
        <Atasan/>

        <div class="bawah">
           <div class="gmbrDenah">
                <img class="ui fluid image" src={gmbrlt1} alt="gmbrdenah"/>
           </div>
            <div class="ketSelatan">

            </div>
            <div class="ketUtara">

            </div>
            <div class="locBUtara">
                <ButtonAtas label="Utara"/>
            </div>

            <div class="locBSelatan">
                <ButtonBawah label="Selatan"/>
            </div>
        </div>

        </div>
    );
}