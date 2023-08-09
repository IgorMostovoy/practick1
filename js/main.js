"use strict";
let numberOffilms;

function start() {
  numberOffilms = prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOffilms == "" || numberOffilms == null || isNaN(numberOffilms)) {
    numberOffilms = prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
start();

const personalMovieDB = {
  count: numberOffilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
console.log(personalMovieDB);

function showMyDB() {
  if (personalMovieDB.privat == false) console.log(personalMovieDB);
}
showMyDB();

function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
    const a = prompt(`Ваш любимый жанр под номером ${[i]}`);
    personalMovieDB.genres.push(a);
  }
}
writeYourGenres();

function rememberMyFilms() {
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
}
rememberMyFilms();

function detectPersonalLevel() {
  personalMovieDB.count < 10
    ? alert("Просмотрено довольно мало фильмов")
    : personalMovieDB.count > 10 && personalMovieDB.count < 30
    ? alert("Вы классический зритель")
    : personalMovieDB.count > 30
    ? alert("Вы киноман")
    : alert("Произошла ошибка");
}
detectPersonalLevel();
