#pragma strict

var timer:float;
var powerups : GameObject[];
var counter : double;
var pickupSound: AudioClip;
var trollanim : Animation;
function Start(){
	
	timer = 0.0f;
	GameObject.Find("grats").GetComponent.<UI.Text>().text = "";

}
	
function Update(){
		
		timer = timer + Time.deltaTime;
	}



	powerups = GameObject.FindGameObjectsWithTag("power_up"); //locates the deathbear
	
	for( var pow: GameObject in powerups)
	{
		counter = counter + 1;
	}


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
	
	if(other.tag == "Troll")
	{
		
		trollanim.Play("Die");
	}

	if (counter == 0)
	{
		
		
			GameObject.Find("grats").GetComponent.<UI.Text>().text = "You Made It!!";
		
		timer = 0.0f;
		
		 Application.LoadLevel("Backstory continued");
		

		
	}
}





function OnGUI(){	
GUI.backgroundColor = Color.black;
GUI.contentColor = Color.white;
GUI.Box(Rect(600,20,200,50), "Remaining Power Ups : " + counter);
	
	
}

/* var powerup:GameObject;
var count:int;

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.CompareTag("power_up"))
	{
	
			/*if (hit.collider.tag == "power_up")
		{
		print("Collided with" + other.collider.name);
		
		Destroy(other.collider.gameObject);
		
		print(other.collider.name + " has just been deleted!"); 
		
		*/
		
	/*	count++;
		Destroy(other.gameObject);
		
	}
}

/*function OnGUI()
{
	GUI.Label(new Rect(100,100,100,100),"Power ups left: "+count);
}

 */


