import React from "react";
import {
    AppBar,
    Box,
    Drawer,
    IconButton,
    Link,
    List,
    Theme,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { useAppSelector } from "../../redux/hooks";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSidebarOpen } from "../../redux/slices/view";

import HomeIcon from "@mui/icons-material/Home";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";

const SidebarItem = React.lazy(() => import("./sidebarItem"));

const NavBar: React.FC = () => {
    const theme = useTheme<Theme>();
    const isMobileSize = useMediaQuery(theme.breakpoints.down("sm"));

    const history = useHistory();
    const dispatch = useDispatch();

    const title = useAppSelector((state) => state.view.title);
    const open = useAppSelector((state) => state.view.sidebarOpen);

    const handleOpen = () => {
        dispatch(setSidebarOpen(!open));
    };

    const drawerWidth = 240;

    return (
        <React.Fragment>
            <AppBar position={"fixed"} color={"primary"} enableColorOnDark>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, cursor: "default" }}
                        onClick={() => {
                            history.push("/");
                        }}
                    >
                        {title}
                    </Typography>
                    <Box>
                        <React.Suspense>
                            <Link
                                href={"https://github.com/fuckur-mom"}
                                target={"_blank"}
                                rel={"noopener noreferrer"}
                                color={"inherit"}
                            >
                                <IconButton
                                    edge={"end"}
                                    size={"large"}
                                    aria-label={"github"}
                                    sx={{ mr: isMobileSize ? undefined : 1 }}
                                    color={"inherit"}
                                >
                                    <GitHubIcon />
                                </IconButton>
                            </Link>
                        </React.Suspense>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                }}
                variant="persistent"
                anchor="left"
                open={open}
                PaperProps={{
                    sx: {
                        width: drawerWidth,
                        zIndex: 100,
                    },
                }}
            >
                <Toolbar />
                <Box overflow={"auto"}>
                    <List>
                        <React.Suspense>
                            <SidebarItem icon={HomeIcon} name={"Home"} url={"/"} />
                        </React.Suspense>
                    </List>
                </Box>
            </Drawer>
        </React.Fragment>
    );
};

export default NavBar;
