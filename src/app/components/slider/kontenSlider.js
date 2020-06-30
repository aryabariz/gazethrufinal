import React, {Component} from 'react';
import Slider from 'react-slick';
import './sliderStyle.css';

export default class kontenSlider extends Component {
    constructor(props){
        super(props);
        this.state={
            datas : [],
        }
    }
    componentDidMount() {
        fetch(this.props.url)
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
                        {datas.map(konten =>(
                    <div key={konten.id}>
                     <div class="gmbrKonten"  > 
                     <img  class="ui fluid image" src={konten.image_agenda} alt="poster"/>
                     </div>
                     <div class="ketKonten">
                     <p class="judulKonten">{konten.nama_agenda}</p>
                     <p class="textArtikel">{konten.nama_agenda}</p>
                     </div>
                    </div>
                     
                    
                ))}
                </Slider>
                </div>
    );

    }
}