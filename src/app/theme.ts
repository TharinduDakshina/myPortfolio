import {createTheme} from "@mui/material";

declare module '@mui/material/styles' {
    interface TypographyVariants {
        largeTitle: React.CSSProperties,
    }

    interface TypographyVariantsOptions {
        largeTitle?: React.CSSProperties,
    }

    interface TypeBackground {
        navbar?: string;
    }

    interface Palette {
        background: TypeBackground;
    }

    interface PaletteOptions {
        background?: Partial<TypeBackground>;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        lageTitle: true;
    }
}

const theme = createTheme({
    typography: {
        largeTitle: {
            fontFamily: 'Satoshi, sans-serif',
            fontSize: '34px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '41px',
        },

    },
    palette: {
        background: {
            paper:'#6b6868',
            navbar: '#ffffff'
        },
        text: {
          primary: '#7F7F7F',
            secondary: '#090808'
        },
    }
})

export default theme;