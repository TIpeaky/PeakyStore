export interface IUser  {
    id : string
    cpf : string
    name : string
    email : string
    password : string
    gender: string
    genderList : [
        {
            id : string
            genderEnum : string
        }
    ]
    birthDate : string
    notification : string
} 