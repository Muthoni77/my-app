import Image from "next/image";

// server component 

 const getPostData = async () => {
const res= await fetch ("https://jsonplaceholder.typicode.com/posts")
return res.json();

 };
 const getUserData = async () => {
const res= await fetch ("https://jsonplaceholder.typicode.com/users")
return res.json();

 };
 const getDogData = async () => {
const res= await fetch ("https://dog.ceo/api/breeds/image/random",{
    next: {
        revalidate: 10,
    }
})
return res.json();

 };

 
 
 
 
 export default async function ListOfPosts(){
   
    const [posts,users,dog]= await Promise.all([getPostData(),
        getUserData(),
         getDogData(),]);
    return(
<div> 
     <Image src={dog.message} alt="dog" width={300} height={300}/>
   {posts.map((posts:any)=> {
    return  <p>{posts.title}</p>;
   }
   )}
   <div>
    {users.map((users:any)=>{
        return <p>{users.name}</p>
    })}
   </div>
</div>


    );
}