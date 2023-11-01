import { useState } from "react";
import WorkItem from "./WorkItem";
import Navigation from "./Navigation";


import WorksListJson from "../json/WorksList.json"
import { getWorksList } from "../api";

export default function WorksList({ worksName, worksSemester }) {
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
                    {/* component 傳入json 、代入的學期*/}
                    <WorkItem WorksList_semester={WorksList[`${worksName}`][`${worksSemester}`]} worksName={worksName} worksSemester={worksSemester}></WorkItem>
                </ul>
                <Navigation></Navigation>

            </div>


        </div>



    )
}