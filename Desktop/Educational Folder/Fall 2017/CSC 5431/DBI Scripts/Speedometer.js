#pragma strict
var texture : Texture2D;
var player : CharacterController;
var speed: double;


function Start () {
	speed = GetComponent.<Rigidbody>().velocity.magnitude * 3.6;
	
}

function Update () {
	speed = GetComponent.<Rigidbody>().velocity.magnitude * 3.6;
	speed = Mathf.Round(speed); //rounds the speed to the nearest number
	if (speed < 0) //keeps it from showing negitive speeds
	{
		speed = 0;
	}
	

}
function OnGUI(){
GUI.backgroundColor = Color.black;
GUI.contentColor = Color.white;	
 GUI.Box (Rect(20,20,200,50),"Speed : " + speed);
//GUI.Label (Rect (20,20,texture.width,texture.height),texture);
	

}

