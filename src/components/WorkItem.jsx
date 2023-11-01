import notFoundImg from "../assets/404.png"
import notFoundImgNtut from "../assets/cardimgNtut.png"
import notFoundImgNtue from "../assets/cardimgNtue.png"
import setting from "../assets/Setting.svg"

export default function WorkItem({ WorksList_semester, worksName, worksSemester }) {
    // 圖片Error
    const add404Img = (ev) => {
        console.log(worksName)
        if (worksName == 'ntut') {
            ev.target.src = notFoundImgNtut
        }
        else if (worksName == 'ntue') {
            ev.target.src = notFoundImgNtue
        }
        else {
            ev.target.src = notFoundImg
        }

    }
    // 卡片右下換字 （學期）
    const ChangeWorksSemester = () => {
        if (worksSemester.slice(4, 5) == '2') {
            worksSemester = worksSemester.slice(0, 3) + '期末'
        }
        else if (worksSemester.slice(4, 5) == '1') {
            worksSemester = worksSemester.slice(0, 3) + '期中'
        }
        else {
            worksSemester = worksSemester
        }
        return worksSemester
    }
    // 卡片右下換字 （學校）
    const ChangeworksName = () => {
        let school = ''
        if (worksName == 'ntut') {
            school = '北科'
        }
        else if (worksName == 'ntue') {
            school = '北教'
        }
        else {
            school = worksName
        }
        return school
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
                            <p className="text-gray workAuthors">
                                {workItem.name.map((workAuthor, index) => {
                                    return (
                                        <span key={index}>{workAuthor}</span>
                                    );
                                })}
                            </p>
                        </div>
                        <ul className="skillTags">
                            {workItem.skill.slice(0, 5).map((skillTag, index) => {
                                return (
                                    <li key={index}>
                                        <span className="skillTag">{skillTag}</span>
                                    </li>

                                );
                            })}
                        </ul>
                    </div>
                    <div className="bottomContent">
                        <div className="workLink">
                            <a href={workItem.pptUrl} title="PPT">
                                <img src={setting} alt="PPT"></img>
                            </a>
                            <a href={workItem.githubUrl} title="github">
                                <img src={setting} alt="github"></img>
                            </a>
                        </div>
                        <div className="remark">
                            {ChangeWorksSemester()}・{ChangeworksName()}
                        </div>
                    </div>
                </div>
            </li>
        ))
    )
}