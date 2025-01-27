function updateViewBox() {
  const svgElement = document.getElementById('mySVG');
  if (window.innerWidth <= 768) {
    svgElement.setAttribute('viewBox', '0 0 310 210');
    document.querySelector('.mask-rect').setAttribute('width', '310');
    document.querySelector('.rect1').setAttribute('x', '195');
    document.querySelector('.rect1').setAttribute('width', '110');
    document.querySelector('.rect2').setAttribute('x', '50');
    document.querySelector('.rect2').setAttribute('width', '160');
    document.querySelector('.rect3').setAttribute('x', '10');
    document.querySelector('.rect3').setAttribute('width', '60');
    document.querySelector('.rect4').setAttribute('x', '75');
    document.querySelector('.rect4').setAttribute('y', '235');
    document.querySelector('.rect4').setAttribute('width', '45');
  } else {
    svgElement.setAttribute('viewBox', '0 0 500 210');
    document.querySelector('.mask-rect').setAttribute('width', '500');
    document.querySelector('.rect1').setAttribute('x', '205');
    document.querySelector('.rect1').setAttribute('width', '145');
    document.querySelector('.rect2').setAttribute('x', '145');
    document.querySelector('.rect2').setAttribute('width', '70');
    document.querySelector('.rect3').setAttribute('x', '200');
    document.querySelector('.rect3').setAttribute('width', '110');
    document.querySelector('.rect4').setAttribute('x', '220');
    document.querySelector('.rect4').setAttribute('y', '180');
    document.querySelector('.rect4').setAttribute('width', '275');
  }
}
window.addEventListener('resize', updateViewBox);
window.addEventListener('load', updateViewBox);