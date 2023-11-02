import { useState,useEffect } from "react";
import WorkItem from "./WorkItem";
import Pagination from "./Pagination";
import WorksListJson from "../json/WorksList.json"
import { getWorksList } from "../api";

export default function WorksList({ school, semester }) {
    //非同步接資料
    const [WorksList, setWorksList] = useState(WorksListJson);
    // const getWorksListData = async () => {
    //     const response = await getWorksList();
    //     setWorksList(response);
    // }
    //耕締以下新增
    const [currentPage, setCurrentPage]=useState(1); //新增當前頁碼
    const itemsPerPage = 12; //每頁顯示的 WorkItem數量為12
    // const schoolData = WorksList[school];
    // const semesterData = schoolData ? schoolData[semester] : [];
    const semesterData = WorksList[school]?.[semester] ?? [];
    const totalWorks = semesterData.length;
    const totalPages = Math.ceil(totalWorks / itemsPerPage);

    // 使用 useEffect 来调用 getWorksListData
    useEffect(() => {  
        const getWorksListData = async () => {
            const response = await getWorksList();
            setWorksList(response);
            console.log("Updated WorksList:", response);
        }
        getWorksListData();
    }, []);  // 空数组表示只在组件挂载时调用，添加 currentPage 作为依赖项


    // const currentWorks = WorksList[school][semester].slice(
    const currentWorks = semesterData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // console.log("Current WorksList:", WorksList);
    // console.log(school + "," + semester);
    // console.log("Current Works:", currentWorks);
    // console.log("Total Works:", totalWorks);
    // console.log("Total Pages:", totalPages);

    return (
        <div className="worksListBox">
            {/* <h1>{worksName}</h1> */}
            <div className="container">
                <ul className="worksList">
                    {/* component 傳入json 、代入的學期*/}
                    {/*雨婷原先 <WorkItem WorksList_semester={WorksList[`${school}`][`${semester}`]} worksName={school} worksSemester={semester}></WorkItem> */}
                    
                    {/* 使用 map 函数来渲染 currentWorks 中的每个作品 */}
                    {currentWorks.map((work, index) => (
                        <WorkItem 
                            key={index}
                            WorksListSemester={work} 
                            worksName={school} 
                            worksSemester={semester} />
                    ))}

                </ul>
                {/* 使用 Pagination 组件来渲染页码。同時確保給予正確的屬性。並且處裡只有數據情況下顯示分頁組件 */}
                {totalPages > 1 && (
                    <Pagination 
                        current={currentPage} 
                        onChange={(page) => setCurrentPage(page)} 
                        total={totalWorks} 
                        pageSize={itemsPerPage}
                    />
                )}
            </div>
        </div>
        
    )
}