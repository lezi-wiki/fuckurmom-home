import React, { useMemo } from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CircularProgress,
    Typography,
} from "@mui/material";
import { useGetAllInfoQuery } from "../../service/localDataApi";
import SubDomainInfo from "../../model/subDomainInfo";

const SiteCard: React.FC<{ domain: string }> = (props) => {
    const { data: dataList, isLoading } = useGetAllInfoQuery(null);

    const data: SubDomainInfo = useMemo(() => {
        if (typeof dataList !== "undefined") {
            for (let dataListElement of dataList) {
                if (dataListElement.domain === props.domain) {
                    return dataListElement;
                }
            }
            return {} as SubDomainInfo;
        } else {
            return {} as SubDomainInfo;
        }
    }, [dataList]);

    return (
        <Card>
            {isLoading ? (
                <CircularProgress />
            ) : (
                <>
                    <CardContent sx={{ pb: 0.5 }}>
                        <Typography
                            variant={"h6"}
                            component={"div"}
                            display={"block"}
                            gutterBottom
                            noWrap
                        >
                            Site: {data.title}
                        </Typography>
                        <Typography variant={"body1"} noWrap>
                            Domain: <i>{data.domain}</i>
                        </Typography>
                        <Typography variant={"body1"} noWrap>
                            Owner: <i>{data.owner}</i>
                        </Typography>
                        <Typography variant={"body1"} noWrap>
                            Idiot: <i>{data.idiot}</i>
                        </Typography>
                    </CardContent>
                    <CardActions
                        sx={{
                            justifyContent: "flex-end",
                        }}
                    >
                        <Button
                            size="small"
                            rel={"ugc noopener"}
                            href={"https://" + data.domain}
                            target={"_blank"}
                        >
                            Go
                        </Button>
                    </CardActions>
                </>
            )}
        </Card>
    );
};

export default SiteCard;
