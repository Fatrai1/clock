
setInterval(()=>{
    const day = new Date();
 
    const hour = document.querySelector("#hour");
    const minutes = document.querySelector("#minutes");
    const seconds = document.querySelector("#seconds");
    const ampm = document.querySelector("#ampm");

    const h = new Date().getHours();
    const m = new Date().getMinutes();
    const s = new Date().getSeconds();
    

    hour.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
})