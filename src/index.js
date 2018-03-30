/* eslint-disable no-unused-vars */
// Components
import App from "./app";

// Styles
import './css/reboot.css';
import './fonts/qualcomm-next/fonts.css';
import './sass/app.scss';

/* eslint-disable no-console */
if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;