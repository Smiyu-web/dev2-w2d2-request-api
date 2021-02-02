
const button = document.querySelector('button');
const ul = document.querySelector('ul');

const getDataJokes = async () => {
    const res = await axios.get('https://icanhazdadjoke.com', {
        headers: { 'Accept': 'application/json' }
    });
    // console.log(res.joke);
    addJokes(res.data.joke);
};

// getDataJokes();

const addJokes = (joke) => {
    const li = document.createElement('li');
    li.innerHTML = joke;
    ul.appendChild(li);
}

// function addJokes(joke) {
//     const li = document.createElement('li');
//     li.innerHTML = joke;
//     ul.appendChild(li);
// }

button.addEventListener('click', (e) => {
    e.preventDefault();
    getDataJokes();
})