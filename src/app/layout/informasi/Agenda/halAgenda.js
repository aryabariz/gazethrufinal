import React from 'react';
import '../informasi.css';
import gmbragenda from '../../../assets/GmbrAgenda.png';
import Atasan from '../../../components/atasan';
import ButtonAtas from '../../../components/button/buttonVerNeg';
import ButtonBawah from '../../../components/button/buttonVerPos';


export default function halAgenda(){
    return(     
        <div>
        <Atasan/>

        <div class="bawah">
            <div class="gmbrHal">
                <img class="ui fluid image" src={gmbragenda} alt="gmbrinformasi"/>
            </div>
                
            <div class="locBKeatas">
                <ButtonAtas label="Internal"/>
            </div>

            <div class="locBKebawah">
                <ButtonBawah label="Eksternal"/>
            </div>
            
            <div class="areaKeterangan">
                <p class="judulKeterangan">Informasi</p>
                <p class="isiKeterangan"> Agenda Internal merupakan kegiatan yang dikhusukan untuk warga DTETI <br></br>
                                                                Agenda Eksternal merupakan kegiatan yang terbuka untuk umum dan warga DTETI</p>
            </div>
        
        </div>

        </div>
    );
}