//var timer:float;
var powerups : GameObject[];
var counter : double;
var player : CharacterController;

var pickupSound: AudioClip;


	powerups = GameObject.FindGameObjectsWithTag("power_up"); 
	
	for( var pow: GameObject in powerups)
	{
		counter = counter + 1;
	}

//figure out how to make collider work :D
function OnTriggerEnter(other : Collider)
{
	
	if (other.tag == "power_up")
	{
		//print("Collided with" + other.name);
		
		gameObject.GetComponent.<AudioSource>().clip = pickupSound;
		gameObject.GetComponent.<AudioSource>().Play();
		
		Destroy(other.gameObject);
		
		
		//OnGUI();
		
		counter--;
		//print(other.name + " has just been deleted!"); 
		
		
	
		
	}

	
}

/* function OnGUI(){	
GUI.backgroundColor = Color.black;
GUI.contentColor = Color.white;
GUI.Box(Rect(600,20,200,50), "Remaining Power Ups : " + counter);
	
	
} */