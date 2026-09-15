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
    name: '1',
    password: 'Host',
    displayName: 'Tamara',
    designation: 'Einberufung 04',
    greeting: 'Tamara Büssecker, deine Anwesenheit wurde erbeten.'
  },
  {
    name: '2',
    password: 'Host',
    displayName: '2',
    designation: 'Einberufung 05',
    greeting: 'Tamara Büssecker, deine Anwesenheit wurde erbeten.'
  },
  {
    name: '3',
    password: 'Host',
    displayName: '3',
    designation: 'Einberufung 06',
    greeting: 'Tamara Büssecker, deine Anwesenheit wurde erbeten.'
  },
  {
    name: '4',
    password: 'Host',
    displayName: '4',
    designation: 'Einberufung 07',
    greeting: 'Tamara Büssecker, deine Anwesenheit wurde erbeten.'
  },
  {
    name: '5',
    password: 'Host',
    displayName: '5',
    designation: 'Einberufung 08',
    greeting: 'Tamara Büssecker, deine Anwesenheit wurde erbeten.'
  },
  {
    name: '6',
    password: 'Host',
    displayName: '6',
    designation: 'Einberufung 09',
    greeting: 'Tamara Büssecker, deine Anwesenheit wurde erbeten.'
  },
  {
    name: '7',
    password: 'Host',
    displayName: '7',
    designation: 'Einberufung 10',
    greeting: 'Tamara Büssecker, deine Anwesenheit wurde erbeten.'
  },
  {
    name: '8',
    password: 'Host',
    displayName: '8',
    designation: 'Einberufung 11',
    greeting: 'Tamara Büssecker, deine Anwesenheit wurde erbeten.'
  },
  {
    name: '9',
    password: 'Host',
    displayName: '9',
    designation: 'Einberufung 12',
    greeting: 'Tamara Büssecker, deine Anwesenheit wurde erbeten.'
  }

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
