import React from 'react';
import logo from '../assets/logo.png';
import ButtonBack from './button/buttonBack';
import ButtonHome from './button/buttonHome';
import './atasan.css';

export default function atasanHome(){
    return(

    <div class="atasan">
        <div class="logoTengah">
            <img class="ui fluid image" src={logo} alt="logo"/>
        </div>

        <div class="locTombolBack">
        <ButtonBack/>
        </div>
        <div class="locTombolHome">
        <ButtonHome/>
        </div>
    </div>

    );
}