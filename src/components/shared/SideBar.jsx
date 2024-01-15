import React from 'react';
import { FcBullish } from "react-icons/fc";
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/consts/navigation';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineLogout } from 'react-icons/hi'

import classNames from 'classnames';

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

function SideBar() {
    return (
        <div className='flex flex-col p-3 text-white w-60 bg-neutral-900'>
            <div className='flex items-center gap-2 px-1 py-3'>
                <FcBullish fontSize={24} />
                <span className='text-lg text-neutral-100'>OpenShop</span>
            </div>
            <div className='flex flex-col flex-1 py-8 gap-0.5'>
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <div key={item.key}>
                        <SidebarLink key={item.key} item={item} />
                    </div>
                ))}
            </div>
            <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map(item => (
                <SidebarLink key={item.key} item={item} />
            ))}
            <div className={classNames(linkClasses, 'cursor-pointer text-red-500 cursor-pointer')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Logout
				</div>
            </div>
        </div>
    )
}

export default SideBar

function SidebarLink({ item }) {
    const { pathname } = useLocation();

    return (
        <Link to={item.path} className={classNames(pathname === item.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClasses)}>
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    )
}