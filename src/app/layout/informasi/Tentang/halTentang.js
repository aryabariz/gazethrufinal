import React from 'react';
import videotentang from '../../../assets/gedungteti.jpg';
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
                <p class="judulKeterangan">Visi & Misi DTETI :</p>
                <p class="isiKeterangan"> Sumber inovasi yang universal di Bidang Ilmu Teknik Elektro & Teknologi Informasi.</p>
            </div>
            
        </div>

        </div>
    );
}