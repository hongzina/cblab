import { useState } from "react";

export default function DropdownMenu() {
    const [currentMenu, setCurrentMenu] = useState(0);

    const menus = [
        {
            name: "My 서비스",
            sub_menus: [
                {
                    name: "My관심기업모니터링",
                    path: "/My관심기업모니터링",
                },
                {
                    name: "My관심등기모니터링",
                    path: "/My관심등기모니터링",
                },
                {
                    name: "My자사신용관리",
                    path: "/My자사신용관리",
                },
                {
                    name: "My미수채권현황",
                    path: "/My미수채권현황",
                },
                {
                    name: "Mypage",
                    path: "/Mypage",
                },
            ],
        },
        {
            name: "기업정보조회",
            sub_menus: [
                {
                    name: "Sub-menu 2-1",
                    path: "/sub-menu-2-1",
                },
                {
                    name: "Sub-menu 2-2",
                    path: "/sub-menu-2-2",
                },
                {
                    name: "Sub-menu 2-3",
                    path: "/sub-menu-2-3",
                },
            ],
        },
        {
            name: "법인부동산등기조회",
            sub_menus: [
                {
                    name: "Sub-menu 2-1",
                    path: "/sub-menu-2-1",
                },
                {
                    name: "Sub-menu 2-2",
                    path: "/sub-menu-2-2",
                },
                {
                    name: "Sub-menu 2-3",
                    path: "/sub-menu-2-3",
                },
            ],
        },
        {
            name: "여신조회",
            sub_menus: [
                {
                    name: "Sub-menu 2-1",
                    path: "/sub-menu-2-1",
                },
                {
                    name: "Sub-menu 2-2",
                    path: "/sub-menu-2-2",
                },
                {
                    name: "Sub-menu 2-3",
                    path: "/sub-menu-2-3",
                },
            ],
        },
        {
            name: "자산신용관리",
            sub_menus: [
                {
                    name: "Sub-menu 2-1",
                    path: "/sub-menu-2-1",
                },
                {
                    name: "Sub-menu 2-2",
                    path: "/sub-menu-2-2",
                },
                {
                    name: "Sub-menu 2-3",
                    path: "/sub-menu-2-3",
                },
            ],
        },
        {
            name: "미수채권신고",
            sub_menus: [
                {
                    name: "Sub-menu 2-1",
                    path: "/sub-menu-2-1",
                },
                {
                    name: "Sub-menu 2-2",
                    path: "/sub-menu-2-2",
                },
                {
                    name: "Sub-menu 2-3",
                    path: "/sub-menu-2-3",
                },
            ],
        },
        {
            name: "협력사관리",
            sub_menus: [
                {
                    name: "Sub-menu 2-1",
                    path: "/sub-menu-2-1",
                },
                {
                    name: "Sub-menu 2-2",
                    path: "/sub-menu-2-2",
                },
                {
                    name: "Sub-menu 2-3",
                    path: "/sub-menu-2-3",
                },
            ],
        },
    ];

    return (
        <div className="menu-wrapper">
            {menus.map((menu, i) => (
                <div className="menu-item-wrapper" key={i}>
                    <div className="menu-item" onClick={() => setCurrentMenu(i)}>
                        {menu.name}
                    </div>
                    <div>
                        <SubMenu menus={menu.sub_menus} isActive={currentMenu === i} />
                    </div>
                </div>
            ))}
        </div>
    );
}

function SubMenu({ menus, isActive }) {
    return (
        <div className="sub-menu-wrapper">
            <div className={`${isActive ? "menu-active" : "menu-inactive"}`}>
                {menus.map((menu, i) => (
                    <div>
                        {menu.name}
                    </div>
                ))}
            </div>
        </div>
    );
}