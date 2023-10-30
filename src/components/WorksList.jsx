import { useState } from "react";
import WorkItem from "./WorkItem";
import Navigation from "./Navigation";


import WorksListJson from "../json/WorksList.json"
import { getWorksList } from "../api";

export default function WorksList({ worksName }) {
    //非同步接資料
    const [WorksList, setWorksList] = useState(WorksListJson);
    const getWorksListData = async () => {
        const response = await getWorksList();
        setWorksList(response);
    }

    getWorksListData();

    return (
        <div className="worksListBox">
            {/* <h1>{worksName}</h1> */}
            <div className="container">
                <ul className="worksList">
                    {/* component 傳入json */}
                    <WorkItem WorksList_semester={WorksList[`${worksName}`]['111-2']}></WorkItem>
                </ul>
                <Navigation></Navigation>

            </div>


        </div>



    )
}