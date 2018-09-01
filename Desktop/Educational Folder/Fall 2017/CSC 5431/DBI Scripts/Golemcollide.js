var golemove : Animation;

golemove = GetComponent.<Animation>();

function OnCollisionEnter(hit : Collision)
{
	if(hit.collider.gameObject.tag == "Player")
	{
		golemove.Play("hpunch"); //triggers the high punch animation
		//have the golem wait a few seconds before returning to running
		//make a smoother transition between hitting and running
	}
	
}

function OnCollisionExit()
{
	golemove.Play("run"); //switches back to the running animation
	
}
