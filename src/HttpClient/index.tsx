import axios from 'axios'

export class HttpClient {
    baseUrl;

    constructor(url: string) {
        this.baseUrl = url;
    }

    async get() {
        return await axios.get(`${this.baseUrl}`)
    }
}