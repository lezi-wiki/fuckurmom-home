import React, { useMemo } from "react";
import "flag-icons/css/flag-icons.css";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { languages } from "../../lang";
import LanguageIcon from "@mui/icons-material/Language";
import { changeLanguage } from "i18next";
import { useSnackbar } from "notistack";

const LanguageSwitcher: React.FC = () => {
    const { t, i18n } = useTranslation("languageSwitcher");

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const languageArr = useMemo(() => {
        let arr: Array<{ lang: string; name: string }> = [];
        for (let languagesKey in languages) {
            arr.push({
                lang: languagesKey,
                name: languages[languagesKey],
            });
        }
        return arr.sort((a, b) => {
            if (a.lang > b.lang) return 1;
            else if (a.lang === b.lang) return 0;
            else return -1;
        });
    }, [languages]);

    const { enqueueSnackbar } = useSnackbar();

    const handleChangeLanguage = (name: string) => () => {
        changeLanguage(name).then(() => {
            enqueueSnackbar(
                t("System language switched to {{name}}", {
                    name: languages[name],
                }),
                {
                    variant: "success",
                    anchorOrigin: {
                        vertical: "top",
                        horizontal: "center",
                    },
                    key: "language-switch",
                }
            );
        });
    };

    return (
        <Box>
            <IconButton
                edge={"end"}
                size={"large"}
                aria-label={"github"}
                color={"inherit"}
                onClick={handleMenu}
            >
                <LanguageIcon />
            </IconButton>
            <Menu
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                onClose={handleClose}
                sx={{
                    marginTop: 5,
                }}
            >
                {languageArr.map((language, index) => (
                    <MenuItem
                        onClick={
                            language.lang !== i18n.language
                                ? handleChangeLanguage(language.lang)
                                : undefined
                        }
                        selected={language.lang === i18n.language}
                        key={index}
                    >
                        <Box
                            component={"span"}
                            className={`fi fi-${language.lang.split("-")[1].toLowerCase()}`}
                        />
                        <Typography variant={"body1"} component={"span"} marginLeft={1}>
                            {language.name}
                        </Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};

export default LanguageSwitcher;
