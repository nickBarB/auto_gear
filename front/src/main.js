import {createApp} from 'vue'
import router from "./router"
import store from './store'
import axios from "axios";
import './style.css'
import App from './App.vue'
import 'bootstrap'
import './color-modes.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

axios.defaults.baseURL = 'http://127.0.0.1:8000'

try {
    const app = createApp(App);
    app.use(store);
    app.use(router, axios);

    app.mount("#app");
} catch (e) {
    debugger;
    console.log(e);
}

