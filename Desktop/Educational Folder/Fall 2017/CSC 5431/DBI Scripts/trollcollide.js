var trollmove : Animation;

trollmove = GetComponent.<Animation>();

function OnTriggerEnter(other : Collider)
{
	
	if (other.name == "Car")
	{
	
		trollmove.Play("Attack_02");
		
	}
}

function OnTriggerExit()
{
	
	trollmove.Play("Run");
}