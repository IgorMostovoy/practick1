"use strict";
const numberOffilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOffilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последний просмотренных фильмов?", ""),
    b = prompt("На сколько оцените его?", "");

  if (
    a != null &&
    b != null &&
    a != "" &&
    b != "" &&
    a.length < 50 &&
    b.length < 50
  ) {
    personalMovieDB.movies[a] = b;
  } else {
    i--;
  }
}

// if(personalMovieDB.count < 10){
// 	alert("Просмотрено довольно мало фильмов");
// }else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
// 	alert("Вы классический зритель")
// }else if(personalMovieDB.count > 30 ){
// 	alert("Вы киноман")
// }else{
// 	alert("Произошла ошибка")
// }

personalMovieDB.count < 10
  ? alert("Просмотрено довольно мало фильмов")
  : personalMovieDB.count > 10 && personalMovieDB.count < 30
  ? alert("Вы классический зритель")
  : personalMovieDB.count > 30
  ? alert("Вы киноман")
  : alert("Произошла ошибка");

console.log(personalMovieDB);

