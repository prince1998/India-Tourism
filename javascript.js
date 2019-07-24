function openNav() 
{
	document.getElementById("menu").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() 
{
	document.getElementById("menu").style.width = "0";
	document.getElementById("main").style.marginLeft = "0px";
}

function showsubmenu1()
{
	var a = document.getElementById("submenu1");
	a.style.display = "block";
	a.style.marginTop = "128px";
}
function showsubmenu2()
{
	var a = document.getElementById("submenu2");
	a.style.display = "block";
	a.style.marginTop = "185px";
}
function hidesubmenu1()
{
	document.getElementById("submenu1").style.display = "none";
}
function hidesubmenu2()
{
	document.getElementById("submenu2").style.display = "none";
}
