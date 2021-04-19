import postcss from "postcss";
import fs from "fs";
import path from "path";
import parseScope from "./varParse/index";
import printOut from "../utils/printing";
const text = fs.readFileSync(path.join(__dirname, '../', '/ycss/varText.less'))

const node = postcss.parse(text)

parseScope(node, {}, node)

printOut(node.toResult().css)//

