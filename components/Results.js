import Thumbnail from "./Thumbnail";

function Results({ request }) {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3">
      {request.results.map((result, index) => (
        <Thumbnail key={index} result={result} />
      ))}
    </div>
  );
}

export default Results;
