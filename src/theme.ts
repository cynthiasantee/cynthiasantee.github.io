// my-theme.ts
import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
    fontColor: "#303030",
    primaryColor: '#035946',
    secondaryColor: '#bfdbf7',
    tertiaryColor: '#e1e5f2',
    offWhite: "#f8f8ff",
    darkFontColor: 'black',
    lightFontColor: 'white'
};

export const fontColor = (backgroundColor: 'primary' | 'secondary' | 'tertiary') => {
    return {
        primary: theme.lightFontColor,
        secondary: theme.darkFontColor,
        tertiary: theme.lightFontColor
    }[backgroundColor];
}