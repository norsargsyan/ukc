let num = 0;
let images = document.querySelectorAll('.img-slide');
let control = document.querySelectorAll('.position');
controlNum = 0;
let pos = 0;
function changeImage(number)
{
	if(number)
	{
		if(pos == 1)
		{
			pos = 0;
		}
		else
		{
			pos = 1;
		}
	}
	else
	{
		if(pos == 0)
		{
			pos = 1;
		}
		else
		{
			pos = 0;
		}
	}
	if(pos == 0)
	{
		for(i = 0; i < images.length; i++)
		{
			images[i].style.transform = 'translateX(0px)';
			control[0].src = 'assets/icons/Ellipse 119.png';
			control[1].src = 'assets/icons/Ellipse 118.png';

		}
	}
	else if(pos == 1)
	{
		for(i = 0; i < images.length; i++)
		{
			images[i].style.transform = 'translateX(-390px)';
			control[1].src = 'assets/icons/Ellipse 119.png';
			control[0].src = 'assets/icons/Ellipse 118.png';
		}
	}	
}
function changeImageCircle(getPosition)
{
	if(getPosition == 0)
	{
		for(i = 0; i < images.length; i++)
		{
			images[i].style.transform = 'translateX(0px)';
			control[0].src = 'assets/icons/Ellipse 119.png';
			control[1].src = 'assets/icons/Ellipse 118.png';

		}
	}
	else
	{
		for(i = 0; i < images.length; i++)
		{
			images[i].style.transform = 'translateX(-390px)';
			control[1].src = 'assets/icons/Ellipse 119.png';
			control[0].src = 'assets/icons/Ellipse 118.png';
		}
	}
}
