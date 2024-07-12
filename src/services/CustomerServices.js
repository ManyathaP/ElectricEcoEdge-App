import axios from 'axios'

const CUSTOMER_BASE_REST_API_URL = 'http://localhost:8090/api/v1/customers';

class CustomerServices{

    getAllCustomers(){
        return axios.get(CUSTOMER_BASE_REST_API_URL)
    }

     createCustomer(customer){
        return axios.post(CUSTOMER_BASE_REST_API_URL, customer)
    }

    
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CustomerServices();
