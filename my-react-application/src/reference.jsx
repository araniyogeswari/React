import{useRef}  from "react";
function Refer(){
    const remo = useRef ();
const selfie = ()=>{
    remo.current.focus();

};
return (
<div>
    <label>Name:</label>
<input ref ={remo} type ="text"/>
<button onClick={selfie}>Submit </button>
</div>
);
}
export default Refer;