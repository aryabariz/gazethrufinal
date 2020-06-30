import React from 'react';
import {motion} from 'framer-motion';
import './buttonStyle.css';
import {Button} from 'semantic-ui-react';

//Komponen button yang bergerak ke atas terlebih dahulu
function buttonVerNeg (props) {
    return(
        <motion.div

        //Mengatur arah gerak
        animate={{
            x : 0,
            y : -400,
        }}

        //Mengatur jenis gerakan
        transition={{
            yoyo : Infinity,
            duration: 5, 
        }}
        id="buttonEmpat"
        >
            <Button className="dasarButton" color="blue">
            <p class="fontButton">{props.label}</p>
           </Button>
        </motion.div>
    );

}

export default buttonVerNeg;