const removeCrashRideTransition = e => {
    if(e.propertyName==='transform')
    {
        e.target.style.transform='rotate(-7.2deg) scale(1.5)';
    }
}

const removeHiHatTopTransition = e => {
    if(e.propertyName==='top')
    {
        e.target.style.top='166px';
    }
}

const removeKeyTransition = e => {
    if(e.propertyName==='transform')
    {
        e.target.classList.remove('playing');
    } 
}

const drumKeys=document.querySelectorAll('.key');
drumKeys.forEach( key => {
    key.addEventListener('transitionend',removeKeyTransition);
});

const animateCrashOrRide = () => {
    const crashRide=document.querySelector('#crash-ride');
    crashRide.style.transform='rotate(0deg) scale(1.5)';
    crashRide.addEventListener('transitionend',removeCrashRideTransition);
}

const animateHiHatClosed = () => {
    const hiHatTop=document.querySelector('#hihat-top');
    hiHatTop.style.top='171px';
    hiHatTop.addEventListener('transitionend',removeHiHatTopTransition);
}

window.addEventListener('keydown',(event) => {
    const eventKey=event.key;
    const divKey=document.querySelector(`div[data-key=${eventKey}]`);
    const audio=document.querySelector(`audio[data-key=${eventKey}]`);

    if(audio!==null)
    {
        divKey.classList.add('playing');

        audio.currentTime=0;
        audio.play();

        switch(eventKey)
        {
            case 'e':
            case 'r':
                animateCrashOrRide();
                break;
            case 'i':
            case 'k':
                animateHiHatClosed();
                break;
        }
    }
});
