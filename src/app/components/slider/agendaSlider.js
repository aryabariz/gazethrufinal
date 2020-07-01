import React, {Component} from 'react';
import Slider from 'react-slick';
import './sliderStyle.css';
import apiurl from '../api';



export default class agendaSlider extends Component{
    constructor(props){
        super(props);
        this.state={
            datas : [],
        }
    }

    componentDidMount() {

        apiurl.get('/agenda')
        .then(response => {
            this.setState({
                    datas: response.data,
              })
        }).catch(error => {
            console.log(error);
          });
        // fetch('https://5edf40429ed06d001696cf4a.mockapi.io/agenda')
        // .then(res => res.json())
        // .then(json => {
        //     this.setState({
        //         datas: json,
        //     })
        // })
    }


    render(){

    var{datas}= this.state;    
    const settings ={
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1, 
        fade: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 10000,  

    };

//.filter(filterAgenda => filterAgenda.kategori==="internal")
    return(
        
            <div class="zonaSAgenda">
                  
                  <Slider {...settings}>
                        {datas.filter(filterAgenda => filterAgenda.agenda_type===this.props.tipe).map(Agenda =>(
                    <div key={Agenda.id}>
                     <div class="gmbrAgenda"  > 
                     <img  class="ui fluid image" src={Agenda.image_agenda} alt="poster"/>
                     </div>
                     <p class="labelAgenda locJAgenda batasText">Judul Agenda</p>
                    <p class="judulAgenda locJAgenda">{Agenda.agenda_name}</p>
                    <p class="labelAgenda locJAgenda spacer">Waktu & Tempat</p>
                    <p class="fontTextAgenda waktuTempat locJAgenda">{Agenda.agenda_place} <br></br> {Agenda.date}<br></br> {Agenda.time} </p>
                    <p class="labelAgenda locJAgenda spacer">Keterangan</p>
                    <p class="fontTextAgenda ketAgenda locJAgenda">{Agenda.agenda_detail}</p>
                    </div>
                     
                    
                ))}
                </Slider>
                </div>
    );

    }
}