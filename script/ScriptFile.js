//When a "work" img is clicked it will display the appropriate text
//based on that employer.
var work_history = document.getElementsByClassName("work-history");
var i;
var previousTarget=null;
var work_text = document.getElementById("work-text");

for(i = 0; i < work_history.length; i++)
{
    work_history[i].addEventListener("click", function() {

        if(this !== previousTarget && work_text.style.display !== "block")
        {
            work_text.style.display = "block";
            previousTarget = this;
            console.log("1");
        }
        else if(this === previousTarget && work_text.style.display === "block")
        {
            work_text.style.display = "none";
            previousTarget = null;
            console.log("2");
        }
        else
        {
            work_text.style.display = "block";
            previousTarget = this;
            console.log("3");
        }
    });
}




