import React, { useState } from "react";
import axios from "axios";
import BookDetails from "./BookDetails";

const genresList = [
  "Art",
  "Biography",
  "Business",
  "Chick-lit",
  "Children’s",
  "Christian",
  "Classics",
  "Comics",
  "Contemporary",
  "Cookbooks",
  "Crime",
  "Ebooks",
  "Fantasy",
  "Fiction",
  "Gay and Lesbian",
  "Graphic Novels",
  "Historical Fiction",
  "History",
  "Horror",
  "Humor and Comedy",
  "Manga",
  "Memoir and Autobiography",
  "Music",
  "Mystery",
  "Nonfiction",
  "Paranormal",
  "Philosophy",
  "Poetry",
  "Psychology",
  "Religion and Spirituality",
  "Romance",
  "Science Fiction",
  "Science and Self Help",
  "Suspense and Thriller",
];

const App = () => {
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [genres, setGenres] = useState([]);
  const [result, setResult] = useState();

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handlePublisherChange = (event) => {
    setPublisher(event.target.value);
  };

  const handleGenreChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setGenres([...genres, value]);
    } else {
      setGenres(genres.filter((genre) => genre !== value));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/", {
        author,
        publisher,
        genres,
      });
      setResult(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems:"center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginBottom: "10px",
          }}
        >
          <label htmlFor="author" style={{ marginBottom: "5px" }}>
            Enter Author Name:
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={handleAuthorChange}
            style={{
              padding: "5px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginBottom: "5px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginBottom: "10px",
          }}
        >
          <label htmlFor="publisher" style={{ marginBottom: "5px" }}>
            Enter Publisher Name:
          </label>
          <input
            type="text"
            id="publisher"
            name="publisher"
            value={publisher}
            onChange={handlePublisherChange}
            style={{
              padding: "5px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginBottom: "5px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginBottom: "10px",
          }}
        >
          <label style={{ marginBottom: "5px" }}>Select Genre:</label>
          {genresList.map((genre) => (
            <div key={genre} style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                id={genre}
                name={genre}
                value={genre}
                onChange={handleGenreChange}
                style={{ marginRight: "5px" }}
              />
              <label htmlFor={genre} style={{ marginRight: "10px" }}>
                {genre}
              </label>
            </div>
          ))}
        </div>
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
      {result && <BookDetails book={result}/>}
    </>
  );
};

export default App;
