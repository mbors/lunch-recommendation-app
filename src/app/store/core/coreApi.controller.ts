import axios from "axios";
import * as _ from 'lodash';

export abstract class CoreApiController {
    axios: any;
    constructor() {
        this.axios = axios.create();
    }

    baseUrl = 'https://api.foursquare.com/v2/'

    protected getHeaders(queryParameters?: { [key: string]: string | number | boolean }): any {
        return {
            headers: {
                "Content-Type": "application/json"
            },
            ...queryParameters ? { params: queryParameters } : {}
        };
    }

    /**
     *
     * @param path
     * @param queryParameters
     */
    async fetchRequest(path: string, queryParameters?: { [key: string]: string | number | boolean }): Promise<any> {
        try {
            const res = await this.axios.get(`${this.baseUrl}${path}`, this.getHeaders(queryParameters));
            return _.get(res, 'data.response', []);
        } catch (error) {
            throw new Error(error)
        }
    }
}
