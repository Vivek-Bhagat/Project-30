const tl = gsap.timeline({defaults:{duration:'1', ease:'power1.out'}})

tl.to('.text',{y:'0%', stagger:'0.25',duration:2})
  .to('.slider', {y:'-100%', duration:'1.5' , delay:'1'})
  .to('.intro',{y:'-100%'},"-=1")
  .fromTo('.logo',{opacity:'0', scale:'0', x:'200'}, {opacity:'1', scale:'1', x:'0'})
  .fromTo('.nav-links li',{opacity:'0'}, {opacity:'1'})
  .fromTo('.big-text',{opacity:'0', scale:'0'}, {opacity:'1', scale:'1'},"<");





const image = document.querySelector('.image')

image.addEventListener('mousemove', function(e){
  let width = image.offsetWidth;
  let height = image.offsetHeight;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;

  console.log(mouseX + ":" + mouseY);
  let bgPosX = (mouseX/ width * 100)
  let bgPosY = (mouseY/ height * 100)

  image.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
});

image.addEventListener('mouseleave', () => {
  image.style.backgroundPosition = "center";
});