console.log('it fucking works', data)

const App = document.getElementById('App');

const values = Object.keys(data).map(key => `<p>${key}: ${data[key]}</p>`);

App.innerHTML = values.join('\n');
