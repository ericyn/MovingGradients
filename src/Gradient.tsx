import React from "react";
import { Text } from 'react-native';
import { Canvas, useValue } from "@shopify/react-native-skia";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScreenWidth } from './constants';
import {
    useAnimatedSensor,
    SensorType,
    useAnimatedReaction,
    useSharedValue,
    Extrapolate,
} from 'react-native-reanimated';

export const Gradient = () => {
    const safeAreaInsets = useSafeAreaInsets();
    const width = ScreenWidth - 32;
    const height = 240;
    const x = (ScreenWidth - width) / 2;
    const y = safeAreaInsets.top;

    const animatedSensor = useAnimatedSensor(SensorType.ROTATION, { interval: 1 });
    const roll = useSharedValue(0);
    const pitch = useSharedValue(0);
    const rotateX = useValue(0);
    const rotateY = useValue(0);
    const translateX = useValue(0);
    const translateY = useValue(0);
    
    return (
        <Canvas>

        </Canvas>
    );
}