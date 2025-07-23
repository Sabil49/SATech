import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
	faAngleLeft,
	faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import { FaTwitter,FaFacebookF,FaInstagram } from 'react-icons/fa';
import '../globals.css'

export default function Footer(){
    return(
        <>
        <div className="w-full py-4 text-transparent bg-[#faf6f6]">This is hidden text</div>
        
<div className="w-full px-40 text-white bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:44px_44px]">
    <div className="columns-6 gap-4 py-12">
    <div><Image src="/logo/paystock.png" width={200} height={50} alt="" /></div>
        <div><Image src="/logo/Flutterwave.png" width={200} height={50} alt="" /></div>
        <div><Image src="/logo/amazon.png" width={200} height={50} alt="" /></div>
        <div><Image src="/logo/flipkart.png" width={200} height={50} alt="" /></div>
        <div><Image src="/logo/Cognism.png" width={200} height={50} alt="" /></div>
        <div><Image src="/logo/Fisano.png" width={200} height={50} alt="" /></div>
    </div>

    <div className="pb-1 overflow-auto flex justify-between">
        <div className="flex items-center">
            <span><Image src="/logo.png" width={45} height={45} alt="logo" /></span>
            <span className="font-semibold text-lg ml-2 text-white">SA Tech</span>
        </div>
        <div className="flex items-center">
            <ul className="*:float-left *:ml-8 *:text-sm">
                <li className=" text-white hover:text-gray-200"><a href="">contact@designhub.com</a></li>
                <li className=" text-white hover:text-gray-200 cursor-pointer">Privacy policy</li>
                <li className=" text-white hover:text-gray-200 cursor-pointer">Terms & Agreements</li>
            </ul>
        </div>
    </div>
    <div className=" clear-both overflow-auto pt-3 borde pb-4">
        <div className="float-left w-1/2 text-sm text-white">
        © All rights reserved      
          </div>
        <div className="float-right w-1/2">
            <ul className="*:float-right *:mr-12">
                <li className=" cursor-pointer hover:text-gray-200"><FaFacebookF /></li>
                <li className=" cursor-pointer hover:text-gray-200"><FaTwitter /></li>
                <li className=" cursor-pointer hover:text-gray-200"><FaInstagram /></li>
            </ul>
        </div>
    </div>

</div>
</>
            )
            }