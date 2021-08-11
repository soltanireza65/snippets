```
var axios = require("axios")

const CK = "ck_xxx"
const CS = "cs_xxx"

const key = `${CK}:${CS}`

axios({
  method: "get",
  url: "https://domain.com/wp-json/wc/v3/products",
  headers: {
    // Authorization: `Basic ${Base64.encode(`${CK}:${CS}`)}`,
    // Authorization: `Basic ${Base64.encode(key)}`,
    Authorization: `Basic ` + Base64.encode(`${CK}:${CS}`),
  },
})
  .then(function (response) {
    console.log(JSON.stringify(response.data))
  })
  .catch(function (error) {
    console.log(error)
  })

const getProducts = async () => {
  const response = await axios.get(
    "https://kharidpack.com/wp-json/wc/v3/products"
  )
}
```