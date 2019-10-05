export interface Venue {
    id: string
    name: string
    location: VenueLocation
    category: VenueCategory[]
    venuePage: { id: string }
}

export interface VenueLocation {
    address: string
    crossStreet: string
    lat: string
    lng: string
    labeledLatLngs: LabeledLatLngs[]
    distance: number
    postalCode: string
    cc: string
    city: string
    state: string
    country: string
    formattedAddress: string[]
}

export interface LabeledLatLngs {
    label: string
    lat: number
    lng: number
}

export interface VenueCategory {
    id: string
    name: string
    pluralName: string
    shortName: string
    icon: {
        prefix: string
        suffix: string
    }
    primary: boolean
}

export interface CustomizedVenue {
    id: string, 
    name: string, 
    url: string, 
    category?: string,
    rating?: number
}


