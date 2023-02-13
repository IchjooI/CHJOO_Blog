var keyName=new Array();
var passWord=new Array();
passWord=[38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 66, 65];
function ArrayContrast(a1,a2)
{
    for(i=0;i<a1.length;i++)
    {
        if(a1[i]!=a2[i])
        {
            return false;
        }
    }
    return true;
}
document.onkeydown = function(event){
        keyName.push(event.keyCode)
        while(keyName.length>=passWord.length)
        {
            c=keyName.slice(0,0+passWord.length);
            console.log(c);
            console.log(passWord);
            keyName.splice(0,1);
            if(ArrayContrast(passWord,c))
            {
                window.location.href="love.html";
                break;
            }
        }
        console.log(keyName);
    }