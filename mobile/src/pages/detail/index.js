import React from 'react'
import {Feather} from '@expo/vector-icons';
import {Image, View, TouchableOpacity, Text} from 'react-native'
import {useNavigation} from '@react-navigation/native';

import style from "./style";
import looImg from "../../assets/logo.png";


export default function detail() {
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={looImg}/>
                <TouchableOpacity onPress={() => {}}>
                    <Feather name="arrow-left" size={28} color="#E82041"/>
                </TouchableOpacity>
            </View>
            <View>
                <View style={style.incidents}>

                    <Text style={[style.incidentProperty,{marginTop:0}]}>Ong:</Text>
                    <Text style={style.incidentValue}>APAD</Text>

                    <Text style={style.incidentProperty}>Caso:</Text>
                    <Text style={style.incidentValue}>Teste</Text>

                    <Text style={style.incidentProperty}>Value:</Text>
                    <Text style={style.incidentValue}>120 Reais</Text>

                </View>

                <View style={style.contactBox}>
                    <Text style={style.heroTitle}>Save the day</Text>
                    <Text style={style.heroTitle}>Be the hero for this incident.</Text>

                    <Text style={style.heroDescription}>Contact:</Text>

                    <View style={style.actions}>
                        <TouchableOpacity style={style.action} onPress={()=>{}}>
                            <Text style={style.actionText}>Whatsapp</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.action} onPress={()=>{}}>
                            <Text style={style.actionText}>E-mail</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}