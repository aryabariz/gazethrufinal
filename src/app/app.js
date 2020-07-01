import React, {Component} from 'react';
import '../index.css';
import Path from './router/routerPath';
import {BrowserRouter} from 'react-router-dom';


class app extends Component{



    render(){
        return(
            <BrowserRouter>
            <div className="body">
                <Path/>
            </div>
            </BrowserRouter>

        );
    }
}

export default app;