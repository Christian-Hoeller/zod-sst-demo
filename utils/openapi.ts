import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

// extend zod with openapi. This will add the openapi method to all zod types
// it should also only be called once in the application
extendZodWithOpenApi(z);
z.string().openapi({ description: "Some string" });

import { OpenApiGeneratorV3 } from "@asteasolutions/zod-to-openapi";
import yaml from "yaml";
import fs from "fs";

// @Todo: import all schemas automatically
import { SportSchema, UserSchema } from "../src/schemas";

const openApiConfig = {
  openapi: "3.0.3",
  info: {
    version: "1.0.0",
    title: "Demo API",
    description: "Demo API for OpenAPI documentation",
  },
  servers: [{ url: "v1" }],
};

const generateOpenApiDocumentation = () => {
  const generator = new OpenApiGeneratorV3([
    // @ts-ignore
    SportSchema,
    // @ts-ignore
    UserSchema,
  ]);
  const { components } = generator.generateComponents();

  return generator.generateDocument({
    ...openApiConfig,
    ...(components && { components }),
  });
};

function writeDocumentationToYamlFile() {
  const docs = generateOpenApiDocumentation();

  const fileContent = yaml.stringify(docs);

  fs.writeFileSync(`./docs/openApi.yml`, fileContent, {
    encoding: "utf-8",
  });
}

writeDocumentationToYamlFile();
