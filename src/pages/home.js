//import { Link } from "react-router-dom";
import DropdownMenu from "../components/DropdownMenu";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";


import ListAltIcon from '@mui/icons-material/ListAlt';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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
            text1: "일괄정보조회입니다.",
            text2: "일괄정보조회",
            text3: "일괄정보조회 내용입니다.",
            button_text: "서비스 안내·신청하기",
            button_link: "bbb1",
        },
        {
            name: "법인부동산등기조회",
            image: "",
            text1: "법인부동산등기조회 입니다.",
            text2: "법인부동산등기조회",
            text3: "법인부동산등기조회 내용입니다.",
            button_text: "서비스 안내·신청하기",
            button_link: "bbb1",
        },
        {
            name: "Newslab",
            image: "",
            text1: "Newslab 입니다.",
            text2: "Newslab",
            text3: "Newslab 내용입니다",
            button_text: "서비스 안내·신청하기",
            button_link: "bbb1",
        },
    ];

    const carouselData = [
        {
            name: "회사명1",
            image: "",
            status: "진행중",
        },
        {
            name: "회사명2",
            image: "",
            status: "종료",
        },
        {
            name: "회사명3",
            image: "",
            status: "예정",
        },
        {
            name: "회사명4",
            image: "",
            status: "예정",
        },
        {
            name: "회사명5",
            image: "",
            status: "예정",
        },
    ];

    const newsData = [
        {
            name: "공지사항 제목이 노출됩니다. 공지사항 제목이 노출됩니다.",
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
                        <div className={`banner-menu-item${currentBanner === i ? "-active" : ""}`} key={i} onClick={() => setCurrentBanner(i)}>
                            {banner.name}
                        </div>
                    ))}
                </div>

                <div className="notice-banner">
                    <div className="width-wrapper">
                        <div className="notice-text">
                            <div className="alert-sub">
                                아직도! 원하는 기업을 찾지 못하셨나요?
                            </div>
                            <div className="alert-title">
                                정보 분석을 통해 맞춤형 기업을 찾아드리겠습니다.
                            </div>
                        </div>
                        <div className="notice-btn width-wrapper-right">
                            <div className="btn-con btn-b">
                                <button className="" onClick={() => {}}>
                                    통합검색 Go
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* date */}
            <div className="data-page">
                <div className="column-width-wrapper">
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
            </div>
            {/* Announce */}
            <div className="announce">
                <div className="column-width-wrapper">
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
            </div>

            {/* 공지사항 */}
            <div className="news">
                <div className="news-carousel-wrapper">
                    <div className="news-carousel">
                        <div className="news-text">
                            <div className="noti-news">공지</div>
                            <div className="news-title">{newsData[currentNews].name}</div>
                        </div>
                        <div className="news-arrows">
                            <div onClick={() => setCurrentNews(currentNews === 0 ? newsData.length - 1 : currentNews - 1)}>
                                <ExpandLessIcon className="up-arrow" />
                            </div>
                            <div onClick={() => setCurrentNews(currentNews === newsData.length - 1 ? 0 : currentNews + 1)}>
                                <ExpandMoreIcon className="down-arrow" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 문의사항 */}
            <div className="question">
                <div className="width-wrapper">
                    <div className="question-l">
                        <div className="q-text1">
                            서비스&사이트 이용문의
                        </div>
                        <div className="q-text2">
                            02-2101-9114
                        </div>
                        <div className="q-text1">
                            월~금 09:00 ~ 18:00
                        </div>
                        <div className="q-text1">
                            주말/공휴일 휴무
                        </div>
                    </div>
                    <div className="question-r width-wrapper-right">
                        <div className="q-btn btn-notice">
                            <a href="javascript:;">
                                <div className="inner-text center">
                                    <CampaignOutlinedIcon className="loud-icon" fontSize="large" />
                                    <div className="q-text">공지사항</div>
                                </div>
                            </a>
                        </div>
                        <div className="q-btn btn-file">
                            <a href="javascript:;">
                                <div className="inner-text center">
                                    <ListAltIcon className="listait-icon" fontSize="large" />
                                    <div className="q-text"><a href="javascript:;">자료실</a></div>
                                </div>
                            </a>
                        </div>
                        <div className="q-btn btn-faq">
                            <a href="javascript:;">
                                <div className="inner-text center">
                                    <QuestionAnswerOutlinedIcon className="faq-icon" fontSize="large" />
                                    <div className="q-text"><a href="javascript:;">FAQ</a></div>
                                </div>
                            </a>
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
            <div className="main-pg width-wrapper">
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
                <div className="main-r width-wrapper-right">
                    <div className="object-cover">
                        <img className="object" src= {banner.image} />
                    </div>
                    <div className="btn-con btn-a">
                        <button className="btn-text" onClick={() => {}}>
                            {banner.button_text}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}