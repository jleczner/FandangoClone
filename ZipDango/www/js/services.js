angular.module('starter.services', [])

.factory('Movie', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var movie = [{
  "tmsId": "MV008813520000",
  "rootId": "12806084",
  "subType": "Feature Film",
  "title": "Queen of Katwe",
  "releaseYear": 2016,
  "releaseDate": "2016-09-10",
  "titleLang": "en",
  "descriptionLang": "en",
  "entityType": "Movie",
  "genres": ["Biography", "Drama"],
  "longDescription": "Living in the slum of Katwe in Kampala, Uganda, is a constant struggle for 10-year-old Phiona (Madina Nalwanga) and her family. Her world changes one day when she meets Robert Katende (David Oyelowo), a missionary who teaches children how to play chess. Phiona becomes fascinated with the game and soon becomes a top player under Katende's guidance. Her success in local competitions and tournaments opens the door to a bright future and a golden chance to escape from a life of poverty.",
  "shortDescription": "Missionary Robert Katende mentors young Ugandan chess prodigy Phiona Mutesi (Madina Nalwanga).",
  "topCast": ["Madina Nalwanga", "David Oyelowo", "Lupita Nyong'o"],
  "directors": ["Mira Nair"],
  "officialUrl": "http://movies.disney.com/queen-of-katwe",
  "qualityRating": {
    "ratingsBody": "TMS",
    "value": "3"
  },
  "ratings": [{
    "body": "Motion Picture Association of America",
    "code": "PG"
  }],
  "advisories": ["Adult Situations"],
  "runTime": "PT02H04M",
  "preferredImage": {
    "width": "240",
    "height": "360",
    "caption": {
      "content": "Queen of Katwe (2016)",
      "lang": "en"
    },
    "uri": "assets/p12806084_p_v5_ab.jpg",
    "category": "Poster Art",
    "text": "yes",
    "primary": "true"
  },
  "showtimes": [{
    "theatre": {
      "id": "10685",
      "name": "Penn Cinema Riverfront IMAX"
    },
    "dateTime": "2016-09-30T11:30",
    "barg": false,
    "ticketURI": "http://www.fandango.com/tms.asp?t=AAWVI&m=161779&d=2016-09-30"
  }]

  return {
    all: function() {
      return movie;
    },
    remove: function(movie) {
      movie.splice(movie.indexOf(movie), 1);
    },
    get: function(tmsId) {
      for (var i = 0; i < movie.length; i++) {
        if (movie[i].id === parseInt(tmsId)) {
          return movie[i];
        }
      }
      return null;
    }
  };
});