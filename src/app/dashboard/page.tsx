import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from 'react'

type Props = {};

const DashboardPage = (props: Props) => {
    return(
        <>
        <div className="grainy min-h-screen">
          <div className="max-w-7xl mx-auto p-10"> 
             <div className="h-14"></div>
             <div className ="flex justify-between  items-center md:flex-row flex-col">
                <div className= "flex items-center">
                    <Link href='/'>
                        <Button>Back</Button>
                    </Link>
                </div>
             </div>
          </div>  
        </div>
        </>
    )
    
};

export default DashboardPage;