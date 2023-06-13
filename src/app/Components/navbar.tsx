import Link from "next/link";

export default function Navbar(){
    return(
<div> 
    <Link href="/">Home</Link>
    <Link href="/About/us">About us</Link>
    <Link href="/About/someone">About someone else</Link>
    <Link href="/About">About</Link>
    <Link href="/listofposts">Posts</Link>
</div>
    );
}