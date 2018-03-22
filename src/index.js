import './css/reboot.css';
import './css/index.css';
import './sass/test.scss';
import App from "./app";

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;