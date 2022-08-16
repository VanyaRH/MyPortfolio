import Hamburger from 'hamburger-react';
import { useState } from 'react';
import {Menu} from "../header/menu/menu";
import {Sections} from "../../variables/sections";

export const MyMenu = () => {
    const [isOpen, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(Sections.home);

    const handleOpen = (name: Sections) => {
        setActiveSection(name);
        setOpen(false);
    }

    document.body.style.overflowY = isOpen ? 'hidden' : 'auto';

    return (
        <>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            <Menu open={isOpen} activeSection={activeSection} onClick={(name) => { handleOpen(name) }} />
        </>
    )
}