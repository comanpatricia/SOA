import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faTrash,
  faCheck,
  faPlus,
  faClose,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faTrash, faCheck, faPlus, faClose, faArrowLeft);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
