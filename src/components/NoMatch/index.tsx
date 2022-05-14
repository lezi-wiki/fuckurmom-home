import React from "react";
import { Card, Typography } from "@mui/material";

const NoMatch: React.FC = () => {
    return (
        <Card sx={{ padding: 1 }}>
            <Typography variant={"h4"} component={"h1"} align={"center"}>
                {"404 Not Found."}
            </Typography>
        </Card>
    );
};

export default NoMatch;
