import React, {Component} from 'react';
import '../sliderStyle.css';
import Slider from 'react-slick';
import apiurl from '../../api';

export default class penguSlider extends Component{

    constructor(props){
        super(props);
        this.state ={
          Pdatas: [],
        }
      }
  
    componentDidMount() {
        apiurl.get('/pengumuman')
        .then(response => {
            this.setState({
                    Pdatas: response.data,
              })
        }).catch(error => {
            console.log(error);
          });


        // fetch('https://5edf40429ed06d001696cf4a.mockapi.io/Poster')
        //     .then(res => res.json())
        //     .then(json => {
        //             this.setState({
        //                 Pdatas: json,
        //             })
        //     });
      }

    render(){
        var { Pdatas} =this.state;

        const settings ={
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1, 
            arrows: false,
            autoplay: true,
            autoplaySpeed: 20000,

            

        };
        
        return (
            <div class="penguSlider textKonten" style={{
                height: 'auto',
                width: '46.40vw',
                position: 'absolute',
                top: '38.37%',
                left: '3.58%',
            }}>
                <Slider {...settings}>
                {Pdatas.map(Pdata =>(
                    <p key={Pdata.id}>
                        {Pdata.pengumuman_text}
                         </p>                                    
                ))}
                </Slider>
            </div>
            );
        }
}
