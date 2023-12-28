setInterval(() => {
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    // time sec mm hr
    let sec_dot = document.querySelector('.sec_dot');
    let min_dot = document.querySelector('.min_dot');
    let hr_dot = document.querySelector('.hr_dot');

    // niddles
    let sc = document.getElementById('sc');
    let mn = document.getElementById('mn');
    let hr = document.getElementById('hr');

    // time elements
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    // clock contents 12 hr format
    hh.style.strokeDashoffset = 510 - (510 * h) / 12; //12hr
    mm.style.strokeDashoffset = 630 - (630 * m) / 60; //60 minutes
    ss.style.strokeDashoffset = 760 - (760 * s) / 60; //60 seconds

    // transforming clock style
    sec_dot.style.transform = `rotateZ(${s * 6}deg)`; // 360 / 60seconds = 6;
    min_dot.style.transform = `rotateZ(${m * 6}deg)`; // 360 / 60minutes = 6;
    hr_dot.style.transform = `rotateZ(${h * 30}deg)`; // 360 / 12hours = 30;

    // niddles rotation
    sc.style.transform = `rotateZ(${s * 6}deg)`; // seconds
    mn.style.transform = `rotateZ(${m * 6}deg)`; // minutes
    hr.style.transform = `rotateZ(${h * 30}deg)`; // hours
})

/* -> setting all this inside on setInterval arrow function to run the clock
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');


// time elements
let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

// clock contents 12 hr format
hh.style.strokeDashoffset = 510 - (510 * h) / 12; //12hr
mm.style.strokeDashoffset = 630 - (630 * m) / 60; //60 minutes
ss.style.strokeDashoffset = 760 - (760 * s) / 60; //60 seconds
*/