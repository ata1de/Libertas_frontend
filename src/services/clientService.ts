import api from "./api"

export interface ClientType {
    company: string,
    demand: string,
    email: string,
    name: string,
    phone: string
}

const clientService = {
    postCreateClient: async({company, demand, email, name, phone}: ClientType) => {
        const res = await api.post('/', {
            data:{
                company,
                demand, 
                email,
                name, 
                phone
            }
        })

        return res
    }
}