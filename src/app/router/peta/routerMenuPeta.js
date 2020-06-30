import React, {Component} from 'react';
import MenuPeta from '../../layout/peta/menuPeta';
import {Redirect} from 'react-router-dom';


class routerMenuPeta extends Component{
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
            return <MenuPeta/>
        }
    }   
}

export default routerMenuPeta;