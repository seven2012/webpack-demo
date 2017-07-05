import _ from 'lodash'
import $ from 'jquery'
import './style.scss'
import './hi.less'
import png from './disc-ip6.png'





function component(){
    var $h1 = $('<h1/>')
    $h1.html(_.join(['hello','sky'],' '))
    return $h1
}
$(document.body).append(component())

var img1 = document.createElement("img");
img1.src = png
document.body.appendChild(img1);

function sayHi(){
    var $div = $('<div/>')
    $div.html(_.join(['hi','moon'],' '))
    return $div
}
$(document.body).append(sayHi())