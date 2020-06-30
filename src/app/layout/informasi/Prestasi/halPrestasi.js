import React from 'react';
import gmbrprestasi from '../../../assets/GmbrPrestasi.png';
import '../informasi.css';
import Atasan from '../../../components/atasan';
import ButtonAtas from '../../../components/button/buttonVerNeg';
import ButtonBawah from '../../../components/button/buttonVerPos';

export default function halPrestasi(){
    return(     
        <div>
        <Atasan/>

        <div class="bawah">
            <div class="gmbrHal">
                <img class="ui fluid image" src={gmbrprestasi} alt="gmbrinformasi"/>
            </div>
        <div class="locBKeatas">
            <ButtonAtas label="Nasional"/>
        </div>

        <div class="locBKebawah">
            <ButtonBawah label="Internasional"/>
        </div>
            
        <div class="areaKeterangan">
                <p class="judulKeterangan">Informasi</p>
                <p class="isiKeterangan"> Kejuaraan nasional merupakan penghargaan yang didapat dalam negeri Indonesia <br></br>
                                                                Kejuaraan internasional didapat diluar negeri Indonesia</p>
            </div>
            
        </div>

        </div>
    );
}