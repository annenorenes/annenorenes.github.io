async function fetchData() {
    const response = await fetch('http://localhost:3000/api/fjell_info');
    const data = await response.json();
    console.log(data);
    
    
    
}

fetchData();