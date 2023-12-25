let timer= setTimeout(popWind,2000);

function popWind(){
    let win= window.open('2.jpg','_blank','width=300 height=200')
    win.moveTo(0,800);
    setTimeout(()=>win.close(),3000)

}
