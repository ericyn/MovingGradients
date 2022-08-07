import React from "react";
import { View, StyleSheet } from 'react-native';
import { Gradient } from './Gradient';

export const Main = () => {
    return (
        <View style={styles.mainView}>
            <Gradient />
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1
    },
})