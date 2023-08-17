import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import RatingStars from "../components/RatingStars";

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async (id) => {
      try {
        const res = await axios.get("https://localhost:7210/Movies/" + id);
        setMovie(res.data);
        console.log(res.data);
        setLoading(false);
      } catch (e) {
        setError(e);
      }
    };

    fetchMovie(id);
  }, []);
  return (
    <div className="page-container w-100">
      {loading ? (
        "Loading..."
      ) : error ? (
        "Error!"
      ) : (
        <div className="container p-0">
          <div className="row g-0">
            <div className="col-6">
              <img
                className="img-fluid"
                src="https://gumlet.assettype.com/newslaundry%2F2021-09%2F6c68a48b-f212-4fbf-a0d9-d447dbdd9287%2FDaniel_Craig.jpg?auto=format%2Ccompress&fit=max&format=webp&w=480&dpr=2.6"
              />
            </div>
            <div className="col-6 p-5">
              <h1 className="display-3 w-100 border-bottom py-2 pb-3">
                {movie.name}
              </h1>
              <h3 className="w-100 border-bottom py-2 pb-3">
                {movie.category.caption}
              </h3>
              <h3 className="w-100 border-bottom py-2 pb-3 d-flex gap-3 align-items-center">
                Rating: <RatingStars avgRating={movie.avgRating} />
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
