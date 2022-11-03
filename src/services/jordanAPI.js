const fetchJordan = async () => {
    try {
        // const response = await fetch("http://localhost:3000/jordan");
        const response = await fetch("https://apimocha.com/jordan/store");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export { fetchJordan };
