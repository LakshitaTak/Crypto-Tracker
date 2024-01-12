import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "../Grid";
import "./style.css";
import List from "../List";

export default function TabsComponent({ coins, searchInput }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
  };

  const isEmpty = coins.length === 0 && searchInput !== "";

  return (
    <div sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <div>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style} />
          </TabList>
        </div>
        <TabPanel value="grid">
          <div className="grid-flex">
            {isEmpty ? (
              <div>No Crypto Currencies Found</div>
            ) : (
              coins.map((coin, i) => (
                <Grid coin={coin} key={coin.id} searchInput={searchInput} />
              ))
            )}
          </div>
        </TabPanel>
        <TabPanel value="list">
          <table className="list-table">
            {isEmpty ? (
              <div>No Crypto Currencies Found</div>
            ) : (
              coins.map((coin, i) => (
                <List coin={coin} key={coin.id} searchInput={searchInput} />
              ))
            )}
          </table>
        </TabPanel>
      </TabContext>
    </div>
  );
}
