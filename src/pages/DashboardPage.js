import React from "react";
import TabsComponent from "../components/Dashboard/Tabs";
import Header from "../components/Common/Header";

function DashboardPage (){
    return (
        <div>
            <Header />
            <TabsComponent />
        </div>
    )
}

export default DashboardPage