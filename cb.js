function first()
{
	console.log("First");
	return;
}
function second(a)
{
	console.log("second = " + a);
	return;
}
function third()
{
var sum = 0;
setTimeout(function(){sum =100; second(sum);},5000);



return;

}

first();
third();



