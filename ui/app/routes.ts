import { type RouteConfig, index, layout, prefix } from "@react-router/dev/routes";

export default [
    layout("./layout/main.tsx", [
        index("routes/assets.tsx"),

        ...prefix("upload", [
            index("./routes/upload-assets.tsx")
        ]),
    ])
] satisfies RouteConfig
