import React from 'react';
import logo from '../assets/logo.png';
import ButtonBack from './button/buttonBack';
import './atasan.css';

export default function atasan(){
    return(

    <div class="atasan">
        <div class="logoTengah">
            <img class="ui fluid image" src={logo} alt="logo"/>
        </div>

        <div class="locTombolBack">
        <ButtonBack/>
        </div>
    </div>

    );
}