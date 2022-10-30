$(document).ready(function () {
	let amen_list = [];
	let amenities = {};
	$('.amenities-list').change(function (event) {
		let amenityId = $(this).attr('data-id');
		let amenityName = $(this).attr('data-name');

		if (event['target'][checked]) {
			amenities[amenityId] = amenityName;
			amen_list.push(amenityName)

		} else {
			delete amenities[amenityId];
			amen_list.splice(amen_list.indexOf(amenityName), 1);
		}
		$('.amenities h4').text(amen_list);
	});

	$.ajax({
		type: "GET",
		url: "http://0.0.0.0:5001/api/v1/status/",
		success: function (data) {
			console.log(data);
			$("#api-status").addClass("available");
		},
		error: function (data, textStatus, errorThrown) {
			console.log(data);
			console.log(textStatus);
			console.log(errorThrown);
		},
		dataType: "json",
	});
});

