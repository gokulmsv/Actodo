import Header from "../components/Header";
import Card from "../components/Card";
import Todo from "../components/TodoContainer";
import { useLocation } from "react-router-dom";
function App() {

    let data = useLocation()
  return (
    <div className="bg-[#18244A] p-16">
      <div className="bg-[#8188B4] p-10 border rounded-md border-none">
        <Header username={data.state.user}/>
        <Card/>
        <Todo/>
      </div>
    </div>
  );
}

export default App;
