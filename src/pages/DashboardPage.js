import React, { useEffect, useState } from "react";
import TabsComponent from "../components/Dashboard/Tabs";
import Header from "../components/Common/Header";

function DashboardPage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setCoins(data);
      })
      .catch((error) => console.log("error", error));
  });

  return (
    <div>
      <Header />
      <TabsComponent coins={coins}/>
    </div>
  );
}

export default DashboardPage;
