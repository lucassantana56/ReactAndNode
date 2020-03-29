import React from 'react'
import {Feather} from '@expo/vector-icons';
import {Image, View, TouchableOpacity, Text,Linking} from 'react-native'
import {useNavigation,useRoute} from '@react-navigation/native';
import * as MailComposer from "expo-mail-composer";

import style from "./style";
import looImg from "../../assets/logo.png";



export default function detail() {
    const  navigation = useNavigation();
    const router = useRoute();

    const incident = router.params.inc;
    const  message = 'Olá APAD, Estou entrando em contacto pois gostaria de ajudar no caso do';

    function navigateBack() {
        navigation.goBack();
    }
    
    function sendMail() {
        MailComposer.composeAsync(
            {
                subject: 'Heroi do caso: test',
                recipients:['lucas45felipe50@gmail.com'],
                body:message,
            }
        )
    }
    
    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=960036352;text=${message}`);
    }
    
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={looImg}/>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041"/>
                </TouchableOpacity>
            </View>
            <View>
                <View style={style.incidents}>

                    <Text style={[style.incidentProperty,{marginTop:0}]}>Ong:</Text>
                    <Text style={style.incidentValue}>{incident.name}</Text>

                    <Text style={style.incidentProperty}>Caso:</Text>
                    <Text style={style.incidentValue}>{incident.title}</Text>

                    <Text style={style.incidentProperty}>Value:</Text>
                    <Text style={style.incidentValue}>{incident.value}</Text>

                </View>

                <View style={style.contactBox}>
                    <Text style={style.heroTitle}>Save the day</Text>
                    <Text style={style.heroTitle}>Be the hero for this incident.</Text>

                    <Text style={style.heroDescription}>Contact:</Text>

                    <View style={style.actions}>
                        <TouchableOpacity style={style.action} onPress={sendWhatsapp}>
                            <Text style={style.actionText}>Whatsapp</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.action} onPress={sendMail}>
                            <Text style={style.actionText}>E-mail</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}