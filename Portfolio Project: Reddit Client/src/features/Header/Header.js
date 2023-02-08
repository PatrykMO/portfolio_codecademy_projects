import React, { useState, useEffect } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import './Header.css';
import { FaReddit } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../store/redditSlice';


const Header = () => {
  const [searchTermLoc, setSearchTermLoc] = useState('');
  const searchTerm = useSelector((state) => state.reddit.searchTerm);
  const dispatch = useDispatch();

  const onSearchTermChange = (event) => {
    setSearchTermLoc(event.target.value);
  };

  const onSearchTermSubmit = (event) => {
    event.preventDefault();
    dispatch(setSearchTerm(searchTermLoc));
  };

  useEffect(() => {
      setSearchTermLoc(searchTerm);
    }, [searchTerm]);

  return (
    <header>
      {/* Logo */}
      <div className="logo">
        <FaReddit className="logo-icon" />
        <p>
          Mini Reddit
        </p>
      </div>
      {/* Search Bar */}
      <form className="search-bar" onSubmit={onSearchTermSubmit}>
        <input
          type="text"
          placeholder="What are you looking for, Mate?"
          value={searchTermLoc}
          onChange={onSearchTermChange}
          aria-label="Search posts"
        />
        <button type="submit" onClick={onSearchTermSubmit} aria-label="Search">
          <HiOutlineSearch />
        </button>
      </form>
    </header>
  );
};

export default Header;
