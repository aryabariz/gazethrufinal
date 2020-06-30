import React, {Component} from 'react';
import Slider from 'react-slick';
import './sliderStyle.css';




export default class agendaSlider extends Component{
    constructor(props){
        super(props);
        this.state={
            datas : [],
        }
    }

    componentDidMount() {
        fetch('https://5edf40429ed06d001696cf4a.mockapi.io/agenda')
        .then(res => res.json())
        .then(json => {
            this.setState({
                datas: json,
            })
        })
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
                        {datas.map(Agenda =>(
                    <div key={Agenda.id}>
                     <div class="gmbrAgenda"  > 
                     <img  class="ui fluid image" src={Agenda.image_agenda} alt="poster"/>
                     </div>
                     <p class="labelAgenda locJAgenda batasText">Judul Agenda</p>
                    <p class="judulAgenda locJAgenda">{Agenda.nama_agenda}</p>
                    <p class="labelAgenda locJAgenda spacer">Waktu & Tempat</p>
                    <p class="fontTextAgenda waktuTempat locJAgenda">{Agenda.nama_agenda} <br></br> {Agenda.tanggal_agenda}<br></br> {Agenda.jam_agenda} </p>
                    <p class="labelAgenda locJAgenda spacer">Keterangan</p>
                    <p class="fontTextAgenda ketAgenda locJAgenda">{Agenda.nama_agenda}</p>
                    </div>
                     
                    
                ))}
                </Slider>
                </div>
    );

    }
}