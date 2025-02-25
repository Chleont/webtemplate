import { createContext } from "react";

export const render = createContext({
    isMobile: window.innerWidth <= 1080,
    headerHeight: 48,
    setMobile(value) {
        this.mobile = value;
        return value;
    },
});

// export const locale = createContext({
//     locale: i18n.language,//document.cookie && (document.cookie.substring(7, 9) == 'el' || document.cookie.substring(7, 9) == 'cy' || document.cookie.substring(7, 9) == 'se') ? document.cookie.substring(7, 9) : "en",
//     setLocale(loc) {
//         if (loc != this.locale) {
//             fetch(BACKEND_URL + "/api/set-locale/" + loc, {
//                 method: 'GET',
//                 credentials: 'include'
//             }).then(r => {
//                 if (r.status == 200) {
//                     console.log('hanging cookie');
//                     document.cookie = '';
//                     document.cookie = `locale=${loc}&path=${window.location.hostname}; path=${window.location.href}; max-age=31536000;`;
//                     console.log(document.cookie);
//                     this.locale = loc;
//                 }

//             })
//                 .catch((error) => {
//                     console.log(error);
//                 });
//         }
//     }
// });