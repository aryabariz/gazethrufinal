import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Websocket from '../../components/websocket';
import AgendaInternal from '../../layout/informasi/Agenda/agendaInternal'


export default class routerAgendaInternal extends Component{
    constructor(props){
        super(props);
        this.state={
            klikBtn1: 0,
            klikBtn2: 0,
            klikBtn3: 0,
            klikBtn4: 0,

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
        var {klikBtn1, klikBtn3} = this.state;
        
        if(klikBtn1>=0.7){
            return <Redirect to="/menuInformasi/agenda" />;
        }

        else if(klikBtn3>=0.7){
            return <Redirect to="/" />;
        }

        
        
        else {
            return( 
                <div>
            <AgendaInternal/>
            <Websocket klikBtn1= {this.stateBtn1} klikBtn2= {this.stateBtn2} klikBtn3= {this.stateBtn3} klikBtn4= {this.stateBtn4}/>
            </div>
            )
        }
    }   
}
