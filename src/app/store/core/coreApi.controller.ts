import axios from "axios";
import * as _ from 'lodash';

export abstract class CoreApiController {
    axios: any;
    constructor() {
        this.axios = axios.create();
    }

    baseUrl = ''

    /**
     *
     * @param path
     * @param queryParameters
     */
    async fetchRequest(path: string): Promise<any> {
        try {
            const res = await this.axios.get(`${this.baseUrl}${path}`);
            return _.get(res, 'data', []);
        } catch (error) {
            throw new Error(error)
        }
    }
}
