

var player : CharacterController;

var xPos:float;
var yPos:float;


	
	function Start () {
		//initial position
	xPos = player.transform.position.x;
	yPos = player.transform.position.y;
	
	
	
	}
	
	

	function Update () {
		//needs to keep updating the position
		xPos = player.transform.position.x;
		yPos = player.transform.position.y;


		//print("x Position: " + xPos);
		//print("y Position: " + yPos);
	}
	
	function OnGUI(){
		
	GUI.Label (Rect (20,20,200,20), "X :"+ xPos + "  Y :" + yPos);
	

	}