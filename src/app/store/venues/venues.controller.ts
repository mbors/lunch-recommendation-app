import { CoreApiController } from "../core/coreApi.controller";

export default class VenuesController extends CoreApiController {
    private static _instance: VenuesController = new VenuesController()

    constructor() {
        super()
        if (VenuesController._instance) {
            throw new Error('Error: Instantiation failed: Use SingletonClass.getInstance() instead of new.')
        }
        VenuesController._instance = this
    }

    public static getInstance(): VenuesController {
        return VenuesController._instance
    }

    id = 'IRUDNAIHGDV1YEZJHXKYQZHUIVF54GPMU4MK0ABYKBQAU3O2'
    secret = 'EOD5WGZPKQE0W4BA0YJXBMK1SGTPESFOVIEB1L31CIH5LRPY'
    limit = 3
    query = 'lunch'
    date = (new Date()).toISOString().replace(/-/g, '').split('T')[0]

    fetchVenues = async (location: string) => {
        try {
            const queryParams = {
                client_id: this.id,
                client_secret: this.secret,
                query: this.query,
                ...location ? { near: location } : {},
                v: this.date,
                limit: this.limit
            }
            const results = await this.fetchRequest('venues/search', queryParams)
            return results && results.venues
        } catch (e) {
            throw e
        }
    }

    fetchVenueDetails = async (id: string) => {
        try {
            const queryParams = {
                client_id: this.id,
                client_secret: this.secret,
                v: this.date
            }
            const details = (await this.fetchRequest(`venues/${id}`, queryParams)).venue
            return details
        } catch (e) {
            throw e
        }
    }

}