import { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
    const [query, setQuery] = useState("");

    return (
        <div className="header">
            <div className="header-wrapper width-wrapper">
                {/* logo */}
                <div className="logo-wrapper">
                    <img src="./images/logo_cbLab.png" />
                </div>

                {/* search bar */}
                <div className="searchbar-wrapper">
                    <div className="search-input-wrapper">
                        <SearchIcon className="search-icon" />
                        <input className="search-input" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="기업명, 사업자번호, 법인번호, 대표자명으로 검색해주세요." />
                    </div>
                </div>


                {/* header buttons (login, sign-up, help) */}
                <div className="header-buttons-wrapper width-wrapper-right">
                    <button className="h-btn login-button" onClick={() => {}}>
                        로그인
                    </button>
                    <button className="h-btn signup-button" onClick={() => {}}>
                        회원가입
                    </button>
                    <button className="h-btn help-button" onClick={() => {}}>
                        고객센터
                    </button>
                </div>
            </div>

        </div>
    );
}