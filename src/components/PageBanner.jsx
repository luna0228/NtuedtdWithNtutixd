import bannerNtut from "../assets/PageBannerNtut.png"
import bannerNtutSm from "../assets/PageBannerNtut-sm.png"
import bannerNtue from "../assets/PageBannerNtue.png"
import bannerNtueSm from "../assets/PageBannerNtue-sm.png"

export default function PageBanner({ school }) {
    // 圖片banner

    const pageBannerPC = (ev) => {
        let BannerPC
        if (school == 'ntut') {
            BannerPC = bannerNtut
        }
        else if (school == 'ntue') {
            BannerPC = bannerNtue
        }
        else {
            BannerPC = ''
        }
        return BannerPC
    }
    // 圖片banner
    const pageBannerMB = (ev) => {
        let BannerMB
        if (school == 'ntut') {
            BannerMB = bannerNtutSm
        }
        else if (school == 'ntue') {
            BannerMB = bannerNtueSm
        }
        else {
            BannerMB = ''
        }
        return BannerMB
    }

    return (


        <div className="pageBanner ">
            <div className="row justify-content-between">
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
            </div>
            <div className="container page-container">
                <div className="bannerImg">
                    <img src={pageBannerMB()} alt={`banner-${school}`} className="hide-md" />
                    <img src={pageBannerPC()} alt={`banner-${school}`} className="show-md" />
                </div>
            </div>

        </div>
    )
}