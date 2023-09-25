import { Link } from "react-router-dom";
import DropdownMenu from "../components/DropdownMenu";
import { useState, useEffect } from "react";

export default function Home() {
    const [currentBanner, setCurrentBanner] = useState(0);
    const [currentDate, setCurrentDate] = useState(new Date());

    const banners = [
        {
            name: "Menu 1",
            image: "",
            text1: "111",
            text2: "222",
            text3: "333",
            button_text: "bbb1",
            button_link: "bbb1",
        },
        {
            name: "Menu 2",
            image: "",
            text1: "111",
            text2: "222",
            text3: "333",
            button_text: "bbb2",
            button_link: "bbb1",
        },
        {
            name: "Menu 3",
            image: "",
            text1: "111",
            text2: "222",
            text3: "333",
            button_text: "bbb3",
            button_link: "bbb1",
        },
        {
            name: "Menu 4",
            image: "",
            text1: "111",
            text2: "222",
            text3: "333",
            button_text: "bbb4",
            button_link: "bbb1",
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
            <div className="banner-wrapper flex flex-col">
                <Banner banner={banners[currentBanner]} />
                <div className="menus flex flex-row">
                    {banners.map((banner, i) => (
                        <div className="banner-menu-item" key={i} onClick={() => setCurrentBanner(i)}>
                            {banner.name}
                        </div>
                    ))}
                </div>
            </div>

            {/* date */}
            <div>
                {currentDate.toLocaleDateString()}
            </div>
        </div>
    );
}

function Banner({ banner }) {
    return (
        <div className="banner">
            <img className="object-cover" src="" />
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <div className="">
                        {banner.text1}
                    </div>
                    <div className="">
                        {banner.text2}
                    </div>
                </div>

                <button className="" onClick={() => {}}>
                    {banner.button_text}
                </button>

            </div>
        </div>
    );
}