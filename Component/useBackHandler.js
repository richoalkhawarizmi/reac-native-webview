import React, { useEffect } from 'react'
import { BackHandler } from 'react-native';

const useBackHandler = (backHandler) => {
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', backHandler)
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', backHandler)
        };
    }, [])
}

export default useBackHandler