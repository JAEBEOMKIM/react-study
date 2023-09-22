import { useRouter } from "next/router";
// import Header from "@/components/header";
import Description from '@/components/description'

export default function About(){
    const router = useRouter();
    const id = Number(router.query.id);
    return <>
        {/* <Header></Header> */}
        <h1>/pages/sub/[id].js</h1>
        <p>Parameter id: {id}</p>
        <a href="/">/pages/index.js</a>
        <Description></Description>
    </>
}