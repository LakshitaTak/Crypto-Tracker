import React, { useEffect, useState } from "react";
import TabsComponent from "../components/Dashboard/Tabs";
import Header from "../components/Common/Header";
import Search from "../components/Dashboard/Search";

function DashboardPage() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

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
      return false
  });

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
      <TabsComponent coins={filteredCoins} searchInput={search} />
    </div>
  );
}

export default DashboardPage;
