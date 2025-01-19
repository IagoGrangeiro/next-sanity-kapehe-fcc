import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "p0hshqv4",
    dataset: "production",
    title: "My Personal Website",
    apiVersion: "2025-01-03",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: { types: schemas }
});

export default config;