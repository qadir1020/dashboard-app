import React, { Fragment } from 'react';
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi';
import { Menu, Popover, Transition } from '@headlessui/react'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom';


export const Header = () => {

    const navigate = useNavigate();

    return (
        <div className='flex items-center justify-between h-16 px-4 bg-white border-b border-grey-200'>
            <div className='relative'>
                <HiOutlineSearch fontSize={20} className="absolute -translate-y-1/2 text-grey-400 top-1/2 left-3" />
                <input type="text" placeholder="Search..."
                    className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-sm" />
            </div>
            <div className='flex gap-2 mr-2 flex-items-center'>
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={classNames(
                                    open && 'bg-gray-100',
                                    'group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
                                )}
                            >
                                <HiOutlineChatAlt fontSize={24} />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
                                    <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                                        <strong className="font-medium text-gray-700">Messages</strong>
                                        <div className="py-1 mt-2 text-sm">This is messages panel.</div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={classNames(
                                    open && 'bg-gray-100',
                                    'group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
                                )}
                            >
                                <HiOutlineBell fontSize={24} />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
                                    <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                                        <strong className="font-medium text-gray-700">Notification</strong>
                                        <div className="py-1 mt-2 text-sm">This is Notification panel.</div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex ml-2 rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
                            <span className="sr-only">Open user menu</span>
                            <div
                                className="w-10 h-10 bg-center bg-no-repeat bg-cover rounded-full bg-sky-500"
                                style={{ backgroundImage: 'url("https://source.unsplash.com/80x80?face")' }}>
                                <span className="sr-only">Hugh Jackson</span>
                            </div>
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 w-40 p-1 mt-2 origin-top-right bg-white rounded-sm shadow-md ring-1 ring-opacity-5 focus-outline-none">
                            <div className="">
                                <Menu.Item>
                                    {({ active }) => (
                                        <div
                                            onClick={() => navigate('/profile')}
                                            className={classNames(
                                                active && 'bg-gray-100',
                                                'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                                            )}
                                        >
                                            Your Profile
                                        </div>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <div
                                            onClick={() => navigate('/settings')}
                                            className={classNames(
                                                active && 'bg-gray-100',
                                                'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                                            )}
                                        >
                                            Settings
                                        </div>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <div
                                            onClick={() => navigate('/logout')}
                                            className={classNames(
                                                active && 'bg-gray-100',
                                                'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                                            )}
                                        >
                                            LogOut
                                        </div>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    )
}
