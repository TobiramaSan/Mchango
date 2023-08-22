import Balance from "../../components/balance/balance";
import Search from "../../components/search/search";
import SideBar from "../../components/sidebar/sidebar";
import Table from "../../components/table/table";
import Table2 from "../../components/table2/table2";
import "./home.css";
const Home = () => {
  //   const userData = {
  //     balance: "50000",
  //     income: "25000",
  //     expenses: "25000",
  //   };
  return (
    <div className="home">
      <div className="navbar">
        <SideBar />
      </div>
      <div className="home_content">
        <Search />
        <Balance />
        <Table />
        <Table2 />
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
