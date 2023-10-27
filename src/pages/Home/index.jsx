import { Helmet } from "react-helmet-async";
import HomeSchool from "../../components/HomeSchool";

function Home() {
    return (
        <div className="wrapper home">
            {/* 設定頁面title */}
            <Helmet>
                <title>首頁</title>
            </Helmet>
            {/* component */}
            <HomeSchool homeSchool="IXD" homeSchool_className="homeNtut" btnColor="btn-orange" link="ntut" />
            <HomeSchool homeSchool="DTD" homeSchool_className="homeNtue" btnColor="btn-green" link="ntue" />

        </div>
    );
}

export default Home;