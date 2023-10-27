import { useState } from "react";
import WorkItem from "./WorkItem";
import WorksListJson from "../json/WorksList.json"
import { getWorksList } from "../api";

export default function WorksList({ worksName }) {
    const [WorksList, setWorksList] = useState(WorksListJson);
    const getWorksListData = async () => {
        const response = await getWorksList();
        setWorksList(response);
    }

    getWorksListData();

    return (
        <div className="worksList">
            {/* <h1>{worksName}</h1> */}
            <div className="container">
                <ul>
                    {/* component 傳入json */}
                    <WorkItem WorksList_semester={WorksList[`${worksName}`]['111-2']}></WorkItem>
                </ul>

            </div>
        </div>

    )
}