import axios from 'axios';

export default class PostService {
    static async getAll() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // переменная для помещение результата выполнение запроса
            return response.data;
        } catch (error) {
            console.error('Error!')
        }
    }
}