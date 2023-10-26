export default function Header() {

    return (
        <header>
            <div className="container">
                <div className="top">
                    <h1 className="logo">Vegetables</h1>
                    <div className="top-bar">
                        <ul className="social-list">
                            <li><a href="#" title="fb">
                                <img src="images/icon_fb.png" alt="fb" />
                            </a></li>
                            <li><a href="#" title="ig">
                                <img src="images/icon_ig.png" alt="ig" />
                            </a></li>
                        </ul>
                        <ul className="action-list">
                            <li><a href="#" title="LOGIN">
                                LOGIN
                            </a></li>
                            <li><a href="#" title="JOIN">
                                JOIN
                            </a></li>
                        </ul>
                    </div>
                </div>
                <div className="bottom nav-menu border-r ">
                    <ul className="menu-list">
                        <li>
                            <a href="#" title="">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" title="">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" title="">
                                Vegetables
                            </a>
                        </li>
                        <li>
                            <a href="#" title="">
                                Online
                            </a>
                        </li>
                        <li>
                            <a href="#" title="">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
