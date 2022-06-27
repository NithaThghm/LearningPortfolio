const jokeBtn = document.querySelector('.jokeBtn')


// .... Evaluer la blague
var emojis = ['💩','😠','😦','😑','😀','😍'];

$("input").mousemove(function(){
	var i = $(this).val();
	$(".jokeRateEmoji").html(emojis[i]);
});

// fetch("http://192.168.130.140:3000/joke/all")
// .then((response) => response.json())
// .then((data) => {
//     console.log(data)
// });