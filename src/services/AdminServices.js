import axios from 'axios';

const ADMIN_BASE_REST_API_URL = 'http://localhost:8090/api/v1/admins';

class AdminServices {
    getAllAdmins() {
        return axios.get(ADMIN_BASE_REST_API_URL);
    }

    createAdmin(admin) {
        return axios.post(ADMIN_BASE_REST_API_URL, admin);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AdminServices();

