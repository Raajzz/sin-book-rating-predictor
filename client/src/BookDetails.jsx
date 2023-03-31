import React from "react";

const BookDetails = ({ book }) => {
  const { author, publisher, genres } = book;

  return (
    <div
      style={{
        backgroundColor: "#f2f2f2",
        padding: "20px",
        borderRadius: "5px",
        boxShadow: "0px 0px 5px 1px rgba(0,0,0,0.1)",
        marginTop: "20px"
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>Our Prediction</h2>
      <div style={{ marginBottom: "10px" }}>
        <strong>Author:</strong> {author}
      </div>
      <div style={{ marginBottom: "10px" }}>
        <strong>Publisher:</strong> {publisher}
      </div>
      <div style={{ marginBottom: "10px" }}>
        <strong>Genres:</strong> {genres.join(", ")}
      </div>
      <div style={{ marginBottom: "10px",  }}>
        <strong>Predicted Score:</strong>
        <h3 style={{ marginLeft: "40px" }}> 
          Random Score
        </h3>
      </div>
    </div>
  );
};

export default BookDetails;
