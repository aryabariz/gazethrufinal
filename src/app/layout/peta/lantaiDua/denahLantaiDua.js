import React from 'react';
import '../peta.css';
import Atasan from '../../../components/atasan';
import ButtonAtas from '../../../components/button/buttonVerNeg';
import ButtonBawah from '../../../components/button/buttonVerPos';
import gmbrlt2  from '../../../assets/gmbrLnt2.jpeg'
import { List } from 'semantic-ui-react'

export default function denahLantaiDua(){
    return(     
        <div>
        <Atasan/>

        <div class="bawah">
           <div class="gmbrDenah">
                <img class="ui fluid image" src={gmbrlt2} alt="gmbrdenah"/>
           </div>
           <List>
                <List.Item class="fontTextAgenda">LAB Elektronika Dasar</List.Item>
                <List.Item class="fontTextAgenda">RUANG M21</List.Item>  
            </List>
            
            <div class="ketUtara">
                <List.Item class="fontTextAgenda">LAB INFORMATIKA</List.Item>
                <List.Item class="fontTextAgenda">RUANG KELAS </List.Item> 
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