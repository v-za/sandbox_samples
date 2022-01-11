const request = require('request');
// place access token here
const headers = {'Authorization': `Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjYzNmVmOWY5YzM3NzRlNjVhNDc4NDBlMGE2OWNjYWM4In0.eyJleHAiOjE2NjY3MjAyNTksIm5iZiI6MTYzNTE4NDI1OSwiaXNzIjoiQVVUSCIsImlhdCI6MTYzNTE4NDI1OSwiZ3JwcyI6WyJQVUIiXSwiYXVkIjpbIlJQUyJdLCJybHMiOlsiUk5EVVNSIl0sImNpZCI6IjBqX2N0cFF3UW9YT0NkLVhaeEZvRiIsImR2YyI6Ik5BIiwianRpIjoiOTc1NTlmMDAxODBhNDU5MzlhNWEzMDg5NDRmNTU4MTkiLCJ0eXAiOjN9.BUxcYIMidJkdL4_S1o-70VVUXwjqvBoytml11ccoWJ-VUmNsWm7sQbMg-59-EpCQNrVFGa24CSu4NnvHeZHgaA`}
request('https://api-eus.qrypt.com/api/v1/quantum-entropy', {json : true, headers}, (err, res, body) => {
    if (err) { return console.log('test'); }
    // response body with array of random
    console.log(body); 
})