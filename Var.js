const browserName = "chrome"
function getBrowserName() 
{
    if (browserName === "chrome") 
        {   
            var browserName = "firefox"
            console.log("inside block", browserName);
        }
            console.log("outside block", browserName );
 } getBrowserName()
            console.log("outside function", browserName);
        
