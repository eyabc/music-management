import axios from 'axios';
import env from './env';

export default function axiosClient() {
    return axios.create({
        baseURL: `${ env.DEV_RDS_HOST }/api`,
        timeout: 1000 * 60 * 5,
    });
}