import React, {Component} from 'react';
import MenuInformasi from '../../layout/informasi/menuInformasi';
import {Redirect} from 'react-router-dom';


class routerBeranda extends Component{
    constructor(props){
        super(props);
        this.state={
            klikBtn1: false,
            klikBtn2: false,
            klikBtn3: false,
            klikBtn4: false,

        }
    }

    componentDidMount(){
        
    }


    render(){
        var {klikBtn1, klikBtn2, klikBtn3, klikBtn4} = this.state;
        
        if(klikBtn1===true){
            return <Redirect to="/" />;
        }

        else if(klikBtn2===true){
            return <Redirect to="/TestValu" />;
        }

        else if(klikBtn3===true){
            return <Redirect to="/" />;
        }

        else if(klikBtn4===true){
            return <Redirect to="/" />;
        }
        
        else {
            return <MenuInformasi/>
        }
    }   
}

export default routerBeranda;