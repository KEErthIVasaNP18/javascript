const movie = {
    actor: "Ajith",
    music: "Anirudh",
    director: " Murugadoss",
    producer: "Anbu"
}

const { actor , music , director , producer} = movie
console.log(producer, director, music ,actor);


const {music : MyFavMusic , actor: MyFavAct} = movie
console.log(MyFavMusic , MyFavAct);

function sings({music}){
    return music
}
console.log(sings(movie));

