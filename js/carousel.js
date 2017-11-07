let lis = document.getElementsByTagName('li');
for (let i = 0; i < lis.length; i++) {
    lis[i].style.position = 'relative';
    var span = document.createElement('span');
    span.style.cssText = 'position:absolute;left:0;top:0';
    span.innerHTML = i + 1;
    lis[i].appendChild(span);
}

const width = 320;
const count = 1;
let carousel = document.getElementById('carousel');
let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');
let position = 0;

carousel.querySelector('.prev').onclick = function() {
    position = Math.min(position + width * count, 0)
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
    position = Math.max(position - width * count, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};
