document.addEventListener('DOMContentLoaded', function() {
    fetchData(); // Fetch data when the page loads

    function fetchData() {
        fetch('dashboard.jsp')
            .then(response => response.text())
            .then(data => {
                document.getElementById('dashboard').innerHTML = data;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
});
