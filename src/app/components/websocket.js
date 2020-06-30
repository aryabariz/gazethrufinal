import React, {Component} from 'react';


class app extends Component{

    constructor(props){
        super(props);
        this.state={
            xbtn1 : [],
            ybtn1 : [],
            xbtn2 : [],
            ybtn2 : [],
            xbtn3 : [],
            ybtn3 : [],
            xbtn4 : [],
            ybtn4 : [],
            corBtn1 : [],
            corBtn2 : [],
            corBtn3 : [],
            corBtn4 : [],
            
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
      const interval = setInterval(()=>{
          
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
      
      return()=>clearInterval(interval);  

}
connect = () => {
        //handshake kepada websocket
        var ws = new WebSocket("ws://192.168.43.129:8000/gazethru");

        //cek koneksi terbuka
        ws.onopen =() =>{
            console.log('connect to django server') //muncul diconsole sebagai penanda telah terkoneksi  
        
            const interval = setInterval(() => {      
                try{
                  var koordinatButton = JSON.stringify({
                    x_btn_right : this.state.xbtn1,
                    y_btn_right : this.state.ybtn1,
                    x_btn_left : this.state.xbtn2,
                    y_btn_left : this.state.ybtn2,
                    x_btn_down : this.state.xbtn3,
                    y_btn_down : this.state.ybtn3,
                    x_btn_up : this.state.xbtn4,
                    y_btn_up : this.state.ybtn4,
                    id : 1,
                                    
                  })
                  ws.send(koordinatButton)          
                }catch (error) {
                    console.log(error)
                    } 
              }, 1000); 
              return()=>clearInterval(interval); 
        }

        ws.onmessage = (evt) =>{
            const message = JSON.parse(evt.data)
            this.setState({
                corBtn1 : message.corBtn1,
                corBtn2 : message.buttonId,
                corBtn3 : message.buttonId,
                corBtn4 : message.buttonId,             
            })
            console.log(this.state.data)
        }

}




    render(){
        return(
            <div class="body">
            <div id="buttonSatu"/>
            <div id="buttonDua"/>
            <div id="buttonTiga"/>
            <div id="buttonEmpat"/>
            <p>nilai korel : {this.state.corBtn1}</p>
            </div>
        );
    }
}

export default app;