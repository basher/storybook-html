export const fetchData = () => fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json());
