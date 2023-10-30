
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import WorksList from "../../components/WorksList";
import Header from "../../components/Header";
import pageBanner from "../../components/PageBanner";

function Works() {
    //  useParam 接router傳入的值（ntut/ntue）
    const { worksName } = useParams();
    return (
        <div className="wrapper page">
            {/* 設定頁面title */}
            <Helmet>
                <title>{worksName} 作品頁</title>
            </Helmet>
            <Header></Header>
            <pageBanner></pageBanner>
            <main>
                <WorksList worksName={worksName}></WorksList>
                {/* <WorksList WorksList_={WorksList_[`${worksName}`]}></WorksList> */}
                {/* <div className="worksList">
                    <div className="container">
                        <ul>
                            <WorkItem WorksList={WorksList[`${worksName}`]}></WorkItem>
                        </ul>

                    </div>
                </div> */}

            </main>

        </div>
    );
}

export default Works;

