const getDataJokes = async () => {
    const res = await axios.get('https://icanhazdadjoke.com', {
        headers: { 'Accept': 'application/json' }
    });
    console.log(res.data);
  };
  
  getDataJokes();