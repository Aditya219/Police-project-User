function validate()
{
    var confirmCity = document.getElementById("city-options");
    var confirmLetter = document.getElementById("OfficialLetter");
    var tp = document.getElementsByClassName("conf");
    var flag=0;
    for(var i=0;i<tp.length;i++)
    {
        console.log(i);
        if(tp[i].value == "")
            {
                tp[i].classList.add("Box-error");
                flag = 1;
            }
        else{
            tp[i].classList.remove("Box-error");
        }
    }
    if(flag == 0)
        return true;
    else
        return false;
    
}
    /*
    if(confirmCity.value == 0 && confirmLetter.value == "")
        {
            confirmCity.classList.add("Box-error");
            confirmLetter.classList.add("Box-error");
            return false;
        }
    else if(confirmCity.value == 0)
        {
            confirmLetter.classList.remove("Box-error");
            confirmCity.classList.add("Box-error");
            return false;
        }
    else if(confirmLetter.value == "")
        {
            confirmCity.classList.remove("Box-error");
            confirmLetter.classList.add("Box-error");
            return false;
        }
    else
        {
            var conformation = confirm("Do you want to submit");
            if(conformation)
                {
                    return true;      
                }
            else
                {
                    return false;
                }
        }
}

*/

//show the prefrences functions
 function showPrefrence($city) {
     if($city != 0)
         {
             alert($city);
             document.getElementById('prefrences').style.display = "block";
         }
     else
         {
             document.getElementById('prefrences').style.display = "none";
         }
            
    }


//cancel function
function cancelFun()
{
    var conformation = confirm("Data may lost.");
    return conformation;
}