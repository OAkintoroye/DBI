#pragma strict

var time:float;

function Start () {
	
	time = 0.0f;
	GameObject.Find("timerui").GetComponent.<UI.Text>().text = "";
}

function Update () {
	
	time = time + Time.deltaTime;
	var seconds:int = time;
	var minutes:int = time/60;
	seconds = time%60;
	
	GameObject.Find("timerui").GetComponent.<UI.Text>().text = minutes + ":" + seconds;
}
