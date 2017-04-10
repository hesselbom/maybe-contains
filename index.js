module.exports = function (array, value, color) {
  var result = Math.random() >= .5
  var className = 'loader'
  var loader = document.createElement('div')
  loader.className = className
  loader.style.top = `${Math.random() * window.innerHeight}px`
  loader.style.left = `${Math.random() * window.innerWidth}px`
  var style = document.createElement('style')
  style.innerHTML = `
    .${className},
    .${className}:after {
      border-radius: 50%;
      width: 10em;
      height: 10em;
    }
    .${className} {
      margin: 60px auto;
      font-size: 10px;
      position: fixed;
      z-index: 9999;
      text-indent: -9999em;
      border-top: 1.1em solid rgba(255, 255, 255, 0.2);
      border-right: 1.1em solid rgba(255, 255, 255, 0.2);
      border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
      border-left: 1.1em solid ${color || 'white'};
      transform: translateZ(0);
      animation: ${className}-anim 1.1s infinite linear;
    }
    @keyframes ${className}-anim {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    `

  document.body.appendChild(style)
  document.body.appendChild(loader)

  return result ? `Array probably contains ${value}` : `Array probably doesn't contain ${value}`
}
