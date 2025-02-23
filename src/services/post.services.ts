import { axiosInstance } from '../api';

export interface postData {
  firstName: string;
  lastName: string;
  dob: string;
  password: string;
  gender: boolean;
}

class Post {
  postData = async (data: postData): Promise<{ data: postData }> => {
    return await axiosInstance.post('/posts', data);
  };
}

export default new Post();
