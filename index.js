import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';

const statusBarHeight = Constants.statusBarHeight;

export default function Header({ name }) {
    return(
         <View style={[styles.container, { paddingTop: statusBarHeight }]}> 
            <View style={styles.content}>
                <Text style={styles.username}>{name}</Text>

                <TouchableOpacity activeOpacity={0.5} style={styles.buttonUser}>
                    <Feather name="user"size={27} color="#fff"/>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
         </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#8000ff',
        paddingTop: statusBarHeight,
        flexDirection: 'row', 
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom:44,
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    username:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    buttonUser:{
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 /2,
    }
})
