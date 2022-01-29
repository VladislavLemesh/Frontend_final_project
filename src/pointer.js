import './style.css'
import './Games/style.css'
import Icon from './Crown.svg'
import AddCrown from './Crown'


let point = document.getElementById("point")

point.addEventListener('mouseover', function( event ) {
    event.target.style.color = "purple";
})

point.addEventListener('mouseout', function( event ) {
    event.target.style.color = "#826C17";
})
AddCrown(Icon);



