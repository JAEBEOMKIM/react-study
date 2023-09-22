import Link from "next/link";
import { ReactNode } from "react";

type HeaderCustomProps = {children: ReactNode};

export default function HeaderCustom ({children}:HeaderCustomProps){

    return(
        <>
            <div style={{border:'5px solid black'}}>
            <Link href={"/customMenu"}>GO customMenu</Link>
            </div>
            <br></br><br></br>
            <div>{children}</div>
        </>
    )

}