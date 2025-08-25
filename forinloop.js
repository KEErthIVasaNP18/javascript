const movie = {
    actor: "Dhanush",
    music: "Arr",
    director: "Lokesh",
    producer: "Ags",
}

// console.log(Object.keys(movie));
// console.log(Object.values(movie));
movie.actress = "Trisha"
delete movie.producer
for (let job in movie) {
    // console.log(movie[job]);
    console.log(`${job} its a ${movie[job]}`);

}