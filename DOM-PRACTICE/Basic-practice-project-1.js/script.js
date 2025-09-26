// ----1. SELECT ELEMENTS ----
// getElementById returns the element node with the given id
const nameInput = document.getElementById('nameInput');
const greetBtn = document.getElementById('greetBtn');
const colorBtn = document.getElementById('colorBtn');
const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn');
const greeting = document.getElementById('greeting');
const guestList = document.getElementById('guestList');

// ---- 2. HELPER: show greeting ----
function showGreeting() {
    // read value from input and trim whitespace
    const name = nameInput.value.trim();

    // if empty -> show error style
    if (!name) {
        greeting.textContent = "Please Enter a name!";
        greeting.classList.add('error');
        return;
    }

    // valid name -> remove error class and show greetings (template literal)
    greeting.classList.remove('error');
    greeting.textContent = `Hello ${name}!  welcome.`;

    // remove old faded-out class if exist
    greeting.classList.remove('fade-out');
    greeting.style.display = 'block';

    // Force reflow so the browser notices the change (helps in some situations)
  void greeting.offsetWidth;

  // Clear previously scheduled fade (if any)
  if (greeting._fadeTimeout) {
    clearTimeout(greeting._fadeTimeout);
  }


    // After 3 seconds -> start fade
  greeting._fadeTimeout = setTimeout(() => {
    // add fade class to start CSS transition (opacity 1 -> 0)
    greeting.classList.add('fade-out');

    // after the transition ends, hide element (remove space)
    const onTransitionEnd = () => {
      // optional: completely remove from layout after fade
      greeting.style.display = 'none';
      // cleanup listener
      greeting.removeEventListener('transitionend', onTransitionEnd);
    };

    // attach the listener that runs once when the transition finishes
    greeting.addEventListener('transitionend', onTransitionEnd);
  }, 3000);
}

// ---- 3. BUTTON: greet on click ----
greetBtn.addEventListener('click', showGreeting);

// also allow pressing enter inside the input to greet
nameInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') showGreeting();
});

// ----4. Toggle a simple page color theme (class toggle) ----
colorBtn.addEventListener('click', () => {
    document.body.classList.toggle('alt-theme');
});

// ----5. Add name to guest list (createElement + appendChild)----
addBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (!name)
        return; // nothing to return

    // create a new <li> element
    const li = document.createElement('li');
    li.textContent = name;
    
    guestList.appendChild(li); // attach to the <ul>
    nameInput.value = ''; // clear input for convenience
});

// ----6. clear everything ----
clearBtn.addEventListener('click', () => {
  greeting.textContent = 'Your greeting will appear here.';
  greeting.classList.remove('error');
  guestList.innerHTML = ''; 
  nameInput.value = '';
  document.body.classList.remove('alt-theme');

  // FIX: Reset fade state
  greeting.classList.remove('fade-out');
  greeting.style.display = 'block';

  if (greeting._fadeTimeout) {
    clearTimeout(greeting._fadeTimeout);
  }
});