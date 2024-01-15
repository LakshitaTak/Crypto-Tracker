import React, { useEffect, useState } from "react";
import TabsComponent from "../components/Dashboard/Tabs";
import Header from "../components/Common/Header";
import Search from "../components/Dashboard/Search";
import PaginationComp from "../components/Dashboard/Pagination";

function DashboardPage() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const noOfItemsPerPage = 8;

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((a) => {
    if (
      a.name.toLowerCase().includes(search) ||
      a.symbol.toLowerCase().includes(search)
    ) {
      return true;
    }
    return false;
  });

  const noOfPages = Math.ceil(filteredCoins.length / noOfItemsPerPage);

  const paginatedCoins = filteredCoins.slice(
    noOfItemsPerPage * (page - 1),
    noOfItemsPerPage * page
  );

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    )
      .then(async (response) => {
        const data = await response.json();
        console.log("data", data);
        setCoins(data);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      <Header />
      <Search searchInput={search} handleInput={handleInput} />
      <TabsComponent coins={paginatedCoins} searchInput={search} />
      <PaginationComp page={page} setPage={setPage} noOfPages={noOfPages} />
    </div>
  );
}

export default DashboardPage;
