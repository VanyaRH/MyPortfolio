import Hamburger from 'hamburger-react';
import React, { useState } from 'react';
import {Menu} from "../header/menu/menu";
import {Sections} from "../../variables/sections";

const MyMenuComponent = () => {
    const [isOpen, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(false);
    }

    document.body.style.overflowY = isOpen ? 'hidden' : 'auto';

    return (
        <>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            <Menu open={isOpen} onClick={() => { handleOpen() }} />
        </>
    )
}

export const MyMenu = React.memo(MyMenuComponent);