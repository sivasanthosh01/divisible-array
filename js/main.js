var division=[10,12,15,27,35,30,60];
document.write(division+"<br>");
document.write("3 and 5 divisible values are:<br>");
for(i=0;i<division.length;i++)
{
	if((division[i]%3==0)&&(division[i]%5==0))
	{
		document.write(division[i]+"<br>");
	}
}
