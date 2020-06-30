import React from 'react';
import videotentang from '../../../assets/GmbrPrestasi.png';
import '../informasi.css';
import Atasan from '../../../components/atasan';
import ButtonAtas from '../../../components/button/buttonVerNeg';
import ButtonBawah from '../../../components/button/buttonVerPos';


export default function halTentang(){
    return(     
        <div>
        <Atasan/>

        <div class="bawah">
            <div class="videoHal">
                <img class="ui fluid image" src={videotentang} alt="gmbrinformasi"/>
            </div>
        <div class="locBKeatas">
            <ButtonAtas label="Video"/>
        </div>

        <div class="locBKebawah">
            <ButtonBawah label="Artikel"/>
        </div>
            
        <div class="areaKeterangan">
                <p class="judulKeterangan">Informasi</p>
                <p class="isiKeterangan"> Visi % Misi DTETI : <br></br>
                                          xxxxx  </p>
            </div>
            
        </div>

        </div>
    );
}