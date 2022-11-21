import Toastify from "toastify-js"; // DEPENDENCY TOASTIFY JS
import "toastify-js/src/toastify.css"; // STYLES DEPENDENCY TOASTIFY JS

const toastifyNotication = (message) => {
    Toastify({
        text: message,
        duration: 3000,
        gravity: "bottom",
        className: "toastify-notification",
    }).showToast();
};

export { toastifyNotication };
