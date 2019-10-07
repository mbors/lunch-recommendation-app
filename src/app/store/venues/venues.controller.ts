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

    id = 'YVBNFWOWOLWI4PGDMYBHD1F53LXUUHNG0NLA5UVSIIMBCSZK'
    secret = 'ZDVXTWURZSOHM4VBJABYYD2IBX1MWPXXT2OVRAIAJQQ4WVXZ'
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