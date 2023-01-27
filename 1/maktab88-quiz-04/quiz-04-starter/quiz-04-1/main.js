const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
body= document.querySelector("body");

const renderTable = (firstIndex,lastIndex) => {
	tableHead.innerHTML = `
		<tr>
			<th scope="col">No.</th>
			<th scope="col">Tour ID</th>
			<th scope="col">Name</th>
			<th scope="col">Location</th>
			<th scope="col">Price</th>
			<th scope="col">Group Size</th>
			<th scope="col">difficulty</th>
			<th scope="col">duration</th>
			<th scope="col">Ratings Average</th>
			<th scope="col">Ratings Quantity</th>
		</tr>`;
for(let index=firstIndex, index<=last; index++  ){
	

}
	let rowCount = 1;
	for (const tour of tours) {
		tableBody.innerHTML += `
			<tr>
				<th scope="row">${rowCount}</th>
				<td>${tour.id}</td>
				<td>${tour.name}</td>
				<td>${tour.location}</td>
				<td>${tour.price}</td>
				<td>${tour.maxGroupSize}</td>
				<td>${tour.difficulty}</td>
				<td>${tour.duration}</td>
				<td>${tour.ratingsAverage}</td>
				<td>${tour.ratingsQuantity}</td>
			</tr>`;

		rowCount += 1;
	}
};

renderTable();

//handling limit and page
function handleUrlInfo(page,limit){
	tableBody.innerHTML="";
	tableHead.innerHTML="";
	body.append(page);
	firstIndex= (page-1)*limit;
	lastIndex= (firstIndex+limit)-1;

	
}
handleUrlInfo(1,2);