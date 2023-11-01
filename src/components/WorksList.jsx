import { useState } from "react";
import WorkItem from "./WorkItem";
import Navigation from "./Navigation";


import WorksListJson from "../json/WorksList.json"
import { getWorksList } from "../api";

export default function WorksList({ school, semester }) {
    //非同步接資料
    const [WorksList, setWorksList] = useState(WorksListJson);
    const getWorksListData = async () => {
        const response = await getWorksList();
        setWorksList(response);
    }

    getWorksListData();
    console.log(school + "," + semester)

    return (
        <div className="worksListBox">
            {/* <h1>{worksName}</h1> */}
            <div className="container">
                <ul className="worksList">
                    {/* component 傳入json 、代入的學期*/}
                    <WorkItem WorksList_semester={WorksList[`${school}`][`${semester}`]} worksName={school} worksSemester={semester}></WorkItem>
                </ul>
                <Navigation></Navigation>

            </div>


        </div>



    )
}