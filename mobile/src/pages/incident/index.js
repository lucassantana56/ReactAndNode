import React from 'react'
import {View, Image, Text, TouchableOpacity, FlatList} from 'react-native'
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import looImg from '../../assets/logo.png'
import style from "./styles";


export default function Incident() {
    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Detail');
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={looImg}/>
                <Text style={style.headerText}>
                    <Text style={style.headersTextBold}>0 Incidents</Text>
                </Text>

            </View>

            <Text style={style.title}>Welcome!</Text>
            <Text style={style.description}>Select one and save</Text>
            <FlatList
                style={style.incidentsList}
                data={[1, 2, 3]}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={style.incidents}>

                        <Text style={style.incidentProperty}>Ong:</Text>
                        <Text style={style.incidentValue}>APAD</Text>

                        <Text style={style.incidentProperty}>Caso:</Text>
                        <Text style={style.incidentValue}>Teste</Text>

                        <Text style={style.incidentProperty}>Value:</Text>
                        <Text style={style.incidentValue}>120 Reais</Text>
                        <TouchableOpacity
                            style={style.detailsButton}
                            onPress={navigateToDetail}>
                            <Text style={style.detailsButtonText}>More Details</Text>
                            <Feather name="arrow-right" size={16} color="#E02041"/>
                        </TouchableOpacity>
                    </View>
                )}
            />

        </View>
    );
}