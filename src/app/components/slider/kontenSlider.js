import React, {Component} from 'react';
import Slider from 'react-slick';
import './sliderStyle.css';
import apiurl from '../api';


export default class kontenSlider extends Component {
    constructor(props){
        super(props);
        this.state={
            datas : [],
        }
    }
    componentDidMount() {
        apiurl.get('/Poster')
        .then(response => {
            this.setState({
                    datas: response.data,
              })
        }).catch(error => {
            console.log(error);
          });

        // fetch(this.props.url)
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
                        {datas.map(konten =>(
                    <div key={konten.id}>
                     <div class="gmbrKonten"  > 
                     <img  class="ui fluid image" src={konten.props.image} alt="poster"/>
                     </div>
                     <div class="ketKonten">
                     <p class="judulKonten">{konten.props.judul}</p>
                     <p class="textArtikel">{konten.props.text}</p>
                     </div>
                    </div>
                     
                    
                ))}
                </Slider>
                </div>
    );

    }
}