import instance from '../utils/http'

const base = {
    sq: 'https://xxxx111111.com/api/v1',
    bd: 'http://localhost:8080/'
}
export const apiAddress = data => post('api/v1/users/my_address/address_edit_before', data);
