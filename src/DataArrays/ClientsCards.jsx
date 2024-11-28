import AxisMall from "../../public/Images/ClientPage/Axis-mall-600x528.jpg";
import PasAss from "../../public/Images/ClientPage/Pak-Associates-1-400x352.jpg";
import Bitoreal from "../../public/Images/ClientPage/bitoreal-1-400x352.png";
import MulAss from "../../public/Images/ClientPage/Multiply-Associates-400x352.jpg";
import AlpaOne from "../../public/Images/ClientPage/AlpaOne-400x352.jpg";
import AskMarkt from "../../public/Images/ClientPage/Askari-marketing-400x352.jpg";
import SkyMount from "../../public/Images/ClientPage/Sky-Mount-Hotel-400x352.jpg";
import AshMarkt from "../../public/Images/ClientPage/Ashiana-Marketing-400x352.jpg";
import YardMarkt from "../../public/Images/ClientPage/as-400x352.jpg";
import ShikaSweet from "../../public/Images/ClientPage/Shikarpuri-sweets-400x352.jpg";
import e_vapeKing from "../../public/Images/ClientPage/e-Vape-King-400x352.jpg";
import MallIslm from "../../public/Images/ClientPage/Mall-of-Islamabad-400x352.jpg";
import LonelDubai from "../../public/Images/ClientPage/Lonely-Dubai-400x352.jpg";
import VlsReality from "../../public/Images/ClientPage/VLS-Realty-400x352.jpg";
import MulPropDubai from "../../public/Images/ClientPage/Multiply-Properties-Dubai-1-400x352.jpg";
import Al_Hadaf from "../../public/Images/ClientPage/Al-Hadaf-400x352.jpg";
import Saatir from "../../public/Images/ClientPage/Saatir-400x352.jpg";
import TierraAss from "../../public/Images/ClientPage/Tierra-Associates-400x352.jpg";
import MdAss from "../../public/Images/ClientPage/MD-Associates-400x352.jpg";
import CapMarkt from "../../public/Images/ClientPage/Capital-City-400x352.jpg";
import JcMarkt from "../../public/Images/ClientPage/JC-Marketing-400x352.jpg";
import EmBuilders from "../../public/Images/ClientPage/emirates_developers-400x352.jpg";
import AwazGroup from '../../public/Images/ClientPage/radio_awaz-400x352.jpg'
import HamFoods from "../../public/Images/ClientPage/hamdaan_foodsjpg-400x352.jpg";
import AraziAss from "../../public/Images/ClientPage/arazi-400x352.jpg";
import MeritShoes from "../../public/Images/ClientPage/Meriet-Shoes-min-400x352.jpg";
import EurAsisClothing from "../../public/Images/ClientPage/euroasia-min-400x352.jpg"
import Kadbaby from "../../public/Images/ClientPage/Kaad-Baby-min-400x352.jpg";
import BuzzFm from "../../public/Images/ClientPage/buzz-fm-min-400x352.jpg";
import VoneAss from "../../public/Images/ClientPage/V-One-min-400x352.jpg"; 
import ValenciaAdvert from "../../public/Images/ClientPage/valencia-advertising-min-400x352.jpg";
import ImranCo from '../../public/Images/ClientPage/Imran-and-Co-min-400x352.jpg';
import { useState } from "react";


import React from 'react'


export const clients = [
    {
       image : AxisMall,
       name : "Axis Mall",
       para : "Digital Marketing"
    },

    {
        image : PasAss,
        name : "Pak Associates",
        para : "Digital Marketing"
     
    },

    {
        image: Bitoreal,
        name : "Bitoreal",
        para : "Digital Marketing"
    
    },
    {
        image : MulAss,
        name : "Multiply Associates",
        para : "Digital Marketing"
    },
    {
        image : AlpaOne,
        name : "AlpaOne",
        para : "Digital Marketing,Web Design",
    },
    {
        image : AskMarkt,
        name : "Askari Marketing",
        para : "Digital Marketing"
    },
    {
        image: SkyMount,
        name : "Sky Mount Hotel",
        para : "Digital Marketing"
    },
    {
        image: AshMarkt,
        name : "Ashiana Marketing",
        para : "Digital Marketing"
    },
    {
        image: YardMarkt,
        name : "Yard Marketing",
        para : "Digital Marketing"
    },

    {
        image : ShikaSweet,
        name : "Shikarpuri Sweets",
        para : "Digital Marketing"
    },
    {
        image : e_vapeKing,
        name : "e-Vape King",
        para : "Digital Marketing"
    },
    {
        image : MallIslm,
        name : "Mall of Islamabad",
        para : "Digital Marketing"
    },
    {
        image : LonelDubai,
        name : "Lonely Dubai",
        para : "Digital Marketing"
    },
    {
        image : VlsReality,
        name : "VLS Reality",
        para : "Digital Marketing"
    },
    {
        image: MulPropDubai,
        name : "Multiply Properties Dubai",
        para : "Digital Marketing"
    },
    {
        image : Al_Hadaf,
        name : "Al-Hadaf",
        para : "Digital Marketing"
    },
    {
        image : Saatir,
        name : "Saatir",
        para : "Digital Marketing"
    },
    {
        image : TierraAss,
        name : "Tierra Associates",
        para : "Digital Marketing"
    },
    {
        image : MdAss,
        name : "MD Associates",
        para : "Digital Marketing"
    },
    {
        image : CapMarkt,
        name : "Capital Marketing",
        para : "Digital Marketing,WebDesign"
    },
    {
        image: JcMarkt,
        name : "JC Marketing",
        para : "Digital Marketing,Web Design"
    },
    {
        image : EmBuilders,
        name : "Emirates Builders & Developers Islamabad",
        para : "Digital Marketing,Web Design"
    },
    {
        image : AwazGroup,
        name : "Awaz Group of Radios",
        para : "Mobile App Development"
    },
    {
        image : HamFoods,
        name : "Hamdaan Foods",
        para : "Digital Marketing, Web Design"
    },
    {
        image : AraziAss,
        name : "Arazi Associates, Islamabad",
        para : "Web Design"
    },
    {
        image : MeritShoes,
        name : "Meriet Shoes",
        para : "Digital Marketing,Web Design"
    },
    {
        image : EurAsisClothing,
        name : "EuroAsisa Clothing",
        para : "Digital Marketing,Web Design"
    },
    {
        image : Kadbaby,
        name : "KadBaby",
        para : "Digital Marketing,Web Design"
    },
    {
        image : BuzzFm,
        name : "Buzz FM Radio Group",
        para : "Mobile App Development"
    },
    {
        image : VoneAss,
        name : "VOne Associates Islamabad",
        para : "Digital Marketing"
    },
    {
        image : ValenciaAdvert,
        name : "Valencia Advertising, Dubai",
        para : "Digital Marketing"
    },
    {
        image : ImranCo,
        name : "Imran and Co",
        para : "Digital Marketing,Web Design"
    }





]





