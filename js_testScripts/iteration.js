const myFavouriteAuthors = {
    allAuthors: {
      fiction: [
        'Agatha Christie', 
        'J. K. Rowling',
        'Dr. Seuss'
      ],
      scienceFiction: [
        'Neal Stephenson',
        'Arthur Clarke',
        'Isaac Asimov', 
        'Robert Heinlein'
      ],
      fantasy: [
        'J. R. R. Tolkien',
        'J. K. Rowling',
        'Terry Pratchett'
      ],
    },
    [Symbol.iterator]() {
      // Get all the authors in an array
      const genres = Object.values(this.allAuthors);
      
      // Store the current genre and author index
      let currentAuthorIndex = 0;
      let currentGenreIndex = 0;
      
      return {
        // Implementation of next()
        next() {
          // authors according to current genre index
          const authors = genres[currentGenreIndex];
          
          // doNotHaveMoreAuthors is true when the authors array is exhausted.
          // That is, all items are consumed.
          const doNothaveMoreAuthors = !(currentAuthorIndex < authors.length);
          if (doNothaveMoreAuthors) {
            // When that happens, we move the genre index to the next genre
            currentGenreIndex++;
            // and reset the author index to 0 again to get new set of authors
            currentAuthorIndex = 0;
          }
          
          // if all genres are over, then we need tell the iterator that we 
          // can not give more values.
          const doNotHaveMoreGenres = !(currentGenreIndex < genres.length);
          if (doNotHaveMoreGenres) {
            // Hence, we return done as true.
            return {
              value: undefined,
              done: true
            };
          }
          
          // if everything is correct, return the author from the 
          // current genre and incerement the currentAuthorindex
          // so next time, the next author can be returned.
          return {
            value: genres[currentGenreIndex][currentAuthorIndex++],
            done: false
          }
        }
      };
    }
  };
  
  for (const author of myFavouriteAuthors) {
    console.log(author);
  }
  
  console.log(...myFavouriteAuthors)