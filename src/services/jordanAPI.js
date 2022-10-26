const fetchJordan = async () => {
    try {
        const response = await fetch("https://apimocha.com/jordan/sneakers");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export { fetchJordan };
