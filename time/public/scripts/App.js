var anime = document.getElementById('anime'),
message = document.getElementById('message'),
christmasDate = new Date(`Dec 25, ${new Date().getFullYear()} 00:00:00`).getTime(),
christmasOver = new Date(`Dec 26 ${new Date().getFullYear()} 00:00:00`).getTime();
setInterval(() => {
    // Get todays date and time (ms)
    const now = new Date().getTime()   
    // Distance from now and the launch date (ms)
    const distance = christmasDate - now;  
    // Time calculation
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)
    // Display result
    message.innerHTML = `
    <div>${days}<span>Days</span></div> 
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
    `;
    if(now>christmasOver){
christmasDate = new Date(`Dec 24, ${new Date().getFullYear()+1} 24:00:00`).getTime();
christmasOver = new Date(`Dec 25 ${new Date().getFullYear()+1} 24:00:00`).getTime();
  }
    else if(now<christmasOver&&now>christmasDate){
    document.title = 'Merry Christmas !!'
    anime.innerHTML = 'Merry Christmas'
    message.innerHTML = ""
}
}, 1000);
  