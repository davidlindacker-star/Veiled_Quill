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
    name: 'Christopher',
    password: 'Wissensdurst',
    displayName: 'Christopher',
    designation: 'Einberufung 03',
    greeting: 'Christopher Klaus Pfeiffer, du wurdest berufen.'
  },
  {
    name: 'Patricia',
    password: 'Weisheit',
    displayName: 'Patricia',
    designation: 'Einberufung 04',
    greeting: 'Patricia Hopp, dein Name ist im Archiv verzeichnet.'
  },
  {
    name: 'Alexander',
    password: 'Intelligenz',
    displayName: 'Alexander',
    designation: 'Einberufung 05',
    greeting: 'Alexander Sailer, deine Anwesenheit wird erwartet'
  },
  {
    name: 'Sonja',
    password: 'Fortschritt',
    displayName: 'Sonja',
    designation: 'Einberufung 06',
    greeting: 'Sonja Genter, dein Name wurde in das Register aufgenommen.'
  },
  {
    name: 'Selina',
    password: 'Lexikon',
    displayName: 'Selina',
    designation: 'Einberufung 07',
    greeting: 'Selina Büssecker, du wurdest zur Versammlung geladen.'
  },
  {
    name: 'Luca',
    password: 'Enzyklopädie',
    displayName: 'Luca',
    designation: 'Einberufung 08',
    greeting: 'Luca Leitzbach, dein Platz wurde vorgesehen.'
  },
  {
    name: 'Katharina',
    password: 'Neugier',
    displayName: 'Katharina',
    designation: 'Einberufung 09',
    greeting: 'Katharina Wagner, du wurdest für die vierte Convocation ausgewählt.'
  },
  {
    name: 'Clemens',
    password: 'Erkenntnis',
    displayName: 'Clemens',
    designation: 'Einberufung 10',
    greeting: 'Clemens Fischer, die Gesellschaft erwartet dich.'
  },
  {
    name: 'Alina',
    password: 'Aufklärung',
    displayName: 'Alina',
    designation: 'Einberufung 11',
    greeting: 'Alina Bartz, deine Anwesenheit wurde erbeten.'
  },
  {
    name: 'Christian',
    password: 'Erleuchtung',
    displayName: 'Christian',
    designation: 'Einberufung 12',
    greeting: 'Christian Bartz, du wurdest zur Versammlung geladen.'
  },
  {
    name: 'Anna',
    password: 'Akademia',
    displayName: 'Anna',
    designation: 'Einberufung 13',
    greeting: 'Anna Sluk, deine Anwesenheit ist vorgesehen.'
  },
  {
    name: 'Verena',
    password: 'Scholar',
    displayName: 'Verena',
    designation: 'Einberufung 14',
    greeting: 'Verena Büssecker, du wurdest zur Versammlung geladen.'
  },
  {
    name: 'Katharina',
    password: 'Bibliothek',
    displayName: 'Katharina',
    designation: 'Einberufung 15',
    greeting: 'Katharina Sofie Winkler, dein Erscheinen wurde vermerkt.'
  },
  {
    name: 'Florian',
    password: 'Scholar',
    displayName: 'Florian',
    designation: 'Einberufung 16',
    greeting: 'Florian Mauer, dir wurde Zugang gewährt.'
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
