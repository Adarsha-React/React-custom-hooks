import { useFetch } from "../utils/useFetch";

const FetchData = () => {
  const url = "https://jsonplaceholder.typicode.com/sers";
  const { data, loading, error } = useFetch(url);

  console.log(error);
  if (loading) return <h1>Loading...</h1>;
  console.log(error);
  if (error) return <h1>Something went wrong, please checkt the error</h1>;

  return (
    <div>
      <h1>User Data - Using API Request</h1>
      {data?.map((user) => (
        <h4 key={user.id}>{user.name}</h4>
      ))}
    </div>
  );
};
export default FetchData;
