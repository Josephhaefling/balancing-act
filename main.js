var welcome = document.querySelector('#welcome-message');
var closeTab = document.querySelector('#close-tab');

closeTab.addEventListener('click', closeWelcomeMessage);

function closeWelcomeMessage() {
  welcome.classList.toggle('close-window');
}

// Wallet Button
var walletBtn = document.querySelector('#wallet-button');
var walletViewCol = document.querySelector('main');
var mainWallet = document.querySelector('#main-wallet');

function walletView() {
  console.log('hi');
  walletBtn.classList.add('button-selected');
  walletViewCol.classList.add('close-window');
  dashboardBtn.classList.remove('button-selected');
  // mainWallet.classList.remove('.close-window');
}

walletBtn.addEventListener('click', walletView);

// Dashboard Button
var dashboardBtn = document.querySelector('#dashboard-button');

function selectDashboard() {
  dashboardBtn.classList.add('button-selected');
  walletBtn.classList.remove('button-selected');
  walletViewCol.classList.remove('close-window');
}
dashboardBtn.addEventListener('click', selectDashboard);
