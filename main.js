const hr = document.querySelector(".hr");
const mn = document.querySelector(".mn");
const sc = document.querySelector(".sc");

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;


    let hours = document.querySelector("#hour");
    let minutes = document.querySelector("#minute");
    let seconds = document.querySelector("#second");
    let amap = document.querySelector("#ampm");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    var am = "AM";


    // convert 24 hour time to 12 hour format
    if (h > 12) {
        h = h - 12;
        var am = 'PM'
    }

    // add to the begining of number  if less than 10
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;


    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    amap.innerHTML = am;


})

