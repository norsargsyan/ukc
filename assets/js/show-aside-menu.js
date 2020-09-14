let menu = document.querySelectorAll('.submenu');
let icon = document.querySelectorAll('.arrow-image');
let arr = [];
function showAsideMenu(number) {

	if(arr[number])
	{
		menu[number].style.transition = "0.5s";
		menu[number].style.opacity = "0";
		setTimeout(function(){menu[number].style.height = "0";
		},100);
		icon[number].style.transform = 'rotate(360deg)';
		arr[number] = false;
	}
	else
	{
		menu[number].style.transition = "0.1s";
		menu[number].style.opacity = "1";
		setTimeout(function(){menu[number].style.height = "100%";
		},100);
		icon[number].style.transform = 'rotate(180deg)';
		arr[number] = true;

	}
	
}