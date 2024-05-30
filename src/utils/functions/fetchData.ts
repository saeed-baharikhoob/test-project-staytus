export const fetchData = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    const data = await response.json();
    if (data.next) {
        return data.results.concat(await fetchData(data.next));
    }

    return data.results;
};
