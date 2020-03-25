async function getMovies(path) {
    try {
        const response = await fetch(path);
        const responseMovies = await response.json();
        console.log(responseMovies);
        return responseMovies;
    } catch (error) {
        console.log(error);
    }
}

export {getMovies};
