
const button = document.querySelector('button');
const ul = document.querySelector('ul');

const getDataJokes = async () => {
    return res = await axios.get('https://icanhazdadjoke.com', {
        headers: { 'Accept': 'application/json' }
    });
};

button.addEventListener('click', (e) => {
  getDataJokes()
  .then(() => {
    const li = document.createElement('li');
    li.innerHTML = res.data.joke;
    ul.appendChild(li);
  })
  .catch(() => {
    console.log('Error!');
  })
})