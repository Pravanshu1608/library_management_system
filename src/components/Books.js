import React, { useState, useEffect } from 'react';

import {
  BooksViewList,
  BookCard,
  BookBody,
  BookImage,
  BookName,
  BookDescription,
  Button,
  FilterContainer,
  Input
} from './Styles';

import book1 from "../images/spare.jpg";
import book2 from "../images/the-wager.jpg";
import book3 from "../images/lone-women.jpg";
import book4 from "../images/romantic-comedy.jpg";
import book5 from "../images/the-convenant-of-water.jpg";
import book6 from "../images/happy-place.jpg";
import book7 from "../images/chain-gang.jpg";
import book8 from "../images/all-the-sinners-bleed.jpg";
import book9 from "../images/what-happened-to-ruthy-ramirez.jpg";
import book10 from "../images/this-other-eden.jpg";
import book11 from "../images/the-fraud.jpg";
import book12 from "../images/tom-lake.jpg";
import book13 from "../images/the-half-known-life.jpg";
import book14 from "../images/above-ground.jpg";
import book15 from "../images/really-good-actually.jpg";
import book16 from "../images/the-house-at-the-end-of-the-world.jpg";
import book17 from "../images/griefstrike.jpg";
import book18 from "../images/yellowface-book.jpg";
import book19 from "../images/witch-king.jpg";
import book20 from "../images/the-island.jpg";
import book21 from "../images/pinata.jpg";
import book22 from "../images/abnormal-statistics.jpg";
import book23 from "../images/crook-manifesto-book.png";
import book24 from "../images/everyone-here-is-lying-book.png";
import book25 from "../images/gone-tonight-book.png";

const booksPerPage = 9;

export const bookData = [
  {
    id: 1,
    title: "Spare",
    author: "Prince Harry",
    image: book1,
    subject: "Fiction",
    releasedate: "Jan 10, 2023",
  },
  {
    id: 2,
    title: "The Wager",
    author: "David Grann",
    image: book2,
    subject: "Narrative Non-Fiction",
    releasedate: "April 18, 2023",
  },
  {
    id: 3,
    title: "Lone Women",
    author: "Victor LaValle",
    image: book3,
    subject: "Horror",
    releasedate: "March 28, 2023",
  },
  {
    id: 4,
    title: "Romantic Comedy",
    author: "Curtis Sittenfeld",
    image: book4,
    subject: "Romance",
    releasedate: "April 4, 2023",
  },
  {
    id: 5,
    title: "The Convenant Of Water",
    author: "Abraham Verghese",
    image: book5,
    subject: "Adventure",
    releasedate: "May 2, 2023",
  },
  {
    id: 6,
    title: "Happy Place",
    author: "Emily Henry",
    image: book6,
    subject: "Romance",
    releasedate: "April 25, 2023",
  },
  {
    id: 7,
    title: "Chain-Gang All-Stars",
    author: "Nana Kwame Adjei-Brenyah",
    image: book7,
    subject: "Political Fiction",
    releasedate: "May 2, 2023",
  },
  {
    id: 8,
    title: "All The Sinners Bleed",
    author: "S.A. Cosby",
    image: book8,
    subject: "Thriller",
    releasedate: "June 6, 2023",
  },
  {
    id: 9,
    title: "What Happened to Ruthy Ramirez",
    author: "Claire Jimenez",
    image: book9,
    subject: "Mystery",
    releasedate: "March 7, 2023",
  },
  {
    id: 10,
    title: "This Other Eden",
    author: "Paul Harding",
    image: book10,
    subject: "Historical Fiction",
    releasedate: "January 24, 2023",
  },
  {
    id: 11,
    title: "The Fraud: A Novel",
    author: "Zadie Smith",
    image:book11,
    subject: "Biography",
    releasedate: "September 5, 2023",
  },
  {
    id: 12,
    title: "Tom Lake",
    author: "Ann Patchett",
    image: book12,
    subject: "Romance",
    releasedate: "August 1, 2023",
  },
  {
    id: 13,
    title: "The Half Known Life",
    author: "Pico Iyer",
    image: book13,
    subject: "Adventure",
    releasedate: "January 10, 2023",
  },
  {
    id: 14,
    title: "Above Ground",
    author: "Clint Smith",
    image: book14,
    subject: "Poetry",
    releasedate: "March 28, 2023",
  },
  {
    id: 15,
    title: "Really Good, Actually",
    author: "Monica Heisey",
    image: book15,
    subject: "Humour",
    releasedate: "January 17, 2023",
  },
  {
    id: 16,
    title: "The House at the End of the World",
    author: "Dean Koontz",
    image: book16,
    subject: "Adventure",
    releasedate: "January 24, 2023",
  },
  {
    id: 17,
    title: "Griefstrike!",
    author: "Jason Roeder",
    image: book17,
    subject: "Comedy",
    releasedate: "January 3, 2023",
  },
  {
    id: 18,
    title: "Yellowface",
    author: "R.F. Kuang",
    image: book18,
    subject: "Melodrama",
    releasedate: "May 16, 2023",
  },
  {
    id: 19,
    title: "Witch King",
    author: "Martha Wells",
    image: book19,
    subject: "Adventure",
    releasedate: "May 30, 2023",
  },
  {
    id: 20,
    title: "The Island",
    author: "Natasha Preston",
    image: book20,
    subject: "Adventure",
    releasedate: "January 1, 2023",
  },
  {
    id: 21,
    title: "Piñata: A Novel",
    author: "Leopoldo Gout",
    image: book21,
    subject: "Horror",
    releasedate: "June 6, 2023",
  },
  {
    id: 22,
    title: "Abnormal Statistics",
    author: "Max Booth III",
    image: book22,
    subject: "Horror",
    releasedate: "June 27, 2023",
  },
  {
    id: 23,
    title: "Crook Manifesto",
    author: "Kate Morton",
    image: book23,
    subject: "Melodrama",
    releasedate: "June 1, 2008",
  },
  {
    id: 24,
    title: "Everyone Here Is Lying",
    author: "Dan Jones and Marina Amaral",
    image: book24,
    subject: "Thriller",
    releasedate: "June 3, 2018",
  },
  {
    id: 25,
    title: "Gone Tonight",
    author: "Dan Jones and Marina Amaral",
    image: book25,
    subject: "Comedy",
    releasedate: "June 27, 2008",
  },
];

const Books = () => {   

  const [currentPage, setCurrentPage] = useState(1);
  const [filteredBooks, setFilteredBooks] = useState(bookData);
  const [filterCriteria, setFilterCriteria] = useState({
    title: '',
    author: '',
    subject: '',
    releasedate: '',
  });

  useEffect(() => {
    filterBooks();
  }, [filterCriteria]);

  // Calculate indexes for pagination
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

 // Filter books
 const filterBooks = () => {
  const { title, author, subject, releasedate } = filterCriteria;
  const filtered = bookData.filter((book) => {
    const matchesTitle = book.title.toLowerCase().includes(title.toLowerCase());
    const matchesAuthor = book.author.toLowerCase().includes(author.toLowerCase());
    const matchesSubject = book.subject.toLowerCase().includes(subject.toLowerCase());
    const matchesReleaseDate = book.releasedate.toLowerCase().includes(releasedate.toLowerCase());
    return matchesTitle && matchesAuthor && matchesSubject && matchesReleaseDate;
  });
  setFilteredBooks(filtered);
  setCurrentPage(1);
};

  // Reset filters
  const resetFilters = () => {
    setFilterCriteria({
      title: '',
      author: '',
      subject: '',
      releasedate: '',
    });
    setCurrentPage(1);
  };

  return (
    <div>
      <div style={{ marginLeft: '50px', marginTop: '20px', marginBottom: '10px' }}>
        <BookName>
        Filter by:
        </BookName>
      </div>

      <FilterContainer>
        
        <Input
          type="text"
          placeholder="Title"
          value={filterCriteria.title}
          onChange={(e) =>
            setFilterCriteria((prevState) => ({ ...prevState, title: e.target.value }))
          }
        />
        <Input
          type="text"
          placeholder="Author"
          value={filterCriteria.author}
          onChange={(e) =>
            setFilterCriteria((prevState) => ({ ...prevState, author: e.target.value }))
          }
        />
        <Input
          type="text"
          placeholder="Genre"
          value={filterCriteria.subject}
          onChange={(e) =>
            setFilterCriteria((prevState) => ({ ...prevState, subject: e.target.value }))
          }
        />
        <Input
          type="text"
          placeholder="Release Date"
          value={filterCriteria.releasedate}
          onChange={(e) =>
            setFilterCriteria((prevState) => ({ ...prevState, releasedate: e.target.value }))
          }
        />
        
        <Button style={{ marginBottom: "10px" }} onClick={resetFilters}>Reset Filters</Button>

      </FilterContainer>

      {/* Filter Counts */}
      <div style={{ marginLeft: '50px', marginTop: '20px', marginBottom: '10px' }}>
        <BookName>
        Total Books in Library: {bookData.length} | Total Filtered Books: {filteredBooks.length} 
        </BookName>
      </div>

      <BooksViewList>
        {currentBooks.map((book) => (
          <BookCard key={book.id}>
            <BookImage src={book.image} alt={book.title} />
            <BookBody>
              <BookName>{book.title}</BookName>
              <BookDescription>By {book.author}</BookDescription>
              <BookDescription>Genre: {book.subject}</BookDescription>
              <BookDescription>Release Date: {book.releasedate}</BookDescription>
            </BookBody>
          </BookCard>
        ))}
      </BooksViewList>

      {/* Pagination */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '50px', marginTop: '20px'}}>
        {Array.from({ length: Math.ceil(bookData.length / booksPerPage) }).map((_, index) => (
          <Button style={{ margin: '0 4px', marginBottom: "10px" }} key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Books;
