import React from 'react';
import '../peta.css';
import Atasan from '../../../components/atasan';
import ButtonAtas from '../../../components/button/buttonVerNeg';
import ButtonBawah from '../../../components/button/buttonVerPos';
import gmbrlt3  from '../../../assets/gmbrLnt3.jpeg'
import { List } from 'semantic-ui-react'


export default function denahLantaiTiga(){
    return(     
        <div>
        <Atasan/>

        <div class="bawah">
           <div class="gmbrDenah">
                <img class="ui fluid image" src={gmbrlt3} alt="gmbrdenah"/>
           </div>
           <div class="ketSelatan">
           <List>
                <List.Item class="fontTextAgenda">RUANG E6</List.Item>
                <List.Item class="fontTextAgenda">LAB ELEKTRONIKA</List.Item>  
            </List>
            </div>
            
            <div class="ketUtara">
                <List.Item class="fontTextAgenda">RUANG SIDANG LT3</List.Item>
                <List.Item class="fontTextAgenda">LAB SIGNAL</List.Item> 
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