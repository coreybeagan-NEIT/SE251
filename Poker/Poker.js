$(document).ready(function(){
	var start = 6;
	var end = 22;
	var table = "<table id='myTable'>";
	
	for(var i = 0;i < 24;i++){
		if(i < start || i > end){
			table += "<tr><td class='hour Grey'>" + i + "</td></tr>";
		}else{
			table += "<tr><td class='hour'>" + i + "</td></tr>";
		}
	}
	
	table += "</table>";
	
	$('#planner').html(table);
	
	$('#yes').click(function(){
		$('#myTable td').addClass('Green');
		$('#myTable td').removeClass('Red');
	});
	
	$('#no').click(function(){
		$('#myTable td').addClass('Red');
		$('#myTable td').removeClass('Green');
	});
	
	$('#myTable td').on("click",function(){
		var cell = $(this);
		if(cell.hasClass('Green')){
			cell.removeClass('Green');
			cell.addClass('Red');
		}
		else if(cell.hasClass('Red')){
			cell.removeClass('Red');
		}
		else{
			cell.addClass('Green');
		}
	});
	
});