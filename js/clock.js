//. létrehozok egy dátum típusú objektumot
const getCurrentTine = () => {
    const currentDate = new Date;
    // Kiolvasom a szükséges részeket a dátumból
    const hours = padNumbers(currentDate.getHours());
    const minutes = padNumbers(currentDate.getMinutes());
    const seconds = padNumbers(currentDate.getSeconds());

    //Visszaadom a formázott dátumot
    return `${[hours, minutes, seconds].join(':')}`;
};

//Tíznél kisebb számok kiegészítése 0-val

const padNumbers = (num) => {
    // if (num < 10) { 
    //     return '0' + num;
    // }
    // return '' + num;

    // return num ? '0' + num : '' + num;
    

    return num < 10 ? `0${num}` : `${num}`;
}
// Meghívom a getCurrrentTime függvényt másod
setInterval( () => {
    const time = getCurrentTine();
    console.log(time);
    
    const clockFace = document.querySelector('.clock-face');
    clockFace.innerHTML = time;

}, 1000); 
