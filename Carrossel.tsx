import React, {useState} from 'react';
import {View, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Text } from 'react-native-svg';
import tw from 'tailwind-react-native-classnames';

import Ellipse2 from '../assets/Ellipse2.svg';
import Ellipse3 from '../assets/Ellipse3.svg';
import Ellipse4 from '../assets/Ellipse4.svg';


const Slides = [
    {
        key: '1',
        title: 'Slide 1',
        text: 'Descrição sobre aula ou conteúdo que desejar sobre a imagem.',
        image: <Ellipse2/>,
        backgroundColor: '#FFFFFF',
    },
    {
        key: '2',
        title: 'Slide 2',
        text: 'Descrição sobre aula ou conteúdo que desejar sobre a imagem.',
        image: <Ellipse3/>,
        backgroundColor: '#FFFFFF',
    },
    {
        key: '3',
        title: 'Slide 1',
        text: 'Descrição sobre aula ou conteúdo que desejar sobre a imagem.',
        image: <Ellipse4/>,
        backgroundColor: '#FFFFFF',
    },
]

export default function Carrosel(){
    const [showHome, setShowHome] = useState(false);

    function renderSlides( item:any ){
        return(
            <View style={tw`w-full h-full`}>
                <Image
                source={item.image}
                style={{
                    resizeMode: 'cover',
                    height: '73%',
                    width: '100%',
                }}
                />
                <Text>
                    {item.title}
                </Text>

                <Text>
                    {item.text}
                </Text>
            </View>
        )
    }

    if(showHome){
        return <Text>Entrou na home</Text>
    } else{
        return(
            <AppIntroSlider
            renderItem={renderSlides}
            data={Slides}
            activeDotStyle={{
                backgroundColor: '#FFFFFF',
                width: 10
            }}
            />
        )
    }
}