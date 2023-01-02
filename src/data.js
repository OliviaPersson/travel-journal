import geirangerfjordImage from "./images/geirangerfjord.png";
import mountFujiImage from "./images/mount-fuji.png";
import sydneyOperaHouseImage from "./images/sydney-opera-house.png";

const travelData = [
  {
    _id: "6904afc7-0cd3-4f04-ae73-062afd5444ac",
    title: "Mount Fuji",
    location: "Japan",
    googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
    startDate: "12 Jan, 2021",
    endDate: "24 Jan, 2021",
    description:
      "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    imageUrl: mountFujiImage,
  },
  {
    _id: "83dfff62-523d-4a48-8e56-4deeb55dc983",
    title: "Sydney Opera House",
    location: "Australia",
    googleMapsUrl:
      "https://www.google.com/maps/place/Sydneys+operahus/@-33.8567799,151.2131027,17z/data=!3m2!4b1!5s0x6b12ae67d234a27f:0xd6d4e9380ca1e32f!4m5!3m4!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967",
    startDate: "27 May, 2021",
    endDate: "8 Jun, 2021",
    description:
      "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
    imageUrl: sydneyOperaHouseImage,
  },
  {
    _id: "6363b344-f265-4edb-81f4-880c58670123",
    title: "Geirangerfjord",
    location: "Norway",
    googleMapsUrl:
      "https://www.google.com/maps/place/Geirangerfjorden/@62.1049112,7.0050027,12z/data=!3m1!4b1!4m5!3m4!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940816",
    startDate: "01 Oct, 2021",
    endDate: "18 Nov, 2021",
    description:
      "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
    imageUrl: geirangerfjordImage,
  },
];

export function getTravelData() {
  return travelData;
}
