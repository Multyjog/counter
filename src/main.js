import Vue from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full";
import { ValidationObserver } from "vee-validate";

import "primevue/resources/primevue.css";
import "primevue/resources/themes/md-light-indigo/theme.css";
import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false;
Vue.use(PrimeVue);
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

new Vue({
  render: h => h(App)
}).$mount("#app");
