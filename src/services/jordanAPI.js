const fetchJordan = async () => {
    try {
        const response = await fetch("./services/jordan.json");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export { fetchJordan };
