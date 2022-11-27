import { getMapJSON } from "dotted-map";

const mapJsonString = getMapJSON({ height: 60, grid: "diagonal" });
console.log(mapJsonString);
export default mapJsonString;
