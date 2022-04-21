import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;

    colors: {
      textTitle: string;
      textBody: string;

      background: string;
      shape: string;
      shapeBorder: string;
    };
  }
}
