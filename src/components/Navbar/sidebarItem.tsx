import React from "react";
import { Link, ListItemButton, ListItemIcon, ListItemText, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { useHistory, useLocation } from "react-router-dom";

const SidebarItem: React.FC<{
    icon: OverridableComponent<SvgIconTypeMap>;
    name: string;
    url: string;
}> = (props) => {
    const history = useHistory();
    const location = useLocation();

    const handler = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (props.url.startsWith("/")) {
            e.preventDefault();
            history.push(props.url);
        }
    };

    return (
        <Link
            href={props.url}
            target={"_blank"}
            color={"inherit"}
            underline={"none"}
            onClick={handler}
        >
            <ListItemButton selected={location.pathname === props.url}>
                <ListItemIcon>
                    <props.icon />
                </ListItemIcon>
                <ListItemText primary={props.name} />
            </ListItemButton>
        </Link>
    );
};

export default SidebarItem;
