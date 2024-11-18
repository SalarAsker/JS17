

// date object
let dt = new Date();

// year
document.querySelector('.year').innerText = dt.getFullYear();

// date
document.querySelector('.date').innerText = dt.getDate();

// month
document.querySelector('.month').
innerText = dt.toLocaleDateString('en', {month: 'long'});

// day name
document.querySelector('.day-name').
innerText = dt-toLocaleDateString('en', {weekday:'long'});


