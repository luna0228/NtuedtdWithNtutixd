export default function Content({ CourseElements }) {
    return (
        <div className="main-container">
            <div className="container">
                <div className="banner mb-30">
                    <div className="imgBox border-r">
                        <img src={CourseElements[0].banner_img} alt="banner" />
                    </div>

                </div>
                <div className="row">
                    <div className="left mb-30">
                        <div className="head-title border-r ">
                            Vegetables
                        </div>
                        <div className="photo-grid">
                            <ul>
                                {CourseElements[0].course_list.map(course => (
                                    <li key={course.id}>
                                        <div className="imgBox border-r">
                                            <img src={course.course_img} alt={course.course_title} />
                                        </div>
                                    </li>

                                ))}

                                {/* <li>
                                    <div className="imgBox border-r">
                                        <img src="images/vegetable02.jpg" alt="Vegetables" />
                                    </div>
                                </li>
                                <li>
                                    <div className="imgBox border-r">
                                        <img src="images/vegetable03.jpg" alt="Vegetables" />
                                    </div>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="right mb-30">
                        <div className="head-title border-r ">
                            Contact
                        </div>
                        <div className="card">
                            {/* <p>For any questions or suggestions about Vegetables, Vegetables Club or your
                                online order you can contact Vegetables Customer Service by phone, email
                                or post and we’ll be happy to help.</p> */}
                            <p>
                                {CourseElements[0].description}
                            </p>
                            <hr />
                            <p className="lineH-2">E-mail : Vegetables@aaabbccc.com<br />
                                PHONE : +886-123-456-789</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
