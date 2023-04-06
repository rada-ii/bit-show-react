import { FaSadCry } from "react-icons/fa";

const NoResults = () => {
  return (
    <div className="content">
      <FaSadCry className="svg_icons" />
      <h3 className="sad">
        We couldn't find any people matching your search! Try again?
      </h3>
    </div>
  );
};

export default NoResults;
