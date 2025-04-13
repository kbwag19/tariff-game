document.addEventListener('DOMContentLoaded', function() {
  // Example: alert when Start button is clicked
  // document.getElementById('start-btn').addEventListener('click', () => {
  //   alert('Journey started!');
  // });

  // Placeholder for dropdown change logic
  const select = document.getElementById('country-select');
  select.addEventListener('change', function() {
    // Update tariff-info or populate shipping box slots here
    console.log('Selected country:', this.value);
  });
});

