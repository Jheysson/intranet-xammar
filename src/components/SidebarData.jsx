import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

    const classN = 'list-group-item list-group-item-action bg-light';
export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
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
        icon: <IoIcons.IoMdHelpCircle/>,
        cName: classN
    },

]

