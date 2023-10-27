
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import WorksList from "../../components/WorksList";
// import WorksList_ from "../../json/WorksList.json";

function Works() {
    //  useParam 接router傳入的值（ntut/ntue）
    const { worksName } = useParams();
    return (
        <div className="wrapper page">
            {/* 設定頁面title */}
            <Helmet>
                <title>{worksName} 作品頁</title>
            </Helmet>
            <header>
                <div className="container">
                    <nav className="navbar">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Navbar</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Features</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Pricing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled">Disabled</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

            </header>
            <div className="pageBanner">
                <img src="" alt="" />
            </div>
            <div className="topBar">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Library</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Data</li>
                        </ol>
                    </nav>
                </div>
            </div>
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

