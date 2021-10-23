```javascript
var axios = require('axios')

const CK = 'ck_xxx'
const CS = 'cs_xxx'


axios({
  method: 'get',
  url: 'https://domain.com/wp-json/wc/v3/products',
  headers: {
    Authorization: `Basic ` + Base64.encode(`${CK}:${CS}`),
  },
})

const getProducts = async () => {
  const res = await axios.get('https://domain.com/wp-json/wc/v3/products', {
    headers: {
      Authorization: `Basic ` + Base64.encode(`${CK}:${CS}`),
    },
  })
}
```
