import Search from "../../components/search/search";
import SideBar from "../../components/sidebar/sidebar";
import "./home.css";
const Home = () => {
  //   const userData = {
  //     balance: "50000",
  //     income: "25000",
  //     expenses: "25000",
  //   };
  return (
    <div className="home">
      <div className="home_cont">
        <SideBar />
        <Search />
        {/* <div>
          <p>Balance:{userData.balance}</p>
          <p>Income:{userData.income}</p>
          <p>Expenses:{userData.expenses}</p>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
