import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      backgroundPrimary: string;
      backgroundInput: string;
      primaryColor: string;
      secondaryColor: string;
      tertiaryColor: string;
    };
  }
}