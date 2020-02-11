var welcome = document.querySelector('#welcome-message');
var closeTab = document.querySelector('#close-tab');
var dashboardBtn = document.querySelector('#dashboard-button');
var walletBtn = document.querySelector('#wallet-button');
var walletViewCol = document.querySelector('main');
var mainWallet = document.querySelector('#main-wallet');
var navBarBtn = document.querySelector('nav');

navBarBtn.addEventListener('click', changeView);
closeTab.addEventListener('click', closeWelcomeMessage);


function closeWelcomeMessage() {
  welcome.classList.toggle('close-window');
}

function changeView(event) {
  if (event.target.id === 'wallet-button') {
    walletBtn.classList.add('button-selected');
      walletViewCol.classList.add('close-window');
      dashboardBtn.classList.remove('button-selected');
      mainWallet.classList.remove('close-window');
  } else if (event.target.id === 'dashboard-button'){
    dashboardBtn.classList.add('button-selected');
      walletBtn.classList.remove('button-selected');
      walletViewCol.classList.remove('close-window');
      mainWallet.classList.add('close-window');
  }
}
