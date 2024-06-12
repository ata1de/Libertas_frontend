import api from "./api"

export interface ClientType {
    name: string,
    email: string,
    phone: string
    company: string,
    demand: string,
}

const clientService = {
    postCreateClient: async(resume: ClientType) => {
        const res = await api.post('/', resume).catch((err) => {
            if (err.response.status = 400) {
                console.log(err)
                return err.response
            }

            console.log(err)
            return err
        })

        return res  
    },

    postSendEmail: async(user: ClientType) => {
        const res = await api.post('/email', user ).catch((err) => {
            if (err.response.status = 400) {
                console.log(err)
                return err.response
            }

            console.log(err)
            return err
        })

        return res
    }
}

export default clientService