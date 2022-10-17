window.addEventListener('keydown',( event ) =>{
    console.log(event)
    switch (event.key){
        case 'w':
        case 'W':

        if(player.velocity.y === 0){
            player.velocity.y = -20
        }
            
        break
        case 'a':
        case 'A':
            keys.a.pressed = true
        break
        case 'd':
        case 'D':
            keys.d.pressed = true
            break
    }

})

window.addEventListener('keyup',( event ) =>{
    console.log(event)
    switch (event.key){
        case 'a':
        case 'A':
            // if(player.velocity.x === 0)
            keys.a.pressed = false
            break
        case 'd':
        case 'D':
            // if(player.velocity.x < canvas.width)
            keys.d.pressed = false
            break
    }

})