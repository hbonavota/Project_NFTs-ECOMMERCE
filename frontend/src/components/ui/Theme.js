import { createTheme } from '@material-ui/core/styles';

const emeraldgreen = "#368B85";
const lightgray = "#93B5C6";

export default createTheme({
    palette: {
        common: {
            green: `${emeraldgreen}`,
            gray: `${lightgray}`,
        },
        primary: {
            main: `${emeraldgreen}`
        },
        secondary: {
            main: `${lightgray}`
        }
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem",
        }
    }
});