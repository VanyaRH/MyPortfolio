import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import {useEffect, useState} from "react";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface iFullScreenDialog{
    isOpen: boolean;
    children: any;
    onSetOpen: (isOpen: boolean) => void;
}

interface iProjectDialog{
    isOpen: boolean;
    children: any;
    onSetOpen: (isOpen: boolean) => void;
}

export const FullScreenDialog = ({ isOpen, children, onSetOpen }: iFullScreenDialog) => {
    const [open, setOpen] = useState(isOpen);

    const handleClose = () => {
        onSetOpen(false);
        setOpen(false);
    };

    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen])

    return (
        <div>

            <Dialog
                fullScreen={true}
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative', background: '#fff', boxShadow: 'none', color: '#000' }}>
                    <Toolbar>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        </Typography>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >&#10005;
                        </IconButton>
                    </Toolbar>
                </AppBar>
                {children}
            </Dialog>
        </div>
    );
}

export const ProjectDialog = ({ isOpen, children, onSetOpen }: iProjectDialog) => {
    const [open, setOpen] = useState(isOpen);

    const handleClose = () => {
        onSetOpen(false);
        setOpen(false);
    };

    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen])

    return (
        <div>

            <Dialog
                fullScreen={false}
                maxWidth={false}
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative', background: '#fff', boxShadow: 'none', color: '#000' }}>
                    <Toolbar>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        </Typography>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >&#10005;
                        </IconButton>
                    </Toolbar>
                </AppBar>
                {children}
            </Dialog>
        </div>
    );
}
