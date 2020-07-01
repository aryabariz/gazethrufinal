import React from 'react';
import {Route,Switch} from 'react-router-dom';
import routerBeranda from './routerBeranda';
import routerMenuPeta from './peta/routerMenuPeta';
import routerMenuInformasi from './informasi/routerMenuInformasi';
import routerHalAgenda  from './informasi/routerAgenda';
import routerHalPrestasi from './informasi/routerPrestasi';
import routerHalTentang from './informasi/routerTentang';
import routerAgendaInternal from './informasi/routerAgendaInternal';
import routerAgendaEksternal from './informasi/routerAgendaEksternal';
import routerPrestasiInternasional from './informasi/routerPrestasiInternasional';
import routerPrestasiNasional from './informasi/routerPrestasiNasional';
import routerDenahLantaiSatu from './peta/lantaiSatu/routerDenahLantaiSatu';
import routerDenahLantaiDua from './peta/lantaiDua/routerDenahLantaiDua';
import routerDenahLantaiTiga from './peta/lantaiTiga/routerDenahLantaiTiga';
import routerSatuUtara from './peta/lantaiSatu/routerSatuUtara';
import routerSatuSelatan from './peta/lantaiSatu/routerSatuSelatan';
import routerDuaUtara from './peta/lantaiDua/routerDuaUtara';
import routerDuaSelatan from './peta/lantaiDua/routerDuaSelatan';
import routerTigaUtara from './peta/lantaiTiga/routerTigaUtara';
import routerTigaSelatan from './peta/lantaiTiga/routerTigaSelatan';




function routerPath(){
    return(     
            <Switch>
                <Route exact path="/" component={routerBeranda}/>
                <Route exact path="/menuPeta" component={routerMenuPeta}/>
                <Route exact path="/menuInformasi" component={routerMenuInformasi}/>
                <Route exact path="/menuInformasi/agenda" component={routerHalAgenda}/>
                <Route exact path="/menuInformasi/prestasi" component={routerHalPrestasi}/>
                <Route exact path="/menuInformasi/tentang" component={routerHalTentang}/>
                <Route exact path="/menuInformasi/agenda/internal" component={routerAgendaInternal}/>
                <Route exact path="/menuInformasi/agenda/eksternal" component={routerAgendaEksternal}/>
                <Route exact path="/menuInformasi/prestasi/internasional" component={routerPrestasiInternasional}/>
                <Route exact path="/menuInformasi/prestasi/nasional" component={routerPrestasiNasional}/>
                <Route exact path="/menuPeta/denahlantaisatu" component={routerDenahLantaiSatu}/>
                <Route exact path="/menuPeta/denahlantaidua" component={routerDenahLantaiDua}/>
                <Route exact path="/menuPeta/denahlantaitiga" component={routerDenahLantaiTiga}/>
                <Route exact path="/menuPeta/denahlantaisatu/utara" component={routerSatuUtara}/>
                <Route exact path="/menuPeta/denahlantaisatu/selatan" component={routerSatuSelatan}/>
                <Route exact path="/menuPeta/denahlantaidua/utara" component={routerDuaUtara}/>
                <Route exact path="/menuPeta/denahlantaidua/selatan" component={routerDuaSelatan}/>
                <Route exact path="/menuPeta/denahlantaitiga/utara" component={routerTigaUtara}/>
                <Route exact path="/menuPeta/denahlantaitiga/selatan" component={routerTigaSelatan}/>                         
            </Switch>
        );
}

export default routerPath;