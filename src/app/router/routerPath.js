import React from 'react';
import {Route,Switch} from 'react-router-dom';
import routerBeranda from './routerBeranda';
import routerMenuPeta from './peta/routerMenuPeta';
import routerMenuInformasi from './informasi/routerMenuInformasi';
import Agenda from '../layout/informasi/Tentang/halTentang';
import testpage from '../layout/peta/lantaiDua/duaSelatan'

function routerPath(){
    return(     
            <Switch>
                <Route exact path="/" component={routerBeranda}/>
                <Route exact path="/menuPeta" component={routerMenuPeta}/>
                <Route exact path="/menuInformasi" component={routerMenuInformasi}/>
                <Route exact path="/menuInformasi/agenda/internal" component={Agenda}/>
                <Route exact path="/testpage" component={testpage}/>
            </Switch>
        );
}

export default routerPath;