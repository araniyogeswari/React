function Hello()
{
    return (
            <p style={{textAlign:"left"}}>Hello</p>
        );
}
function Galaxy(props)
{
    return(
        <h1>{props.name}</h1>
    );
    }
    function star()
    {
        return(
            <Galaxy name="sun"></Galaxy>
        );
    }
function Animal() {
    return (
       <>
       <h1>Animals</h1>
       <div style={{display:"flex",gap:"20px"}}>
        <p
        style={{textAlign:"justify"}}
        >
            In 1924, Hidesaburō Ueno, an agricultural science professor at Tokyo Imperial University, adopted a golden-brown Akita puppy and named him Hachi. The two formed an incredibly tight bond. Every morning, Hachikō would walk with Professor Ueno to the Shibuya train station. When the workday ended, the devoted dog would return to the station right on time to greet his master as he got off the train.
        </p>
        <img 
        style={{width:100}}
        src="https://i.pinimg.com/736x/7c/5d/93/7c5d9348e5bf8a0fec9a7162155d66dd.jpg" alt="Dog" />
       </div>
       <Hello />
       <Galaxy name="Sun" />
     </>  
       
    );
}
export default Animal;