import bannerNtut from "../assets/PageBannerNtut2.png"
import bannerNtutSm from "../assets/PageBannerNtut2-sm.png"
import bannerNtue from "../assets/PageBannerNtue2.png"
import bannerNtueSm from "../assets/PageBannerNtue2-sm.png"
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
        <div className="pageBanner">
            <div className="container">
                <div className="topBar">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item text-uppercase"><a href="#">{school}</a></li>
                        <li className="breadcrumb-item active" ><a href="#">112期末</a></li>

                    </ol>

                    <div className="dropdown">
                        <a className="btn dropdown-toggle text-wrap" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                            分類
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">112期末</a></li>
                            <li><a className="dropdown-item" href="#">112期中</a></li>
                            <li><a className="dropdown-item" href="#">111期末</a></li>
                            <li><a className="dropdown-item" href="#">111期中</a></li>
                        </ul>
                    </div>
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