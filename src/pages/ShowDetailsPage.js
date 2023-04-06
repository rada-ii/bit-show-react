import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingScreen from "../components/LoadingScreen";
import { FaList, FaTh } from "react-icons/fa";
import PageError from "../components/PageError";

const ShowDetailsPage = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [cast, setCast] = useState([]);
  const [viewType, setViewType] = useState("grid");
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await fetch(
          `https://api.tvmaze.com/shows/${id}?embed=cast`
        );
        const data = await response.json();
        setShow(data);
        setCast(data._embedded.cast);
      } catch (error) {
        setError(true);
      }
    };
    fetchShow();
  }, [id]);

  const toggleViewType = () => {
    setViewType((prevViewType) => (prevViewType === "grid" ? "list" : "grid"));
  };

  if (error) {
    return <PageError />;
  }

  if (!show) {
    return <LoadingScreen />;
  }

  return (
    <div className="container">
      <div className="show-details">
        <div className="summ">
          <img className="imgs" src={show.image?.original} alt={show.name} />
          <div className="text">
            <h1>{show.name}</h1>
            {/* <div className="genres">{show.genres.join(", ")}</div> */}
            <div className="genres">
              {show.genres.map((genre, index) => (
                <div className="genre" key={index}>
                  {genre}
                </div>
              ))}
            </div>
            <div
              className="summary"
              dangerouslySetInnerHTML={{ __html: show.summary }}
            />
          </div>
        </div>
        <div className="cast">
          <div className="cast-header">
            <h1>Actors</h1>
            <button onClick={toggleViewType}>
              {viewType === "grid" ? <FaList /> : <FaTh />}
            </button>
          </div>
          {viewType === "grid" ? (
            <ul className="cast-grid">
              {cast.slice(0, 7).map((person) => (
                <li key={person.person.id}>
                  <img
                    src={person.person.image?.medium}
                    alt={person.person.name}
                  />
                  <span>{person.person.name}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="list">
              <ul className="cast-list">
                {cast.slice(0, 7).map((person) => (
                  <div className="line">
                    <li className="item" key={person.person.id}>
                      <div className="cast-list-item">
                        <img
                          src={person.person.image?.medium}
                          alt={person.person.name}
                        />
                        <div>
                          <div className="cast-list-name">
                            {person.person.name}
                          </div>
                        </div>
                      </div>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowDetailsPage;
