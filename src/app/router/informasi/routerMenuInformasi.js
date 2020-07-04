import React, {Component} from 'react';
import MenuInformasi from '../../layout/informasi/menuInformasi';
import {Redirect} from 'react-router-dom';
import Websocket from '../../components/websocket';


export default class routerMenuInformasi extends Component{
    constructor(props){
        super(props);
        this.state={
            klikBtn1: [],
            klikBtn2: [],
            klikBtn3: [],
            klikBtn4: [],

        }
    }

    stateBtn1 = (btn1) =>{
        this.setState({klikBtn1 : btn1})
    }

    stateBtn2 =(btn2) =>{
        this.setState({klikBtn2 : btn2})
    }

    stateBtn3 = (btn3) =>{
        this.setState({klikBtn3 : btn3})
    }

    stateBtn4 =(btn4) =>{
        this.setState({klikBtn4 : btn4})
    }


    render(){
        var {klikBtn1, klikBtn2, klikBtn3, klikBtn4} = this.state;
        
        if(klikBtn1>=360){
            return <Redirect to="/" />;
        }

        else if(klikBtn2>=0.45){
            return <Redirect to="/menuInformasi/prestasi" />;
        }

        else if(klikBtn3>=0.45){
            return <Redirect to="/menuInformasi/agenda" />;
        }

        else if(klikBtn4>=0.45){
            return <Redirect to="/menuInformasi/tentang" />;
        }
        
        else {
            return( 
                <div>
            <MenuInformasi/>
            <Websocket klikBtn1= {this.stateBtn1} klikBtn2= {this.stateBtn2} klikBtn3= {this.stateBtn3} klikBtn4= {this.stateBtn4}/>
            </div>
            )
        }
    }   
}
