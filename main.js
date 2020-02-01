var welcome = document.querySelector('#welcome-message');
var closeTab = document.querySelector('#close-tab');

closeTab.addEventListener('click', closeWelcomeMessage);

function closeWelcomeMessage() {
  welcome.classList.toggle('close-window');
}

// Wallet Button
var walletBtn = document.querySelector('#wallet-button');
var walletViewCol = document.querySelector('main');

function walletView() {
  console.log('hi');
  walletBtn.classList.add('button-selected');
  walletViewCol.classList.add('close-window');
  dashboardBtn.classList.remove('button-selected');
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
