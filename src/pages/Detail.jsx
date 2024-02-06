import { useSelector } from "react-redux";

const Detail = () => {
  const list = useSelector((state) => state.todos);
  console.log(list);
  return (
    <div>
      {list.map((item) => (
        <ul key={item.id}>
          <li>{item.title}</li>
          <li>{item.body}</li>
        </ul>
      ))}
    </div>
  );
};

export default Detail;
