import React from'react';
import Logo from '../assets/logo.png';
import Poster from '../components/slider/beranda/posterSlider';
import Pengumuman from '../components/slider/beranda/penguSlider';
import ButtonKanan from '../components/button/buttonHorPos';
import ButtonKiri from '../components/button/buttonHorNeg';
import IconLog from '../assets/IconLoc.png';
import './beranda.css';

export default function beranda(){
    return(
        <div>

            <div class="posisiPoster">
               
                <Poster/>
            </div>

            <div class="zonaDua">
                <div class="lokasiTerkini">
                    <div class="iconLoc">
                        <img class="ui fluid image" src={IconLog} alt="IconLoc"/>
                    </div>
                    <p class="textMerah">Lokasi saat ini</p>
                    <p class="textKonten kontenLokasiTerkini">Lobi DTETI Lantai 1</p>
                </div>

                <div class="logoHome">
                    <img class="ui fluid image" src={Logo} alt="logo"/>
                </div>
                <div>
                <p class="quickStart">
                Amati salah satu tombol untuk memulai navigasi GazeThru
                </p>
                </div>

                <div class="lokasiBInformasi">
                <ButtonKanan label="Informasi"/>
                </div>

                <div class="lokasiBPeta">
                <ButtonKiri label="Peta" class="lokasiBPeta"/>
                </div>

                <div class="posisiPengu">
                    <p class="textMerah" 
                    style={{position: 'absolute',
                            left: '3.58%',
                            top: '23.02%',}}>
                                Pemberitahuan Penting
                            </p>
                    <Pengumuman/>
                </div>


            </div>
            <div id="buttonTiga"></div>
            <div id="buttonEmpat"></div>
        </div>
    );
}