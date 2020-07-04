import React, {Component} from 'react';
import '../sliderStyle.css';
import Slider from 'react-slick';
import apiurl from '../../api';

class posterSlider extends Component{

    constructor(props){
        super(props);
        this.state= {
            posters : [],
        }
    }

    async componentDidMount() {

        apiurl.get('/poster')
        .then(response => {
            this.setState({
                    posters: response.data,
              })
        }).catch(error => {
            console.log(error);
          });


        // fetch('https://5edf40429ed06d001696cf4a.mockapi.io/Poster')
        // .then(res => res.json())
        // .then(json => {
        //     this.setState({
        //         posters: json,
        //     })
        // })
    }

    render(){
        var {posters} = this.state;

        let settings ={
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1, 
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000,
            fade: true, 

        }

        return(
            <div class="posterSlider">
                <Slider {...settings}>
                {posters.map(poster =>(
                <div key={poster.id}>
                    <img  class="ui fluid image" src={poster.poster_file} alt="poster"/>                 
                </div>
                ))}
                </Slider>
            </div>
        );
    }
}

export default posterSlider;