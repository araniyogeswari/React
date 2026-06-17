import {useContext} from "react";
import UserContext from "./context.js";
function Mom ()
{
const dad = useContext(UserContext);
return(
    <h1>{dad}</h1>
);
}
export default Mom;