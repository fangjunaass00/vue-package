import axios from 'axios';

const baseUrl = 'https://eleme.herdsric.com/zybank/';
let axiosLink = {
    getUserInfo: baseUrl + 'getUserinfo.do',
};

function axiosFun(url, callback) {
    axios.get(axiosLink[url]).then(function(res) {
        callback(res);
    });
}

export default axiosFun;
