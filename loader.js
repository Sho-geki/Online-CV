var request = new XMLHttpRequest()

request.open('GET', 'https://api.github.com/users/Sho-geki/repos', true)

request.onload= function(){
	var data = JSON.parse(this.response);


	var statusHTML = '';

	$.each(data, function(i, status){
		statusHTML += '<tr>';
		statusHTML += '<td>' + status.id + "..." + '</td>;'
		statusHTML += '<td>' + status.name + "..." + '</td>;'
		statusHTML += '<td>' + status.html_url + "..." + '</td>;'
		statusHTML += '<td>' + status.language  + '</td>;'

		statusHTML += '</tr';
	});

	$('tbody').html(statusHTML)
}

request.send();


var request = new XMLHttpRequest()

request.open('GET', 'https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats', true)

request.onload = function()
{
  var data = JSON.parse(this.response);

  var covid_stats = '';
  

  $.each(data, function(i, status)
  {
    covid_stats += '<sr>' + "<br>";
    
    covid_stats += '<sd>' + status.currently_infected  + '</sd>'  + "...........";

    covid_stats += '<sd>' + status.total_cases + '</sd>';
    
    covid_stats += '</sr>';
    
  });

  $('sbody').html(covid_stats);

}

request.send();