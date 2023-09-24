import React, { useRef, useEffect, useState } from 'react';
import {bookData} from './Books';

import {
    PreviousButton,
    NextButton,
    BorrowListButton,
    BooksList,
    Card,
    CardBody,
    CardContainer,
    CardImage,
    CardName,
    CardDescription,
    Title,
  } from './Styles';

  import leftArrowImage from "../images/left-arrow.png";
  import rightArrowImage from "../images/right-arrow.png";
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

const BookCards = () => {
  
const [borrowedBooks, setBorrowedBooks] = useState([]);

const handleBorrowClick = (book) => {
  const selectedBook = bookData.find((item) => item.image === book);
  if (selectedBook) {
    setBorrowedBooks((prevBorrowedBooks) => [...prevBorrowedBooks, selectedBook]);
    console.log(borrowedBooks);
    alert(`Borrowed Book Details:\nTitle: ${selectedBook.title}\nAuthor: ${selectedBook.author}\nSubject: ${selectedBook.subject}\nRelease Date: ${selectedBook.releasedate}`);
  }
};

useEffect(() => {
  // Retrieve borrowed books from local storage
  const storedBorrowedBooks = localStorage.getItem('borrowedBooks');
  if (storedBorrowedBooks) {
    const parsedBorrowedBooks = JSON.parse(storedBorrowedBooks);
    setBorrowedBooks((prevBorrowedBooks) => [...prevBorrowedBooks, ...parsedBorrowedBooks]);
  }
}, []);

useEffect(() => {
  // Save borrowed books to local storage whenever the list changes
  localStorage.setItem('borrowedBooks', JSON.stringify(borrowedBooks));
}, [borrowedBooks]);

    useEffect(() => {
        const handleResize = () => {
          cardContainerRef1.scrollLeft = 0; // Reset scroll position on resize
          cardContainerRef2.scrollLeft = 0; // Reset scroll position on resize
          cardContainerRef3.scrollLeft = 0; // Reset scroll position on resize
        };
      
        window.addEventListener('resize', handleResize);
      
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      const cardContainerRef1 = useRef(null);
      const cardContainerRef2 = useRef(null);
      const cardContainerRef3 = useRef(null);
      
    const handleNextClick = (ref) => {
      const containerWidth = ref.current.offsetWidth;
      ref.current.scrollLeft += containerWidth + 20;
    };
  
    const handlePreviousClick = (ref) => {
      const containerWidth = ref.current.offsetWidth;
      ref.current.scrollLeft -= containerWidth + 20;
    };
      
    return (
      <div>
        <Title style={{ marginLeft: '80px', marginTop: '40px'}}>Top Trending Books of 2023</Title>
        <BooksList>
          <PreviousButton onClick={() => handlePreviousClick(cardContainerRef1)}>
            <img src={leftArrowImage} alt="Left arrow" />
          </PreviousButton>
          <NextButton onClick={() => handleNextClick(cardContainerRef1)}>
            <img src={rightArrowImage} alt="Right arrow" />
          </NextButton>

          <CardContainer ref={cardContainerRef1}>

            <Card>
              <CardImage src={book1} alt="Spare by Prince Harry" />
              <CardBody>
                <CardName>Spare</CardName>
                <CardDescription>
                    Spare by Prince Harry.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book1)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book2} alt="The Wager by David Grann" />
              <CardBody>
                <CardName>The Wager</CardName>
                <CardDescription>
                    The Wager by David Grann.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book2)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book3} alt="Lone Women by Victor LaValle" />
              <CardBody>
                <CardName>Lone Women</CardName>
                <CardDescription>
                Lone Women by Victor LaValle.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book3)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book4} alt="Romantic Comedy by Curtis Sittenfeld" />
              <CardBody>
                <CardName>Romantic Comedy</CardName>
                <CardDescription>
                Romantic Comedy by Curtis Sittenfeld.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book4)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book5} alt="The Convenant Of Water by Abraham Verghese" />
              <CardBody>
                <CardName>The Convenant of Water</CardName>
                <CardDescription>
                The Convenant Of Water by Abraham Verghese.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book5)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book6} alt="Happy Place by Emily Henry" />
              <CardBody>
                <CardName>Happy Place</CardName>
                <CardDescription>
                Happy Place by Emily Henry.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book6)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book7} alt="Chain-Gang All-Stars by Nana Kwame" />
              <CardBody>
                <CardName>Chain-Gang All-Stars</CardName>
                <CardDescription>
                Chain-Gang All-Stars by Nana Kwame.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book7)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book8} alt="All The Sinners Bleed by S.A. Cosby" />
              <CardBody>
                <CardName>All The Sinners Bleed</CardName>
                <CardDescription>
                All The Sinners Bleed by S.A. Cosby.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book8)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book9} alt="What Happened to Ruthy Ramirez by Claire Jimenez" />
              <CardBody>
                <CardName>What Happened to Ruthy Ramirez</CardName>
                <CardDescription>
                What Happened to Ruthy Ramirez by Claire Jimenez.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book9)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book10} alt="This Other Eden by Paul Harding" />
              <CardBody>
                <CardName>This Other Eden</CardName>
                <CardDescription>
                This Other Eden by Paul Harding.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book10)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book11} alt="The Fraud by Zadie Smith" />
              <CardBody>
                <CardName>The Fraud: A Novel</CardName>
                <CardDescription>
                The Fraud by Zadie Smith.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book11)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book12} alt="Tom Lake by Ann Patchett" />
              <CardBody>
                <CardName>Tom Lake</CardName>
                <CardDescription>
                Tom Lake by Ann Patchett.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book12)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book13} alt="The Half Known Life by Pico Iyer" />
              <CardBody>
                <CardName>The Half Known Life</CardName>
                <CardDescription>
                The Half Known Life by Pico Iyer.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book13)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book14} alt="Above Ground by Clint Smith" />
              <CardBody>
                <CardName>Above Ground</CardName>
                <CardDescription>
                Above Ground by Clint Smith.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book14)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book15} alt="Really Good Actually by Monica Heisey" />
              <CardBody>
                <CardName>Really Good, Actually</CardName>
                <CardDescription>
                Really Good Actually by Monica Heisey.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book15)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book16} alt="The House at the End of the World by Dean Koontz" />
              <CardBody>
                <CardName>The House at the End of the World</CardName>
                <CardDescription>
                The House at the End of the World by Dean Koontz.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book16)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book17} alt="Griefstrike! by Jason Roeder" />
              <CardBody>
                <CardName>Griefstrike!</CardName>
                <CardDescription>
                Griefstrike! by Jason Roeder.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book17)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book18} alt="Yellowface by R.F. Kuang" />
              <CardBody>
                <CardName>Yellowface</CardName>
                <CardDescription>
                Yellowface by R.F. Kuang.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book18)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book19} alt="Witch King by Martha Wells" />
              <CardBody>
                <CardName>Witch King</CardName>
                <CardDescription>
                Witch King by Martha Wells.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book19)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book20} alt="The Island by Natasha Preston" />
              <CardBody>
                <CardName>The Island</CardName>
                <CardDescription>
                The Island by Natasha Preston.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book20)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book21} alt="Piñata: A Novel by Leopoldo Gout" />
              <CardBody>
                <CardName>Piñata: A Novelr</CardName>
                <CardDescription>
                Piñata: A Novel by Leopoldo Gout.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book21)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book22} alt="Abnormal Statistics by Max Booth III" />
              <CardBody>
                <CardName>Abnormal Statistics</CardName>
                <CardDescription>
                Abnormal Statistics by Max Booth III.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book22)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            
          </CardContainer>
        </BooksList>

        <Title style={{ marginLeft: '80px', marginTop: '40px'}}>Best Selling Books of 2023</Title>
        
        <BooksList>
        <PreviousButton onClick={() => handlePreviousClick(cardContainerRef2)}>
            <img src={leftArrowImage} alt="Left arrow" />
          </PreviousButton>
          <NextButton onClick={() => handleNextClick(cardContainerRef2)}>
            <img src={rightArrowImage} alt="Right arrow" />
          </NextButton>

          <CardContainer ref={cardContainerRef2}>
            <Card>
              <CardImage src={book16} alt="The House at the End of the World by Dean Koontz" />
              <CardBody>
                <CardName>The House at the End of the World</CardName>
                <CardDescription>
                The House at the End of the World by Dean Koontz.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book16)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book17} alt="Griefstrike! by Jason Roeder" />
              <CardBody>
                <CardName>Griefstrike!</CardName>
                <CardDescription>
                Griefstrike! by Jason Roeder.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book17)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book18} alt="Yellowface by R.F. Kuang" />
              <CardBody>
                <CardName>Yellowface</CardName>
                <CardDescription>
                Yellowface by R.F. Kuang.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book18)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            
            <Card>
              <CardImage src={book19} alt="Witch King by Martha Wells" />
              <CardBody>
                <CardName>Witch King</CardName>
                <CardDescription>
                Witch King by Martha Wells.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book19)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book20} alt="The Island by Natasha Preston" />
              <CardBody>
                <CardName>The Island</CardName>
                <CardDescription>
                The Island by Natasha Preston.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book20)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book21} alt="Piñata: A Novel by Leopoldo Gout" />
              <CardBody>
                <CardName>Piñata: A Novelr</CardName>
                <CardDescription>
                Piñata: A Novel by Leopoldo Gout.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book21)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book22} alt="Abnormal Statistics by Max Booth III" />
              <CardBody>
                <CardName>Abnormal Statistics</CardName>
                <CardDescription>
                Abnormal Statistics by Max Booth III.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book22)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>            <Card>
              <CardImage src={book2} alt="The Wager by David Grann" />
              <CardBody>
                <CardName>City Under One Roof</CardName>
                <CardDescription>
                    The Wager by David Grann.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book2)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book3} alt="Lone Women by Victor LaValle" />
              <CardBody>
                <CardName>Lone Women</CardName>
                <CardDescription>
                Lone Women by Victor LaValle.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book3)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book4} alt="Romantic Comedy by Curtis Sittenfeld" />
              <CardBody>
                <CardName>Romantic Comedy</CardName>
                <CardDescription>
                Romantic Comedy by Curtis Sittenfeld.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book4)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book5} alt="The Convenant Of Water by Abraham Verghese" />
              <CardBody>
                <CardName>The Convenant of Water</CardName>
                <CardDescription>
                The Convenant Of Water by Abraham Verghese.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book5)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book6} alt="Happy Place by Emily Henry" />
              <CardBody>
                <CardName>What Happened to Ruthy Ramirez</CardName>
                <CardDescription>
                Happy Place by Emily Henry.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book6)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book7} alt="Chain-Gang All-Stars by Nana Kwame" />
              <CardBody>
                <CardName>A Death at the Party</CardName>
                <CardDescription>
                Chain-Gang All-Stars by Nana Kwame.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book7)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book8} alt="All The Sinners Bleed by S.A. Cosby" />
              <CardBody>
                <CardName>All The Sinners Bleed</CardName>
                <CardDescription>
                All The Sinners Bleed by S.A. Cosby.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book8)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book1} alt="Spare by Prince Harry" />
              <CardBody>
                <CardName>Spare</CardName>
                <CardDescription>
                    Spare by Prince Harry.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book1)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book9} alt="What Happened to Ruthy Ramirez by Claire Jimenez" />
              <CardBody>
                <CardName>What Happened to Ruthy Ramirez</CardName>
                <CardDescription>
                What Happened to Ruthy Ramirez by Claire Jimenez.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book9)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book10} alt="This Other Eden by Paul Harding" />
              <CardBody>
                <CardName>This Other Eden</CardName>
                <CardDescription>
                This Other Eden by Paul Harding.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book10)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book11} alt="The Fraud by Zadie Smith" />
              <CardBody>
                <CardName>The Fraud: A Novel</CardName>
                <CardDescription>
                The Fraud by Zadie Smith.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book11)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book12} alt="Tom Lake by Ann Patchett" />
              <CardBody>
                <CardName>Tom Lake</CardName>
                <CardDescription>
                Tom Lake by Ann Patchett.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book12)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book13} alt="The Half Known Life by Pico Iyer" />
              <CardBody>
                <CardName>The Half Known Life</CardName>
                <CardDescription>
                The Half Known Life by Pico Iyer.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book13)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book14} alt="Above Ground by Clint Smith" />
              <CardBody>
                <CardName>Above Ground</CardName>
                <CardDescription>
                Above Ground by Clint Smith.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book14)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book15} alt="Really Good Actually by Monica Heisey" />
              <CardBody>
                <CardName>Really Good, Actually</CardName>
                <CardDescription>
                Really Good Actually by Monica Heisey.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book15)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            
          </CardContainer>
        </BooksList>

        <Title style={{ marginLeft: '80px', marginTop: '40px'}}>All Time Favourites</Title>
        <BooksList>
        <PreviousButton onClick={() => handlePreviousClick(cardContainerRef3)}>
            <img src={leftArrowImage} alt="Left arrow" />
          </PreviousButton>
          <NextButton onClick={() => handleNextClick(cardContainerRef3)}>
            <img src={rightArrowImage} alt="Right arrow" />
          </NextButton>

          <CardContainer ref={cardContainerRef3}>
          <Card>
              <CardImage src={book12} alt="Tom Lake by Ann Patchett" />
              <CardBody>
                <CardName>Tom Lake</CardName>
                <CardDescription>
                Tom Lake by Ann Patchett.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book12)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book13} alt="The Half Known Life by Pico Iyer" />
              <CardBody>
                <CardName>The Half Known Life</CardName>
                <CardDescription>
                The Half Known Life by Pico Iyer.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book13)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book14} alt="Above Ground by Clint Smith" />
              <CardBody>
                <CardName>Above Ground</CardName>
                <CardDescription>
                Above Ground by Clint Smith.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book14)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book15} alt="Really Good Actually by Monica Heisey" />
              <CardBody>
                <CardName>Really Good, Actually</CardName>
                <CardDescription>
                Really Good Actually by Monica Heisey.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book15)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book1} alt="Spare by Prince Harry" />
              <CardBody>
                <CardName>Spare</CardName>
                <CardDescription>
                    Spare by Prince Harry.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book1)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book2} alt="The Wager by David Grann" />
              <CardBody>
                <CardName>City Under One Roof</CardName>
                <CardDescription>
                    The Wager by David Grann.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book2)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book3} alt="Lone Women by Victor LaValle" />
              <CardBody>
                <CardName>Lone Women</CardName>
                <CardDescription>
                Lone Women by Victor LaValle.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book3)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book4} alt="Romantic Comedy by Curtis Sittenfeld" />
              <CardBody>
                <CardName>Romantic Comedy</CardName>
                <CardDescription>
                Romantic Comedy by Curtis Sittenfeld.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book4)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book5} alt="The Convenant Of Water by Abraham Verghese" />
              <CardBody>
                <CardName>The Convenant of Water</CardName>
                <CardDescription>
                The Convenant Of Water by Abraham Verghese.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book5)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book6} alt="Happy Place by Emily Henry" />
              <CardBody>
                <CardName>What Happened to Ruthy Ramirez</CardName>
                <CardDescription>
                Happy Place by Emily Henry.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book6)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book7} alt="Chain-Gang All-Stars by Nana Kwame" />
              <CardBody>
                <CardName>A Death at the Party</CardName>
                <CardDescription>
                Chain-Gang All-Stars by Nana Kwame.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book7)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book8} alt="All The Sinners Bleed by S.A. Cosby" />
              <CardBody>
                <CardName>All The Sinners Bleed</CardName>
                <CardDescription>
                All The Sinners Bleed by S.A. Cosby.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book8)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book9} alt="What Happened to Ruthy Ramirez by Claire Jimenez" />
              <CardBody>
                <CardName>What Happened to Ruthy Ramirez</CardName>
                <CardDescription>
                What Happened to Ruthy Ramirez by Claire Jimenez.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book9)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book10} alt="This Other Eden by Paul Harding" />
              <CardBody>
                <CardName>This Other Eden</CardName>
                <CardDescription>
                This Other Eden by Paul Harding.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book10)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book11} alt="The Fraud by Zadie Smith" />
              <CardBody>
                <CardName>The Fraud: A Novel</CardName>
                <CardDescription>
                The Fraud by Zadie Smith.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book11)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book16} alt="The House at the End of the World by Dean Koontz" />
              <CardBody>
                <CardName>The House at the End of the World</CardName>
                <CardDescription>
                The House at the End of the World by Dean Koontz.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book16)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book17} alt="Griefstrike! by Jason Roeder" />
              <CardBody>
                <CardName>Griefstrike!</CardName>
                <CardDescription>
                Griefstrike! by Jason Roeder.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book17)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book18} alt="Yellowface by R.F. Kuang" />
              <CardBody>
                <CardName>Yellowface</CardName>
                <CardDescription>
                Yellowface by R.F. Kuang.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book18)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book19} alt="Witch King by Martha Wells" />
              <CardBody>
                <CardName>Witch King</CardName>
                <CardDescription>
                Witch King by Martha Wells.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book19)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book20} alt="The Island by Natasha Preston" />
              <CardBody>
                <CardName>The Island</CardName>
                <CardDescription>
                The Island by Natasha Preston.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book20)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book21} alt="Piñata: A Novel by Leopoldo Gout" />
              <CardBody>
                <CardName>Piñata: A Novelr</CardName>
                <CardDescription>
                Piñata: A Novel by Leopoldo Gout.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book21)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            <Card>
              <CardImage src={book22} alt="Abnormal Statistics by Max Booth III" />
              <CardBody>
                <CardName>Abnormal Statistics</CardName>
                <CardDescription>
                Abnormal Statistics by Max Booth III.
                </CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book22)}>
                    Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
            
          </CardContainer>
        </BooksList>

      </div>
    );
  };
  
  export default BookCards;