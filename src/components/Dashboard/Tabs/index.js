import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function TabsComponent({ coins }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
  };

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
          <div>
            {coins.map((item, i) => (
              <div>
                <img src={item.image} alt="img"/>
                <p>
                {i + 1}.{item.name}
              </p>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel value="list">
          <div></div>
        </TabPanel>
      </TabContext>
    </div>
  );
}
