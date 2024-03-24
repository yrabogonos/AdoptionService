import axios from "axios";

type TypeRegisterData = {
    fullname: string,
    email: string,
    password: string
}
type TypeLoginData = Omit<TypeRegisterData, 'fullname'>;

export const reqRegister = async (registerData:TypeRegisterData) => {
   
    return new Promise((resolve, reject) =>
        axios.post('http://localhost:4444/auth/register', registerData)
        .then((response) => {
           
            setTimeout(()=>{
                resolve(response);
            }, 1000)
        })
        .catch((err) =>{reject(err)})
     );
}
export const reqLogin = async (loginData:TypeLoginData) => {
   
    return new Promise((resolve, reject) =>
        axios.post('http://localhost:4444/auth/login', loginData)
        .then((response) => {
           
            setTimeout(()=>{
                resolve(response);
            }, 1000)
        })
        .catch((err) =>{reject(err)})
     );
}

export const getUser = async (jwtToken:string) => {
    const headers = {
        Authorization: `Bearer ${jwtToken}`,
    };
    return axios.get('http://localhost:4444/myinfo', {headers: headers});
        
}


export const sendEmail = async (jwtToken:string) => {
    const headers = {
        Authorization: `Bearer ${jwtToken}`,
    };
    return axios.post('http://localhost:4444/auth/activate', {}, {headers: headers});
        
}

export const updateStatus = async (jwtToken:string) => {
    const headers = {
        Authorization: `Bearer ${jwtToken}`,
    };
    return axios.patch('http://localhost:4444/updateStatus', {}, {headers: headers});
        
}