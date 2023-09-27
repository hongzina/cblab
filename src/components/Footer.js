import { useState } from "react";


import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Footer() {

    const dropdownMenus = [
        {
            name: "이크레더블",
            link: "https://www.srms.co.kr/svc/ssr/mn/SSR01010100.do",
        },
        {
            name: "뉴스랩",
            link: "https://newslab.widuspool.com/news/main.do",
        },
        {
            name: "Bigs",
            link: "https://www.cblab.co.kr/bigs/main.do",
        },
    ];

    return (
        <div className="footer">
            <div className="footer-first">
                <div className="footer-first-inner-wrapper">
                    <div className="first-l">
                        <div style={{ marginRight: "auto" }}><a href="javascript:;">이용약관</a></div>
                        <div style={{ marginRight: "auto", marginLeft: "auto" }}><a href="javascript:;">개인정보 처리방침</a></div>
                        <div style={{ marginLeft: "auto" }}><a href="javascript:;">저작권 정책</a></div>
                    </div>
                    <div className="first-r">
                        <Dropdown data={dropdownMenus} />
                    </div>
                </div>
            </div>
            <div className="footer-last">
                <div className="width-wrapper">
                    <div className="last-l">
                        <div className="last-list">
                            회사명 | (주)이크레더블 대표자 | 민영창 사업자번호 | 105-86-28840
                        </div>
                        <div className="last-list">
                            주소 | 서울시 구로구 디지털로33길 27(구로동 197-5 삼성IT밸리 8층)
                        </div>
                        <div className="last-list">
                            통신판매신고 | 2006-서울구로-03347 사이트 이용문의 | 02-2101-9114 Fax | 02-6969-5273
                        </div>
                    </div>
                    <div className="last-r width-wrapper-right">
                        <img src="./images/logo_cbLab.png" />
                        <div>
                            Copyright ©2011 e-Credible. All rights reserved. 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Dropdown({ data }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="footer-dropdown-wrapper" onClick={() => setIsActive(!isActive)}>
            <div className="footer-dropdown-text">
                <div style={{ marginRight: "auto" }}>Family Site</div>
                <div><ExpandMoreIcon className="down-arrow" /></div>
            </div>
            <div className={`footer-dropdown${isActive ? "-active" : ""}`}>
                {data.map((item) => (
                    <div><a href={item.link} target="_blank">{item.name}</a></div>
                ))}
            </div>
        </div>
    );
}