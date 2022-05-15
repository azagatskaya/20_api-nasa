// fetch
fetch("https://api.nasa.gov/techtransfer/patent/?engine&api_key=l3fZKzPRXQzzajSKDieAwM8yEn5yfrctdvBqPZeN")
	.then(response => response.json())
	.then(obj => {
		const data = obj.results;
		const container = document.querySelector('.container');
		for (let arr of data) {

			container.innerHTML += `<div class="item item-1">
			<img src="${arr[10]}" alt="${arr[1]}">
			<div class="title">${arr[1]}</div>
			<div class="type">${arr[5]}</div>
			<div class="text">${arr[2]}</div>
			</div>`;
		}
	})
	.catch(error => console.log(error));