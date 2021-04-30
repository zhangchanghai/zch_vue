import {get,post} from '@/api/method';

export const fetchData = params => get('./table.json',params);

const testGet = p => get('test/test2',p);
const testPost = p => post('test/test3',p);

export default {
    testGet,
    testPost
}