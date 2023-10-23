// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้

let alldata
let newUsers = []
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    alldata = data
   })
  .then(() => {
    for(let i in alldata){
      newUsers.push(alldata[i].name)
    }
   })
   .then(()=>{
    console.log(newUsers)
   })

   

   
