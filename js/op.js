var input = 1

document.getElementById("translate").addEventListener("click", function(){
    inText = document.getElementById("input").value

    outText = ""

    if(input == 1)
    {
        for(var i = 0; i < inText.length; i++)
        {
            if("aeiou".includes(inText[i]))
            {
                outText += inText[i]
            }
            else if (" ".equals(inText))

            outText += " "
        }
    }
})