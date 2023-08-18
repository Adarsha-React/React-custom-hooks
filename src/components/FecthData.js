import { useFetch } from "../utils/useFetch";

const FetchData = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const data = useFetch(url);
  console.log(data);
  return (
    <div>
      <h1>Fecth User Data </h1>
    </div>
  );
};
export default FetchData;
