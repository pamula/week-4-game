// we need 4 crystals
// each crystal should have a random number
// number should be hidden // 
// choose a random number
// when the user clicks on crystals add the numbers
// update the score when each crystal is clicked
// if the sum is more than the random number user looses
// reset or restart the game when user wins or looses
// random number of the game must be between19-120
// each crystal should have a random number 1-12

var random_number;
var win = 0;
var lost= 0 ;
var previous = 0;


var resetAndStart = function(){
	$(".crystals").empty();
	var images=['http://www.soulfulcrystals.co.uk/wp-content/uploads/2013/11/aqua-aura.jpg',

	'http://mysticfamiliar.com/library/crystals/images/dia2.JPG',
	'http://www.treasuremountainmining.com/image/EB0813CARL4.jpg',
	'http://image.made-in-china.com/2f0j00bvPQRBtCsUqV/Crystal-Lotus-Flower-PW-013-.jpg']


	random_number = Math.floor(Math.random()* 120-19)+19 ;
// console.log(random_number);

$("#result").html('Random_Number:' + random_number);

for(var i=0;i<4;i++){
	var random = Math.floor(Math.random() *11) + 1;
	// console.log(random);


	var crystal= $("<div>");

	crystal.attr({"class":'crystal',"data-random":random
});
	crystal.css({
		"background-image":"url('"+images[i] +"')",
	"background-size":"cover"

	});



	$(".crystals").append(crystal);
}

$("#previous").html("Total Score:" + previous);

}
resetAndStart();

$(document).on('click', ".crystal" ,function(){
	var num = parseInt($(this).attr('data-random'));
	previous += num;

	$("#previous").html("Total Score:" + previous);
	



	if(previous >random_number){
		lost--;
		$("#lost").html("you loose" ,lost);
		previous = 0;
		resetAndStart();
	}
	else if(previous === random_number){
		win++;

		$("#win").html("you win" ,win);
		previous = 0;
		resetAndStart();
	}
});





