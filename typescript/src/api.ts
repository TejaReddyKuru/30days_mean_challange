async function fetchData() : Promise<void>{
    const randomId: number = Math.floor(Math.random() * 10)+2;
    console.log("Random User ID:", randomId);
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${randomId}`);
        if(!response.ok){
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log("Fetched User:");
        console.log(data);
        console.log("Name:", data.name);
        console.log("Email:", data.email);
        console.log("City:", data.address.city);
    }
    catch(error){
        console.error("Error:", error);
    }
}

fetchData();