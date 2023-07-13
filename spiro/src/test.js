function musteryfunction(arr) {
	const res = []
	for(let i = 0; i < arr.length; i+= 1) {
		if(!res.includes(arr[i])){
			res.push(arr[i])
		}
	}
	return res
}

console.log(musteryfunction([5, 7, 11, 8, 10, 8]))