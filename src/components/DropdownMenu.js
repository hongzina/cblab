import { useState } from "react";

export default function DropdownMenu() {
    const [currentMenu, setCurrentMenu] = useState(0);

    const menus = [
        {
            name: "Menu 1",
            sub_menus: [
                {
                    name: "Sub-menu 1-1",
                    path: "/sub-menu-1-1",
                },
                {
                    name: "Sub-menu 1-2",
                    path: "/sub-menu-1-2",
                },
                {
                    name: "Sub-menu 1-3",
                    path: "/sub-menu-1-3",
                },
            ],
        },
        {
            name: "Menu 2",
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
            name: "Menu 2",
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