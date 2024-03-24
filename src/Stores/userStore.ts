import {create} from 'zustand';
import {User} from '../Types';
import { getUser } from '../async/UserRequests';

type UserStoreType = {
    user?: User,
    fetchUser: (token:string) => void,
}

export const UserStore = create<UserStoreType>((set, get)=>({
   
    fetchUser: async (token) => {
        try {
          const response = await getUser(token);
          
          set((prevState) => ({
            ...prevState,
            user: {
              fullname: response.data.fullname,
              email: response.data.email,
              avatar: response.data.avatar,
            },
          }));
        } catch (error) {
          console.error('Error:', error);
          
        }

        console.log('User is set ! ', get())
      },
}));

