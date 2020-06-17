import React from 'react';
import { inject, observer } from "mobx-react";
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StoreIcon from '@material-ui/icons/Store';
import MenuIcon from '@material-ui/icons/Menu';

import 'components/drawer/drawer.scss';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

interface Props {
    setDialogOpenList?: (dialogIdx : number, flag: boolean) => {};
    setIsCategoryAndListVisible?: (flag: boolean) => {};
}

function TopDrawer({ setDialogOpenList, setIsCategoryAndListVisible }: Props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
    });

    const toggleDrawer = (open: boolean) => (event: any) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, 'top': open });
    };

    const handleItemClick = (idx : number) => {
        setIsCategoryAndListVisible!(false);
        setDialogOpenList!(idx, true);
    }

    const list = () => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: true,
            })}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['가맹점 정보 등록 신청',].map((text, idx) => (
                    <ListItem button key={text} onClick={()=>{handleItemClick(idx)}}>
                        <ListItemIcon>
                            <StoreIcon style={{ fontSize: "25px", fontWeight: 600, color: "black" }} />
                        </ListItemIcon>
                        <ListItemText
                            disableTypography
                            primary={text}
                            style={{ fontSize: "20px", fontWeight: 600 }}
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div className="drawer-wrap">
            <React.Fragment key={'top'}>
                <button className="drawer-button" onClick={toggleDrawer(true)}>
                    <MenuIcon style={{ fontSize: "30px" }} />
                </button>
                <div className="drawer-swipedrawer">
                    <Drawer
                        anchor={'top'}
                        open={state['top']}
                        onClose={toggleDrawer(false)}
                    >
                        {list()}
                    </Drawer>

                </div>
            </React.Fragment>
        </div>
    );
}

export default inject(({ window }) => ({
    setDialogOpenList: window.setDialogOpenList,
    setIsCategoryAndListVisible: window.setIsCategoryAndListVisible,
}))(observer(TopDrawer));
