import axios from "axios";

export async function getData() {
    const data = await axios.get('https://script.google.com/home/projects/1yMj7JSULbrYsphfun0dcTWeuYhATi5gbhbY81jFdTJ3btbzQESiwxPOW/edit?pli=1').then(r => r.data);

    return data;
}