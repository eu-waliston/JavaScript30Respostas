window.addEventListener('keydown', function(e) {

  const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);//Pega a tecla que foi digitada no teclado
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

  if(!audio) return; //para a função da reprodução
  audio.currentTime = 0; //Faz a tecla repetir
  audio.play()
  key.classList.add('playing');
})

function removeTransition(e) {
  if(e.propertyName != 'transform') return; //se propertyName for diferene de tranform return propertyName
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));