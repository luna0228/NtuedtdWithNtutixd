
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import WorksList from "../../components/WorksList";
import Header from "../../components/Header";
import PageBanner from "../../components/PageBanner";

function Works() {
    //  useParam 接router傳入的值（ntut/ntue）
    const { worksName } = useParams();
    const worksSemester = '111-2';

    return (
        <div className={`wrapper page page-${worksName}`}>
            {/* 帶入worksName 設定個別className css樣式調整可用此className調整 */}
            {/* 設定頁面title */}
            <Helmet>
                <title>{worksName} 作品頁</title>
            </Helmet>
            <Header></Header>
            <PageBanner></PageBanner>
            <main>
                {/* 傳入worksName：ntut/ntue ; worksSemester：學期=>目前用’111-2‘需要調整成動態 */}
                <WorksList worksName={worksName} worksSemester={worksSemester}></WorksList>
            </main>

        </div>
    );
}

export default Works;

