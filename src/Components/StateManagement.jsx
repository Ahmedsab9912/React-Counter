import React , {useState} from "react";

const StateManagement = () => {
const [currentName, setName] = useState("Ahmed");
const [buttonClicked, setButtonClicked] = useState(false);
const updateName = () => {
    setName("Ahmed Baig");
    setButtonClicked(true);
};
}
return (
    <>
    <h1>StateManagement Using SetState Hook</h1>
    <p>The name is : {currentName}</p>
    <button onClick={updateName} disabled={buttonClicked}>Click to Update Name</button> 
    </>
);
export default StateManagement;