import { useState, useEffect } from "react";
import Card from "../components/Card";
import { FaSearch } from "react-icons/fa";
import NoResults from "../pages/NoResults";
import PageError from "../components/PageError";
import LoadingScreen from "../components/LoadingScreen";

const LandingPage = () => {
  const [shows, setShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch("http://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setShows(data.slice(0, 50));
        setIsLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setIsLoading(false);
      });
  }, []);

  const filteredShows = shows.filter((show) =>
    show.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(filteredShows);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (hasError) {
    return <PageError />;
  }

  if (filteredShows.length === 0) {
    return <NoResults />;
  }

  return (
    <div className="container">
      <div className="search-bar">
        <FaSearch />
        <input
          type="text"
          placeholder="Search shows by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className={filteredShows.length === 1 ? "one" : "card-grid"}>
        {filteredShows.map((show) => (
          <Card key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
