import Thumbnail from "./Thumbnail";

function Results({ request }) {
  return (
    <div>
      {request.results.map((result, index) => (
        <Thumbnail key={index} result={result} />
      ))}
    </div>
  );
}

export default Results;
