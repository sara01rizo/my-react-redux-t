import { useSelector } from "react-redux";
import "./App.css";

export default function App() {
  const account = useSelector((state) => state.account);
  console.log(account);

  return <div className="App"></div>;
}
