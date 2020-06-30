import React, {Component} from 'react';
import Beranda from '../layout/beranda';
import {Redirect} from 'react-router-dom';


class routerBeranda extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount(){
    }


    render(){
        var {klikBtn2, klikBtn3, klikBtn4} = this.state;
        
        if(this.state.corBtn1 === 1){
            return <Redirect to="/menuInformasi" />;
        }

        else if(klikBtn2===true){
            return <Redirect to="/menuPeta" />;
        }

        else if(klikBtn3===true){
            return <Redirect to="/" />;
        }

        else if(klikBtn4===true){
            return <Redirect to="/" />;
        }
        
        else {
            return (<Beranda/>
                )

        }
    }   
}

export default routerBeranda;