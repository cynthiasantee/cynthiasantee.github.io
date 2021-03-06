// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
      primaryColor: string;
      secondaryColor: string;
      tertiaryColor: string;
      fontColor: string;
      offWhite: string;
      darkFontColor: string;
      lightFontColor: string;
  }
}