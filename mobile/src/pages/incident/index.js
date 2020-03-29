import React, {useEffect, useState} from 'react'
import {View, Image, Text, TouchableOpacity, FlatList} from 'react-native'
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import looImg from '../../assets/logo.png'
import style from "./styles";
import api from "../../services/api";


export default function Incident() {
    const navigation = useNavigation();
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState("");

    async function loadIncidents() {
        const response = await api.get('incidents');
        setIncidents(response.data);
        setTotal(response.headers['x-total-count']);
    }

    useEffect(() => {
        loadIncidents();
    }, []);

    function navigateToDetail(inc) {
        navigation.navigate('Detail', {inc});
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={looImg}/>
                <Text style={style.headerText}>
                    <Text style={style.headersTextBold}>{total} Incidents</Text>
                </Text>

            </View>

            <Text style={style.title}>Welcome!</Text>
            <Text style={style.description}>Select one and save</Text>
            <FlatList
                style={style.incidentsList}
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({item: incident}) => (
                    <View style={style.incidents}>

                        <Text style={style.incidentProperty}>Ong:</Text>
                        <Text style={style.incidentValue}>{incident.name}</Text>

                        <Text style={style.incidentProperty}>Caso:</Text>
                        <Text style={style.incidentValue}>{incident.title}</Text>

                        <Text style={style.incidentProperty}>Value:</Text>
                        <Text style={style.incidentValue}>{incident.value}</Text>
                        <TouchableOpacity
                            style={style.detailsButton}
                            onPress={()=>navigateToDetail(incident)}>
                            <Text style={style.detailsButtonText}>More Details</Text>
                            <Feather name="arrow-right" size={16} color="#E02041"/>
                        </TouchableOpacity>
                    </View>
                )}
            />

        </View>
    );
}