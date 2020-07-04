import React from 'react';
import {motion} from 'framer-motion';
import './buttonStyle.css';
import {Button} from 'semantic-ui-react';

//Komponen button yang bergerak ke kiri terlebih dahulu
function buttonHome (props) {
    return(
        <motion.div

        //Mengatur arah gerak
        animate={{
            x : -400,
            y : 0,
        }}

        //Mengatur jenis gerakan
        transition={{
            yoyo : Infinity,
            duration: 5, 
        }}
        id="buttonDua"
        >
           <Button className="dasarButton" color="orange">
           <p class="fontButton">Beranda</p>
           </Button>
        </motion.div>
    );

}

export default buttonHome;