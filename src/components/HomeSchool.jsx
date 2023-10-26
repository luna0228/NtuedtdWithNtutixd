export default function Content({ homeSchool, id, btnColor }) {
    return (
        <div className="homeSchool" id={id}>
            <div className="homeBox text-center">
                <div className="homeTitle">
                    <h1>{homeSchool}</h1>
                </div>
                <div className="solgan">
                    CLASS<br />
                    OF<br />
                    WEBSITE DESIGN<br />
                    AND DEVELOPMENT<br />
                </div>
                <a href="" className={`btn-basic ${btnColor}`}>VIEW</a>
            </div>
            <div className="homeElf">
                <span className="eye"></span>
                <span className="eye"></span>
            </div>
        </div>
    );
}