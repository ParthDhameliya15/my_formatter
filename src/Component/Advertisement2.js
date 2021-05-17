import React from 'react'
import { Bling as GPT } from "react-gpt";
GPT.enableSingleRequest();
// const path = "/41916316/https:////whatsdirect.com.Banner";
const sloat = [
    { viewport: [0, 0], slot: [300, 250] },
    { viewport: [750, 0], slot: [[160, 600], [300, 250]] },
    { viewport: [1050, 0], slot: [[160, 600], [160, 600], [120, 600], [120, 240]] }
];

const Advertisement2 = () =>{

    return(
        <>
            <div className="site-card-border-less-wrapper add2" style={{marginRight: "auto",marginLeft: "20px"}}>
                {/*<Card title="Card title" >*/}
                {/*</Card>*/}
                {/*<div id="div-gpt-ad-1612775480075-0 text-center" style={{textAlign: "center", marginBottom: "10px", position: 'sticky', top: '10px'}}>*/}
                {/*    <GPT adUnitPath={path}*/}
                {/*         sizeMapping={sloat}*/}
                {/*    />*/}
                {/*</div>*/}
            </div>
        </>
    )
}
export default Advertisement2