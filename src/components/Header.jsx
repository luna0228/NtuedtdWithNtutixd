import Nav from "./Nav";

export default function Header({ school, semester }) {

    return (
        <header>
            <div className="container">
                <nav className="navbar fixed-top bg-opacity-50">

                    <div className="container-fluid">
                        <a className="navbar-brand " href="#">{school}</a>
                        <Nav school={school} semester={semester} />
                        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> */}

                        {/* <div className="collapse navbar-collapse" id="navbarNav">
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
                        </div> */}
                    </div>
                </nav>
            </div>

        </header>

    )
}