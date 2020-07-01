import React, {Component} from 'react';


 

class app extends Component{

    constructor(props){
        super(props);
        this.state={
            xbtn1 : 0,
            ybtn1 : 0,
            xbtn2 : 0,
            ybtn2 : 0,
            xbtn3 : 0,
            ybtn3 : 0,
            xbtn4 : 0,
            ybtn4 : 0,
            corBtn1 : [],
            corBtn2 : [],
            corBtn3 : [],
            corBtn4 : [],
            ws: null,
            
        }
    }

      
    
    componentDidMount() {

    
     this.connect();
    //Mengirim posisi button melalui websocket saat koneksi terbuka
    

      //Mengambil nilai value dari style yang telah ke render
      const styleButtonSatu = window.getComputedStyle(document.getElementById("buttonSatu"));
      const styleButtonDua = window.getComputedStyle(document.getElementById("buttonDua"));
      const styleButtonTiga = window.getComputedStyle(document.getElementById("buttonTiga"));
      const styleButtonEmpat = window.getComputedStyle(document.getElementById("buttonEmpat"));
      //Menyimpan nilai kedalam array dan mengganti nilainya sesuai interval yang ditentukan
      this.interval2 = setInterval(()=>{
          
          try{
              this.setState({
                  xbtn1: Math.round(styleButtonSatu.webkitTransform.match((/(-?[0-9.]+)/g))[4]),
                  ybtn1: Math.round(styleButtonSatu.webkitTransform.match((/(-?[0-9.]+)/g))[5]),
              })
              
          }catch (error){
              }
          try{
              this.setState({
                  xbtn2: Math.round(styleButtonDua.webkitTransform.match((/(-?[0-9.]+)/g))[4]),
                  ybtn2: Math.round(styleButtonDua.webkitTransform.match((/(-?[0-9.]+)/g))[5]),
              })
              
          }catch (error){
              }
          try{
                  this.setState({
                      xbtn3: Math.round(styleButtonTiga.webkitTransform.match((/(-?[0-9.]+)/g))[4]),
                      ybtn3: Math.round(styleButtonTiga.webkitTransform.match((/(-?[0-9.]+)/g))[5]),
                  })
                  
              }catch (error){
                  }
          try{
              this.setState({
                  xbtn4: Math.round(styleButtonEmpat.webkitTransform.match((/(-?[0-9.]+)/g))[4]),
                  ybtn4: Math.round(styleButtonEmpat.webkitTransform.match((/(-?[0-9.]+)/g))[5]),
              })
              
          }catch (error){
              }
      }, 100);
      
      //return()=>clearInterval(interval);  

}
connect = () => {
        
        //handshake kepada websocket
         const ws = new WebSocket("ws://192.168.43.228:8000/gazethru");
        //cek koneksi terbuka
        ws.onopen =() =>{
            console.log('connect to django server') //muncul diconsole sebagai penanda telah terkoneksi  
            this.setState({ ws: ws });
            this.interval1 = setInterval(() => {      
                try{
                  var koordinatButton = JSON.stringify({
                    id : 1,
                    x_btn_right : this.state.xbtn1,
                    y_btn_right : this.state.ybtn1,
                    x_btn_left : this.state.xbtn2,
                    y_btn_left : this.state.ybtn2,
                    x_btn_down : this.state.xbtn3,
                    y_btn_down : this.state.ybtn3,
                    x_btn_up : this.state.xbtn4,
                    y_btn_up : this.state.ybtn4,
                    
                                    
                  })
                  ws.send(koordinatButton)          
                }catch (error) {
                    
                    } 
              }, 100); 
              //return()=>clearInterval(interval); 
        }

        ws.onmessage = (evt) =>{
            const message = JSON.parse(evt.data)
            this.setState({
                corBtn1 : message.corr_right,
                corBtn2 : message.corr_left,
                corBtn3 : message.corr_up,
                corBtn4 : message.corr_down,             
            })
            console.log(this.state.corBtn1)
            console.log(this.state.corBtn2)
            try{
            this.props.klikBtn1(this.state.corBtn1);
            }catch(error){
            }
            try{
            this.props.klikBtn2(this.state.corBtn2);
            }catch(error){
            }
            try{
            this.props.klikBtn3(this.state.corBtn3);
            }catch(error){
            }
            try{
            this.props.klikBtn4(this.state.corBtn4);
            }catch(error){
            }
        }

        ws.onclose = () =>{
            console.log('closed')
        }

}

componentWillUnmount(){
    const { ws } = this.state;
    ws.close();
    ws.onclose = () =>{    
        clearInterval(this.interval1, this.interval2);
        window.location.reload(true);
        
    }
}


reload = () => 
{
    //RELOAD COMPONENT
    
};





    render(){
        
        return(
            <div class="body">
            <div id="buttonSatu"/>
            <div id="buttonDua"/>
            <div id="buttonTiga"/>
            <div id="buttonEmpat"/>
            </div>
        );
    }
}

export default app;