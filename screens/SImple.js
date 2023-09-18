import { Image } from 'react-native';
import React from 'react';
import Login from './login.js'

import Onboarding from 'react-native-onboarding-swiper';
import Dash from "./dashboard";
const Simple = () => (
  <Onboarding 
    onDone={()=>{
      
    }
    }
   onSkip={() => {
         return <Dash/>;
    } }

    pages={[
      {
                backgroundColor: '#fff',
        image: <Image source={require('../assets/no.1.png')} />,
        title: '#1 Book and Toy Library',
        subtitle: 'DigiLibrary is a subscription-based Library option for educational books and toys!',
      },
      {
        backgroundColor: '#fff',
        image: <Image style={{width:400,height:300}} source={require('../assets/1,000books.png')} />,
        title: '1,000+ books and toys',
        subtitle: 'Customized for Each Age Group. From Libraries accross Bharat. ',
      },
      {
        backgroundColor: '#fff',
        image: <Image  style = {{height:400, width:400}} source={require('../assets/hamara.png')} />,
        title: 'Hamara Promise',
        subtitle: "Ek Mahina, Ek Kitab, 1 din me aapki doorstep pe. ",
      }
    ]}
  />
);

export default Simple;