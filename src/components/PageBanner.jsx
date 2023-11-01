export default function PageBanner() {

    return (


        <div className="pageBanner row justify-content-between">

            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Library</a></li>
                <li className="breadcrumb-item active" ><a href="#">Data</a></li>
            </ol>
            <div className="breadcrumb2">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Library</a></li>
                    <li className="breadcrumb-item active" ><a href="#">Data</a></li>
                </ol>
            </div>
            {/* <img src="" alt="" /> */}

        </div>
    )
}