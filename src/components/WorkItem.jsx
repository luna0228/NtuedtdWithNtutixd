import notFoundImg from "../assets/404.png"

export default function WorkItem({ WorksList_semester }) {
    // 圖片404
    const add404Img = (ev) => {
        ev.target.src = notFoundImg
    }

    return (
        WorksList_semester.map(workItem => (
            <li className="workItem" key={workItem.workName}>
                <div className="workItemInner">
                    <a href={workItem.websiteUrl} title="">
                        <div className="imgBox">
                            <img src={workItem.imgUrl} onError={add404Img} alt={workItem.imgUrl} />
                        </div>
                    </a>
                    <div className="textBox">
                        <div className="workTitle">
                            <h4>{workItem.workName}</h4>
                            <p className="text-gray workAuthors"><span></span></p>
                        </div>
                        <div className="skillTags">
                            <span className="skillTag"></span>
                            <span className="skillTag"></span>
                            <span className="skillTag"></span>
                        </div>
                    </div>
                    <div className="bottomContent">
                        <div className="workLink">
                            <a href={workItem.pptUrl} title="">PPT</a>
                            <a href={workItem.githubUrl} title="">github</a>
                        </div>
                        <div className="remark"></div>
                    </div>
                </div>
            </li>
        ))
    )
}