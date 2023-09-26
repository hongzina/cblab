import { useState } from "react";

export default function Footer() {

    const dropdownMenus = [
        {
            name: "menu 1",
        },
        {
            name: "menu 2",
        },
        {
            name: "menu 3",
        },
    ];

    return (
        <div className="footer">
            <div className="footer-first">
                <div className="footer-first-inner-wrapper">
                    <div className="first-l">
                        <div style={{ marginRight: "auto" }}>이용약관</div>
                        <div style={{ marginRight: "auto", marginLeft: "auto" }}>개인정보 처리방침</div>
                        <div style={{ marginLeft: "auto" }}>저작권 정책</div>
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
                <div>v</div>
            </div>
            <div className={`footer-dropdown${isActive ? "-active" : ""}`}>
                {data.map((item) => (
                    <div>{item.name}</div>
                ))}
            </div>
        </div>
    );
}