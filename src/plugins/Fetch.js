export default  {
    get: function (url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    if(data.code == "200") {
                        resolve(data)
                    }else{
                        throw onerror
                    }
                })
                .catch(err => reject(err))

        })
    },

    post: function (url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(json => resolve(JSON.parse(json.d)))
                .catch(err => reject(err))
        })
    },

    put: function (url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))

        })
    },

    delete: function (url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve('删除成功'))
                .catch(err => reject(err))

        })
    }
}

// var url = 'http://xx.asmx/xx';
//
// var param = {
//     xx: xx,
//     xx: xx,
// };
// http.post(url, param)
//     .then(data => console.log(data.msgs))
//     .catch(err => console.log(err))
// //.catch(err => console.log(请求失败))