window.addEventListener('DOMContentLoaded', () => {
        const circlePath=
        'M2.55772 78C2.55772 51.0471 16.9369 26.1415 40.2789 12.6651C63.6208 -0.811403 92.3792 -0.811402 115.721 12.6651C139.063 26.1415 153.442 51.0471 153.442 78C153.442 104.953 139.063 129.858 115.721 143.335C92.3792 156.811 63.6208 156.811 40.2789 143.335C16.9369 129.858 2.55772 104.953 2.55772 78Z';

        const shieldPath=
        'M9.07453 13.1333L78 2.52941L146.925 13.1333C150.654 13.707 153.376 16.9608 153.283 20.732L150.929 115.652C150.686 125.46 145.237 134.395 136.629 139.1L78 171.151L19.3713 139.1C10.7632 134.395 5.31382 125.46 5.07066 115.652L2.71726 20.732C2.62376 16.9608 5.34599 13.707 9.07453 13.1333Z';
        
        const circle = document.querySelector('#logo path');
        let toggle = false;
        let btnToggle = false;

        circle.addEventListener('click', ()=>{
        //Make Timeline 
        const timeline = anime.timeline({
                duration: 300,
                easing: toggle ? 'cubicBezier(.4,0,.6,1)' : 'cubicBezier(0,0,1,.3)'
        });

        //Adding To Timeline
        timeline
        .add({
                targets:'#logo path',
                d:[
                 {value: toggle ? circlePath : shieldPath}
                ]
        });
        //Toggles animations
         if(!toggle){
                toggle = true;
        }else{
                toggle=false;
        }
    });

    //Toggle Button Shadow
    const AdButton = document.getElementById('AdBlock');
    const StatsButton = document.getElementById('Analytics');



    AdButton.addEventListener('click', ()=>{
        if(StatsButton.classList.contains('Toggled')){
            StatsButton.classList.replace('Toggled', 'Untoggled')
            AdButton.classList.replace('Untoggled', 'Toggled')
        }
    })

    StatsButton.addEventListener('click', ()=>{
        if(AdButton.classList.contains('Toggled')){
            AdButton.classList.replace('Toggled', 'Untoggled')
            StatsButton.classList.replace('Untoggled', 'Toggled')
        }
    })

})
