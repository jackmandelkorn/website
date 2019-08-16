const LAG = 100

$(".screen").mousemove((event) => {
  let element = event.target
  if (element.className === "gloss") {
    element = element.parentElement
  }
  let gloss = element.childNodes[1]
  let position = {
    x: (Math.floor(event.pageX - $(element).offset().left) - ($(element).width() / 2)) * (-1),
    y: Math.floor(event.pageY - $(element).offset().top) - ($(element).height() / 2),
  }
  let brightness = Math.sqrt((Math.max(position.y,0) / (609 / 2)))
  let dimming = 4
  let shrinkX = 13
  let shrinkY = ((shrinkX * (609 / 281)) * 1.2)
  let angle = Math.round(((Math.atan2((position.y * (-1)), position.x) * (180 / Math.PI)) + 180))
  angle = (Math.min(Math.max(angle,40),140) - 90)
  gloss.style.background = `linear-gradient(${angle}deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 80%)`;
  gloss.style.opacity = (brightness / dimming)
  element.style.transform = `rotateX(${(position.y / shrinkY)}deg) rotateY(${(position.x / shrinkX)}deg) scale3d(1.03, 1.03, 1.03)`;
})

$(".screen").mouseout((event) => {
  let element = event.target
  if (element.className === "gloss") {
    element = element.parentElement
  }
  let gloss = element.childNodes[1]
  gloss.style.background = `linear-gradient(315deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 80%)`;
  gloss.style.opacity = 0
  element.style.transform = "rotateX(0deg) rotateY(0deg) scale3d(1.0, 1.0, 1.0)";
})

setTimeout(() => {
  document.body.style.opacity = "1"
},LAG)
