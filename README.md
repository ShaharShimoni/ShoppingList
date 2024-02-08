# ShoppingList

ShoppingList includes two screens- <br />
shopping list screen and order summary screen <br />
<br />
First server side is written in node, <br />
Second server side in C# <br />
<br />
Categories list displayed on the first page is extracted from MySql DB, <br />
DB on cloud, there is no need to connect and set it up locally. <br /> <br />
Fisrt screen:
<br />
<br />
<img width="952" alt="image" src="https://github.com/ShaharShimoni/ShoppingListFix/assets/57682267/78837bbc-7ec1-4184-944b-c4ecb2f06ffe">
<br />
<br />
On phone: 
<br />
<br />
<img width="223" alt="image" src="https://github.com/ShaharShimoni/ShoppingListFix/assets/57682267/d49e1996-51ab-4942-9952-2a101c5dd213">
<br />
<br />
On second screen when clicking on confirm order button, <br />
order is being saved on DB. <br /> <br />
<img width="957" alt="image" src="https://github.com/ShaharShimoni/ShoppingListFix/assets/57682267/356c7014-325f-4526-b04e-2a3f34fd48b6">
<br />
On phone:
<br />
<br />
<img width="217" alt="image" src="https://github.com/ShaharShimoni/ShoppingListFix/assets/57682267/fe2d3712-28c8-4463-af34-a749367c3e34">
<br />
<br />
DB connection (if needed): <br />
host: "mysql-3b86ab43-shopping-list.a.aivencloud.com", <br />
port: "12298", <br />
database: "ShoppingList", <br />
user: "avnadmin", <br />
password: "AVNS_2YhLIfOzajVuSGvILuh" <br />
<br />
<br />

## Installation

git clone <br />
`cd ShoppongList` <br />
`npm run init` <br />
<br />
open 3 terminals <br />
run: <br />
`npm run start:be`
`npm run start:beNet`
`npm run start:fe`
