"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    numberOffilms = prompt("Сколько фильмов вы уже посмотрели?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },

  showMyDB: function () {
    if (personalMovieDB.privat == false) console.log(personalMovieDB);
  },

  toggleVisibleMyDB: function () {
    if(personalMovieDB.privat){
      personalMovieDB.privat = false;
    }else{
      personalMovieDB.privat = true;
    }
  },

  writeYourGenres: function () {
    for (let i = 1; i < 4; i++) {
      const a = prompt(`Ваш любимый жанр под номером ${[i]}`);

      if(genre === '' || genre == null) {
        console.log('Вы ввели некорректные данные или не ввели их вовсе');
        i--;
      }else{
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
console.log(`Любимый жанр ${i + 1} - это ${item}`)
        });
  },

  rememberMyFilms: function () {
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
  },

  detectPersonalLevel: function () {
    personalMovieDB.count < 10
      ? alert("Просмотрено довольно мало фильмов")
      : personalMovieDB.count > 10 && personalMovieDB.count < 30
      ? alert("Вы классический зритель")
      : personalMovieDB.count > 30
      ? alert("Вы киноман")
      : alert("Произошла ошибка");
  },
};
