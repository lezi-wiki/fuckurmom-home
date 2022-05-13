import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import LightIcon from "@mui/icons-material/Brightness7Rounded";
import DarkIcon from "@mui/icons-material/Brightness4Rounded";
import { toggleColorMode } from "../../redux/slices/theme";

const ColorModeSwitcher: React.FC = () => {
    const dispatch = useAppDispatch();

    const isDarkMode = useAppSelector<boolean>((state) => state.theme.palette.mode === "dark");
    const Icon = React.useMemo(() => (isDarkMode ? DarkIcon : LightIcon), [isDarkMode]);

    const toggleClick = () => {
        dispatch(toggleColorMode());
    };

    return (
        <Tooltip title={"切换到 " + (isDarkMode ? "亮色模式" : "暗色模式")}>
            <IconButton
                edge={"end"}
                size={"large"}
                aria-label={"toggleColorMode"}
                sx={{ mr: 1 }}
                color={"inherit"}
                onClick={toggleClick}
            >
                <Icon />
            </IconButton>
        </Tooltip>
    );
};

export default ColorModeSwitcher;
