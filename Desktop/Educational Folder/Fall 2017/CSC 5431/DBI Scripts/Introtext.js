var texts: GameObject[];

texts = GameObject.FindGameObjectsWithTag("texts"); 

var text1: GameObject;
var text2: GameObject;
var text3: GameObject;
var text4: GameObject;
var text5: GameObject;
var text6: GameObject;

function Start()
{
if(Application.loadedLevelName == "tobecontinue")
{
	texts[0]=text1;

}
else
{
	texts[0]=text1;
	texts[1]=text2;
	texts[2]=text3;
	texts[3]=text4;
	texts[4]=text5;
	texts[5]=text6;

}
	
}

for (var intro: GameObject in texts)
{
	intro.SetActive(false);
}


for (var intro: GameObject in texts)
{
	yield WaitForSeconds(5);
	intro.SetActive(true);
	yield WaitForSeconds(5);
	intro.SetActive(false);
}

yield WaitForSeconds (5);

if(Application.loadedLevelName == "Backstory")
{

Application.LoadLevel("Lab5 - CSC5431-Scenes");

}

if(Application.loadedLevelName == "Backstory continued")
{

Application.LoadLevel("tobecontinue");

}

if(Application.loadedLevelName == "tobecontinue")
{
Application.LoadLevel("Mazescene");

}

