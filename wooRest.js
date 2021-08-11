var axios = require("axios")

const CK = "ck_c6415675388606a4941c512225ca4d90d384e7d0"
const CS = "cs_62f90df1189cfd6ff8d89a3da525b798ea0271d1"

const key = `${CK}:${CS}`

axios({
  method: "get",
  url: "https://kharidpack.com/wp-json/wc/v3/products",
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
