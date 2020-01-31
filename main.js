var welcome = document.querySelector('#welcome-message');
var closeTab = document.querySelector('#close-tab');

closeTab.addEventListener('click', closeWelcomeMessage);

function closeWelcomeMessage() {
  welcome.classList.add('close-welcome');
}
