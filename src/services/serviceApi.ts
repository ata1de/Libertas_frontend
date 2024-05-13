import api from "./api";

export type ServiceType = {
    id: string,
    title: string,
    description: string
}

const serviceService = {
    getFeaturedServices: async() => {
        const res = await api.get("/services").catch((err) => {
            console.log(err)

            return err.response
        })

        console.log(res)
        return res
    }
}

export default serviceService