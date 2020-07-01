import React, {Component} from 'react';
import Beranda from '../layout/beranda';
import {Redirect} from 'react-router-dom';
import Websocket from '../components/websocket';


class routerBeranda extends Component{
    constructor(props){
        super(props);
        this.state={
            klikBtn1:[],
            klikBtn2:[],
            
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
        var {klikBtn1, klikBtn2} = this.state;
        
        
        if(klikBtn1>=0.7){
            return <Redirect to="/menuInformasi" />;
        }

        else if(klikBtn2>=0.7){
            return <Redirect to="/menuPeta" />;
        }
        
        else{
            return(
                <div>
                 <Beranda/>
                 <Websocket klikBtn1= {this.stateBtn1} klikBtn2= {this.stateBtn2} klikBtn3= {this.stateBtn3} klikBtn4= {this.stateBtn4}/>
                 </div>
            );
        }
    }   
}

export default routerBeranda;