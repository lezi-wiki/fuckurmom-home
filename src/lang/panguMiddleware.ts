import { PostProcessorModule } from "i18next";
import pangu from "pangu";

const PanguMiddleware: PostProcessorModule = {
    type: "postProcessor",
    name: "pangu",
    process: function (value, key, options, translator) {
        return pangu.spacing(value);
    },
};

export default PanguMiddleware;
