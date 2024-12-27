var score=0;
(function(){
	
	let name=window.prompt("Enter your name");
	let age=window.prompt("Enter Age");
	if(typeof name != null)
	{
	window.alert("Hello " + name + "! Your time starts now!");
	}
	else
	{
	window.alert("Hello Gamer! Your time starts now");
	}
	document.getElementById('name').innerHTML= "Player: " + name;
	var a=61;
	setInterval(function () {
	a=a-1;
	if(a==0){
		window.alert("Time over! Your final score is "+ score);
		window.stop();
		document.getElementById("time").innerHTML=""
		document.getElementById("score").innerHTML=""
	   	tryagain=document.createElement("button");
		tryagain.setAttribute("id", "tryagain");
		tryagain.innerHTML="Try again";
		document.querySelector("body").appendChild(tryagain);
		document.getElementById("tryagain").addEventListener('click', function(){location.reload();});
		
	/*	exit=document.createElement("button");
		exit.setAttribute("id", "exit");
		exit.innerHTML="Exit";
		document.querySelector("body").appendChild(exit);		
		document.getElementById("exit").addEventListener('click', function(){window.stop();}); */
		}
		
	document.getElementById('time').innerHTML="Time left: " + `${a}`+ "sec"; }, 1000);
	var varp=document.createElement('img');
	var count=document.createElement('p');
	document.querySelector('content').appendChild(count)
	var randf=0;
	var randint=0;
	var rand=setInterval(function(){var randf=Math.round(Math.random()*1501);
					if(500<randf<1100){ 
						randint=randf;}
					else{randint=randf + 500};
	var random=function randomfunc(){
	varp.src="newdrawfly.png";
	varp.style.color="red";
	var y=Math.round(Math.random()*150);
	var x=Math.round(Math.random()*500);
	var pt=100;
	varp.style.position="absolute";
	varp.style.left=`${x}`+"px";
	varp.style.top=`${y}`+"px";
	varp.style.fontSize=`${pt}`+"px";
	document.body.appendChild(varp);
	/*var randint=Math.round(Math.random()*501);*/
	var plist=document.querySelectorAll('img');
	for(p of plist){
				p.addEventListener('click', function(){
				var p1list=document.querySelectorAll('img');
				for(p1 of p1list){
								z=y+300;
								console.log(z);
								p1.src="deadfly.png";
								document.querySelector('audio').play();
								/*document.getElementById('score').innerHTML=="Score: "+ score; */
								p1.style.top="550px";}});
		}
		p.onclick=function(){
			score=score+1;
			document.getElementById('score').innerHTML= " Score: " + `${score}` ;
			navigator.vibrate(200);
		}
	}
	var main=setTimeout(random,randint);},1000);
	
	})(); 

/*(function(){
	setInterval(function(){var varp=document.createElement('p');
	varp.innerHTML=".";
	varp.style.color="red";
	var y=Math.round(Math.random()*301);
	var x=Math.round(Math.random()*1001);
	var pt=100;
	varp.style.position="absolute";
	varp.style.left=`${x}`+"px";
	varp.style.top=`${y}`+"px";
	varp.style.fontSize=`${pt}`+"px";
	console.log(x);
	console.log(y);
	document.body.appendChild(varp);
	var plist=document.querySelectorAll('p');
	for(p of plist){p.addEventListener('click', function(){ 
	var p1list=document.querySelectorAll('p');
	for(p1 of p1list){p1.innerHTML=""};
		});}
	
	},500);
	
*/
