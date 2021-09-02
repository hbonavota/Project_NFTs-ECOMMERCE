import { createTheme } from '@material-ui/core/styles';

const emeraldgreen = "#368B85";
const lightgrey = "#93B5C6";

export default createTheme({
    palette: {
        common: {
            green: `${emeraldgreen}`,
            grey: `${lightgrey}`,
        },
        primary: {
            main: `${emeraldgreen}`
        },
        secondary: {
            main: `${lightgrey}`
        }
    }
});