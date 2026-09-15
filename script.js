const guests = [
  {
    name: 'David',
    password: 'Test',
    displayName: 'David',
    designation: 'Einberufung 01',
    greeting: 'David Lindacker, dein Name wurde in das Verzeichnis aufgenommen.'
  },
  {
    name: 'Tamara',
    password: 'Host',
    displayName: 'Tamara',
    designation: 'Einberufung 02',
    greeting: 'Tamara Büssecker, deine Anwesenheit wurde erbeten.'
  },
  {
    name: 'Chris',
    password: 'Wissensdurst',
    displayName: 'Chris',
    designation: 'Einberufung 03',
    greeting: 'Christopher Klaus Pfeiffer, du wurdest berufen.'
  },
  {
    name: 'Tamara',
    password: 'Host',
    displayName: 'Tamara',
    designation: 'Geladene Person 006',
    greeting: 'Tamara, deine Anwesenheit wurde erbeten.'
  },
  {
    name: 'Tamara',
    password: 'Host',
    displayName: 'Tamara',
    designation: 'Geladene Person 006',
    greeting: 'Tamara, deine Anwesenheit wurde erbeten.'
  },
  {
    name: 'Tamara',
    password: 'Host',
    displayName: 'Tamara',
    designation: 'Geladene Person 006',
    greeting: 'Tamara, deine Anwesenheit wurde erbeten.'
  },
  {
    name: 'Tamara',
    password: 'Host',
    displayName: 'Tamara',
    designation: 'Geladene Person 006',
    greeting: 'Tamara, deine Anwesenheit wurde erbeten.'
  },
  {
    name: 'Tamara',
    password: 'Host',
    displayName: 'Tamara',
    designation: 'Geladene Person 006',
    greeting: 'Tamara, deine Anwesenheit wurde erbeten.'
  },
  {
    name: 'Tamara',
    password: 'Host',
    displayName: 'Tamara',
    designation: 'Geladene Person 006',
    greeting: 'Tamara, deine Anwesenheit wurde erbeten.'
  },
  {
    name: 'Tamara',
    password: 'Host',
    displayName: 'Tamara',
    designation: 'Geladene Person 006',
    greeting: 'Tamara, deine Anwesenheit wurde erbeten.'
  },
  {
    name: 'Tamara',
    password: 'Host',
    displayName: 'Tamara',
    designation: 'Geladene Person 006',
    greeting: 'Tamara, deine Anwesenheit wurde erbeten.'
  },
  {
    name: 'Tamara',
    password: 'Host',
    displayName: 'Tamara',
    designation: 'Geladene Person 006',
    greeting: 'Tamara, deine Anwesenheit wurde erbeten.'
  },

];

const loginView = document.getElementById('loginView');
const inviteView = document.getElementById('inviteView');
const loginForm = document.getElementById('loginForm');
const nameInput = document.getElementById('nameInput');
const passwordInput = document.getElementById('passwordInput');
const errorMessage = document.getElementById('errorMessage');
const guestHeading = document.getElementById('guestHeading');
const guestDesignation = document.getElementById('guestDesignation');
const personalGreeting = document.getElementById('personalGreeting');
const logoutButton = document.getElementById('logoutButton');

function normalise(value) {
  return value.trim().toLocaleLowerCase('de-DE');
}

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = normalise(nameInput.value);
  const password = passwordInput.value.trim();

  const guest = guests.find(
    entry => normalise(entry.name) === name && entry.password === password
  );

  if (!guest) {
    errorMessage.textContent = 'Zugang verweigert. Name oder Passphrase wurden nicht erkannt.';
    return;
  }

  errorMessage.textContent = '';
  guestHeading.textContent = guest.displayName;
  guestDesignation.textContent = guest.designation;
  personalGreeting.textContent = guest.greeting;

  loginView.classList.add('hidden');
  inviteView.classList.remove('hidden');
});

logoutButton.addEventListener('click', () => {
  inviteView.classList.add('hidden');
  loginView.classList.remove('hidden');
  loginForm.reset();
  nameInput.focus();
});
