export interface Sub {
    nick:string
    subMonths: number
    avatar: string
    description?: string
  }
  

interface SubApi { 
    username: string
    age: number
    image: string
    lastName: string
} 
 
export interface SubsResponseFromApi {
   users: Array<SubApi>
   total: number
   skip: number
   limit: number
}

  