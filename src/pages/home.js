import { Link } from "react-router-dom";
import DropdownMenu from "../components/DropdownMenu";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

export default function Home() {
    const [currentBanner, setCurrentBanner] = useState(0);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [currentNews, setCurrentNews] = useState(0);

    const banners = [
        {
            name: "기업정보조회",
            image: "./images/main_hands.png",
            text1: "200만 기업의 모든 정보를 분석했습니다.",
            text2: "Information Up! 기업정보조회 ",
            text3: "재무, 입찰, 공시, 채용, 신용변동, 여신, 뉴스 정보 제공!",
            text4: "SRC 신용평가기관 1위 이크레더블 신용평가 보고서 제공!",
            text5: "관심 기업의 거래처 실적정보, 신용등급, 부실정보를 한눈에 확인!",
            text6: "세분화된 부실위험 조기경보 LIVE 등급 서비스 제공!",
            button_text: "서비스 안내·신청하기",
            button_link: "bbb1",
        },
        {
            name: "일괄정보조회",
            image: "",
            text1: "111",
            text2: "222",
            text3: "333",
            button_text: "서비스 안내·신청하기",
            button_link: "bbb1",
        },
        {
            name: "법인부동산등기조회",
            image: "",
            text1: "111",
            text2: "222",
            text3: "333",
            button_text: "서비스 안내·신청하기",
            button_link: "bbb1",
        },
        {
            name: "Newslab",
            image: "",
            text1: "111",
            text2: "222",
            text3: "333",
            button_text: "서비스 안내·신청하기",
            button_link: "bbb1",
        },
    ];

    const carouselData = [
        {
            name: "test1",
            image: "",
            status: 0,
        },
        {
            name: "test2",
            image: "",
            status: 1,
        },
        {
            name: "test3",
            image: "",
            status: 2,
        },
        {
            name: "test3",
            image: "",
            status: 2,
        },
        {
            name: "test3",
            image: "",
            status: 2,
        },
    ];

    const newsData = [
        {
            name: "news 1",
        },
        {
            name: "news 2",
        },
        {
            name: "news 3",
        },
    ];

    
    useEffect(() => {
		const interval = setInterval(() => {
            if (currentBanner >= 3) setCurrentBanner(0);
            else setCurrentBanner(currentBanner + 1);
		}, 5000);

		return () => {
			clearInterval(interval);
		};
	}, [currentBanner]);

    return (
        <div className={""}>
            {/* dropdown menu bar */}
            <DropdownMenu />

            {/* banner */}
            <div className="banner-wrapper">
                <Banner banner={banners[currentBanner]} />
                <div className="menus">
                    {banners.map((banner, i) => (
                        <div className="banner-menu-item" key={i} onClick={() => setCurrentBanner(i)}>
                            {banner.name}
                        </div>
                    ))}
                </div>

                <div className="notice-banner">
                    <div className="notice-text">
                        <div className="alert-sub">
                            아직도! 원하는 기업을 찾지 못하셨나요?
                        </div>
                        <div className="alert-title">
                            정보 분석을 통해 맞춤형 기업을 찾아드리겠습니다.
                        </div>
                    </div>
                    <div className="notice-btn">
                        <div className="btn-con btn-b">
                            <button className="" onClick={() => {}}>
                                통합검색 Go
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* date */}
            <div className="data-page">
                <div className="title-con center">
                    <div className="title-sub">
                        기업의 거래활동에 필요한 모든 정보 실시간 수집
                    </div>
                    <div className="title-main">
                        {currentDate.toLocaleDateString()}까지 수집된 기업정보 현황
                    </div>
                </div>
                <div className="data-memo center">
                    <div className="data-list">
                        <div className="list-title">보유 기업 수</div>
                        <div className="list-nub">123,144,400</div>
                        <div className="common-text">개사</div>
                    </div>
                    <div className="data-list">
                        <div className="list-title">부동산 소유 법인</div>
                        <div className="list-nub">123,144,400</div>
                        <div className="common-text">개사</div>
                    </div>
                    <div className="data-list">
                        <div className="list-title">실적 보유 기업</div>
                        <div className="list-nub">123,144,400</div>
                        <div className="common-text">개사</div>
                    </div>
                </div>
            </div>
            {/* Announce */}
            <div className="announce">
                <div className="title-con center">
                    <div className="title-sub">
                        기업 협력사의 모집공고를 알려드립니다.
                    </div>
                    <div className="title-main">
                        협력사 모집공고
                    </div>
                </div>

                {/* carousel */}
                <Carousel data={carouselData} />

                <div className="btn-con btn-a">
                    <button className="" onClick={() => {}}>
                        협력사 모집공고 더보기
                    </button>
                </div>
            </div>

            {/* 공지사항 */}
            <div className="news">
                <div className="news-carousel-wrapper">
                    <div className="news-carousel">
                        <div>공지</div>
                        <div>{newsData[currentNews].name}</div>
                        <div className="news-arrows">
                            <div onClick={() => setCurrentNews(currentNews === 0 ? newsData.length - 1 : currentNews - 1)}>^</div>
                            <div onClick={() => setCurrentNews(currentNews == newsData.length - 1 ? 0 : currentNews + 1)}>v</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

function Banner({ banner }) {
    return (
        <div className="banner">
            <div className="main-pg">
                <div className="main-l">
                    <div className="sub-title">
                        {banner.text1}
                    </div>
                    <div className="title">
                        {banner.text2}
                    </div>
                    <div className="main-text">
                        {banner.text3}
                    </div>
                    <div className="main-text">
                        {banner.text4}
                    </div>
                    <div className="main-text">
                        {banner.text5}
                    </div>
                    <div className="main-text">
                        {banner.text6}
                    </div>
                </div>
                <div className="main-r">
                    <div className="object-cover">
                        <img className="object" src= {banner.image} />
                    </div>
                    <div className="btn-con btn-a">
                        <button className="" onClick={() => {}}>
                            {banner.button_text}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}