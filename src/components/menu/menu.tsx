import Hamburger from 'hamburger-react';
import { useState } from 'react';

export const MyMenu = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <Hamburger toggled={isOpen} toggle={setOpen} />
    )
}