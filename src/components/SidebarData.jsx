import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as CgIcons from "react-icons/cg";
import * as BiIcons from "react-icons/bi";

    const classN = 'list-group-item list-group-item-action list-group-item-primary';
export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <CgIcons.CgHome/>,
        cName: classN
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <CgIcons.CgProfile/>,
        cName: classN
    },
    {
        title: 'Reporst',
        path: '/reports',
        icon: <IoIcons.IoIosPaper/>,
        cName: classN
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus/>,
        cName: classN
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoIcons.IoMdPeople/>,
        cName: classN
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText/>,
        cName: classN
    },
    {
        title: 'Support',
        path: '/support',
        icon: <BiIcons.BiHelpCircle/>,
        cName: classN
    },

]

