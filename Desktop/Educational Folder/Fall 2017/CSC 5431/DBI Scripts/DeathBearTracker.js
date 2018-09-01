#pragma strict
var player:GameObject;
var distancefromdeathbear : double;
var deathbears : GameObject[];
var pos : double;

function Start () {
	deathbears = GameObject.FindGameObjectsWithTag("Bear"); //locates the deathbear
}

function Update () {
	
	pos = player.transform.position.x; //gets the position of the player
	
	for( var bear: GameObject in deathbears)
	{
		var posbear : double = bear.transform.position.x;
		var diff : double = Mathf.Round(posbear - pos);
		distancefromdeathbear = diff - pos;
		
	}
	
	distancefromdeathbear = Mathf.Round(distancefromdeathbear);
	
}

function OnGUI(){
GUI.backgroundColor = Color.black;
GUI.contentColor = Color.white;		
GUI.Box (Rect (315,20,200,50), "Nearest Death Bear : " + distancefromdeathbear);
	

}