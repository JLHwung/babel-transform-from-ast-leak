import * as babel from "@babel/core";
import fs from "node:fs/promises";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

(async () => {
  const path = require.resolve(`@babel/parser`);
  const src = await fs.readFile(path, "utf-8");

  let ast = babel.parseSync(src, {
    configFile: false,
    sourceType: "script",
  });

  ast = babel.transformFromAstSync(ast, src, {
    configFile: false,
    ast: true,
  }).ast;

  for (let i = 0; i < 1e7; i++) {
    ast = babel.transformFromAstSync(ast, src, {
      configFile: false,
      ast: true,
    }).ast;
  }
})();
