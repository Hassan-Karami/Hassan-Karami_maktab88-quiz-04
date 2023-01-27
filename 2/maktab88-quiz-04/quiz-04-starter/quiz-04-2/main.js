const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
let newUserData=[...tours];

const renderTable = () => {
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
//render sort
// function sort(){
// 	let headerName= window.location.search;
	
	

// }
// sortBy(2);
function sortBy(headerName){
	tableBody.innerHTML="";
	tableHead.innerHTML="";
	tours= tours.sort((a,b)=>{
		current=a[headerName].toString().toLowerCase();
		next= b[headerName].toString().toLowerCase();
		
		return current.localeCompare(next,undefined,{numeric:true,sensivity:'base'});
		console.log();

	})
	renderTable();
	
}
sortBy("location");