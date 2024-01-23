//I added dark mode as a sepearte JS after the previous challange showed me that I do not need all my JS in a single script file.
//Unfortunately I am unable to get the swith to slide across, and the phase between light/dark mode is not synced and I am not sure how to rectify this.

document.addEventListener('DOMContentLoaded', function () {
  const darkModeEnabled = localStorage.getItem('darkModeEnabled');
  const body = document.body;
  const navbar = document.querySelector('.navbar');
  const footer = document.querySelector('footer');
  const icons = document.querySelectorAll('.icons i');
  const sunIcon = document.getElementById('sun');
  const moonIcon = document.getElementById('moon');
  const darkBtn = document.getElementById('dark-btn');

  function setDarkMode(enabled) {
      if (enabled) {
          body.classList.add('dark-mode');
          if (navbar) navbar.classList.add('dark-mode');
          if (footer) footer.classList.add('dark-mode');
          icons.forEach(icon => icon.classList.add('dark-mode'));
          if (sunIcon) sunIcon.classList.add('d-none');
          if (moonIcon) moonIcon.classList.remove('d-none');
      } else {
          body.classList.remove('dark-mode');
          if (navbar) navbar.classList.remove('dark-mode');
          if (footer) footer.classList.remove('dark-mode');
          icons.forEach(icon => icon.classList.remove('dark-mode'));
          if (sunIcon) sunIcon.classList.remove('d-none');
          if (moonIcon) moonIcon.classList.add('d-none');
      }
  }

  if (darkModeEnabled === 'true') {
      setDarkMode(true);
  }

  darkBtn.addEventListener('click', function () {
      body.classList.toggle('dark-mode');
      if (navbar) navbar.classList.toggle('dark-mode');
      if (footer) footer.classList.toggle('dark-mode');
      icons.forEach(icon => icon.classList.toggle('dark-mode'));

      const isDarkMode = body.classList.contains('dark-mode');
      localStorage.setItem('darkModeEnabled', isDarkMode.toString());

      if (isDarkMode) {
          if (sunIcon) sunIcon.classList.add('d-none');
          if (moonIcon) moonIcon.classList.remove('d-none');
      } else {
          if (sunIcon) sunIcon.classList.remove('d-none');
          if (moonIcon) moonIcon.classList.add('d-none');
      }
  });
});
