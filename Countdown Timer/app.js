const Daysel = document.getElementById ('Days')
const hoursel = document.getElementById ('hours')
const minsel = document.getElementById ('mins')
const secondsel = document.getElementById ('seconds')


const Newyear = "1 jan 2024"

const countdown = () => {
    const NewyearDate = new Date(Newyear)
    const currentDate = new Date();

    // console.log(currentDate)
    // console.log(NewyearDate)

    const displayDate = (NewyearDate - currentDate) / 1000;
    const days = Math.floor(displayDate / 60 / 60 / 24);
    const hours = Math.floor(displayDate / 60 / 60 % 24 )
    const mins = Math.floor(displayDate / 60 % 60)
    const seconds = Math.floor (displayDate) % 60



    console.log(days)
    console.log(hours)
    console.log(mins)
    console.log(seconds)

    Daysel.innerHTML = days;
    hoursel.innerHTML = hours;
    minsel.innerHTML = mins;
    secondsel.innerHTML = seconds;

}


countdown();

setInterval(countdown, 1000)