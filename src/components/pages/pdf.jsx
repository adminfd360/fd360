import { Tilt } from "react-tilt";
import t31p from "../../assets/pdf/t31p.pdf";
import t31p_img from "../../assets/pdf/t31p.png";
import w70b from "../../assets/pdf/w70b.pdf";
import w70b_img from "../../assets/pdf/w70b.png";
import Yealink_T31_T31P_T31G_QSG from "../../assets/pdf/Yealink_T31_T31P_T31G_QSG.pdf";
import Yealink_T31_T31P_T31G_QSG_img from "../../assets/pdf/Yealink_T31_T31P_T31G_QSG.png";
import w60p_img from "../../assets/pdf/w60p.png";
import w60p from "../../assets/pdf/w60p.pdf";
import t54w from "../../assets/pdf/t54w.pdf";
import t54w_img from "../../assets/pdf/t54w.png";
import w76p from "../../assets/pdf/w76p.pdf";
import w76p_img from "../../assets/pdf/w76p.png";
import t53w from "../../assets/pdf/t53w.pdf";
import t53w_img from "../../assets/pdf/t53w.png";
import lorex_e841ca_img from "../../assets/pdf/lorex_e841ca.png";
import lorex_e841ca from "../../assets/pdf/lorex_e841ca.pdf";
import Lorex_E841CA_with_cover from "../../assets/pdf/Lorex_E841CA_with_cover.pdf";
import Lorex_E841CA_with_cover_img from "../../assets/pdf/Lorex_E841CA_with_cover.png";
import Lorex_without_cover from "../../assets/pdf/Lorex_without_cover.pdf";
import Lorex_without_cover_img from "../../assets/pdf/Lorex_without_cover.png";
import Yeastar_P_Series from "../../assets/pdf/Yeastar_P_Series.pdf";
import Yeastar_P_Series_img from "../../assets/pdf/Yeastar_P_Series.png";
import SMS_MMS from "../../assets/pdf/SMS_MMS.pdf";
import SMS_MMS_img from "../../assets/pdf/SMS_MMS.png";
import Wireless_Phones from "../../assets/pdf/Wireless_Phones.pdf";
import Wireless_Phones_img from "../../assets/pdf/Wireless_Phones.png";
import Revised_Standard from "../../assets/pdf/Revised_Standard.pdf";
import Revised_Standard_img from "../../assets/pdf/Revised_Standard.png";
import VOIP_HD_STANDARD_WITH_WIRELESS_PHONES from "../../assets/pdf/VOIP_HD_STANDARD_WITH_WIRELESS_PHONES.pdf";
import VOIP_HD_STANDARD_WITH_WIRELESS_PHONES_img from "../../assets/pdf/VOIP_HD_STANDARD_WITH_WIRELESS_PHONES.png";
import Standard_VoIP_HD_Standard_Phones from "../../assets/pdf/Standard_VoIP_HD_Standard_Phones.pdf";
import Standard_VoIP_HD_Standard_Phones_img from "../../assets/pdf/Standard_VoIP_HD_Standard_Phones.png";
import VoIP_HD_Microsoft_Teams_Phones from "../../assets/pdf/VoIP_HD_Microsoft_Teams_Phones.pdf";
import VoIP_HD_Microsoft_Teams_Phones_img from "../../assets/pdf/VoIP_HD_Microsoft_Teams_Phones.png";
import Web_Services_SEO from "../../assets/pdf/Web_Services_SEO.pdf";
import Web_Services_SEO_img from "../../assets/pdf/Web_Services_SEO.png";
import IVRP_Annual from "../../assets/pdf/IVRP_Annual.pdf";
import IVRP_Annual_img from "../../assets/pdf/IVRP_Annual.png";
import Local_SEO from "../../assets/pdf/Local_SEO.pdf";
import Local_SEO_img from "../../assets/pdf/Local_SEO.png";
import Halloween from "../../assets/pdf/Halloween.pdf";
import Halloween_img from "../../assets/pdf/Halloween.png";
import Full_Services from "../../assets/pdf/Full_Services.pdf";
import Full_Services_img from "../../assets/pdf/Full_Services.png";
import Services from "../../assets/pdf/Services.pdf";
import Services_img from "../../assets/pdf/Services.png";
import Web_Hosting from "../../assets/pdf/Web_Hosting.pdf";
import Web_Hosting_img from "../../assets/pdf/Web_Hosting.png";
import WEBSITE_SERVICES from "../../assets/pdf/WEBSITE_SERVICES.pdf";
import WEBSITE_SERVICES_img from "../../assets/pdf/WEBSITE_SERVICES.png";
import MULTI_FUNCTIONAL_PRODUCTS from "../../assets/pdf/MULTI_FUNCTIONAL_PRODUCTS.pdf";
import MULTI_FUNCTIONAL_PRODUCTS_img from "../../assets/pdf/MULTI_FUNCTIONAL_PRODUCTS.png";
import MANAGED_NETWORK_SERVICES from "../../assets/pdf/MANAGED_NETWORK_SERVICES.pdf";
import MANAGED_NETWORK_SERVICES_img from "../../assets/pdf/MANAGED_NETWORK_SERVICES.png";
import CYBER_SECURITY from "../../assets/pdf/CYBER_SECURITY.pdf";
import CYBER_SECURITY_img from "../../assets/pdf/CYBER_SECURITY.png";
import COMMUNICATION_SERVICES from "../../assets/pdf/COMMUNICATION_SERVICES.pdf";
import COMMUNICATION_SERVICES_img from "../../assets/pdf/COMMUNICATION_SERVICES.png";

const PDF = () => {
  const pdfs = [
    { id: 1, img: t31p_img, path: t31p, name: "t31p" },
    { id: 2, img: w70b_img, path: w70b, name: "w70b" },
    {
      id: 3,
      img: Yealink_T31_T31P_T31G_QSG_img,
      path: Yealink_T31_T31P_T31G_QSG,
      name: "Yealink T31 T31P T31G QSG",
    },
    {
      id: 4,
      img: w60p_img,
      path: w60p,
      name: "w60p",
    },
    {
      id: 5,
      img: w76p_img,
      path: w76p,
      name: "w76p",
    },
    {
      id: 6,
      img: t54w_img,
      path: t54w,
      name: "t54w",
    },
    {
      id: 7,
      img: t53w_img,
      path: t53w,
      name: "t53w",
    },
    {
      id: 8,
      img: lorex_e841ca_img,
      path: lorex_e841ca,
      name: "lorex e841ca",
    },
    {
      id: 9,
      img: Lorex_E841CA_with_cover_img,
      path: Lorex_E841CA_with_cover,
      name: "Lorex E841CA with cover",
    },
    {
      id: 10,
      img: Lorex_without_cover_img,
      path: Lorex_without_cover,
      name: "Lorex without cover",
    },
    {
      id: 11,
      img: Yeastar_P_Series_img,
      path: Yeastar_P_Series,
      name: "Yeastar P Series",
    },
    {
      id: 12,
      img: SMS_MMS_img,
      path: SMS_MMS,
      name: "SMS & MMS",
    },
    {
      id: 13,
      img: Wireless_Phones_img,
      path: Wireless_Phones,
      name: "Wireless Phones",
    },
    {
      id: 14,
      img: Revised_Standard_img,
      path: Revised_Standard,
      name: "Revised Standard",
    },
    {
      id: 15,
      img: VOIP_HD_STANDARD_WITH_WIRELESS_PHONES_img,
      path: VOIP_HD_STANDARD_WITH_WIRELESS_PHONES,
      name: "VOIP HD STANDARD WITH WIRELESS PHONES",
    },
    {
      id: 16,
      img: Standard_VoIP_HD_Standard_Phones_img,
      path: Standard_VoIP_HD_Standard_Phones,
      name: "Standard VoIP HD Standard Phones",
    },
    {
      id: 17,
      img: VoIP_HD_Microsoft_Teams_Phones_img,
      path: VoIP_HD_Microsoft_Teams_Phones,
      name: "VoIP HD Microsoft Teams Phones",
    },
    {
      id: 18,
      img: IVRP_Annual_img,
      path: IVRP_Annual,
      name: "IVRP Annual",
    },
    {
      id: 19,
      img: Local_SEO_img,
      path: Local_SEO,
      name: "Local SEO",
    },

    {
      id: 20,
      img: Full_Services_img,
      path: Full_Services,
      name: "Full Services",
    },
    {
      id: 21,
      img: Web_Hosting_img,
      path: Web_Hosting,
      name: "Web Hosting",
    },
    {
      id: 22,
      img: WEBSITE_SERVICES_img,
      path: WEBSITE_SERVICES,
      name: "WEBSITE SERVICES",
    },
    {
      id: 23,
      img: MULTI_FUNCTIONAL_PRODUCTS_img,
      path: MULTI_FUNCTIONAL_PRODUCTS,
      name: "MULTI FUNCTIONAL PRODUCTS",
    },
    {
      id: 24,
      img: MANAGED_NETWORK_SERVICES_img,
      path: MANAGED_NETWORK_SERVICES,
      name: "MANAGED NETWORK SERVICES",
    },
    {
      id: 25,
      img: CYBER_SECURITY_img,
      path: CYBER_SECURITY,
      name: "CYBER SECURITY",
    },
    {
      id: 26,
      img: COMMUNICATION_SERVICES_img,
      path: COMMUNICATION_SERVICES,
      name: "COMMUNICATION SERVICES",
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-t from-[#d2ffff] to-[#0694c6] rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">PDF guides</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pdfs.map((pdf) => (
            <Tilt>
              <a
                key={pdf.id}
                href={pdf.path}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
              >
                <img
                  src={pdf.img}
                  alt=""
                  className="w-full h-[600px] object-contain rounded-lg p-5"
                />
                <div className="p-4 ">
                  <h3 className="text-lg font-bold mb-2 uppercase">
                    {pdf.name}
                  </h3>
                  <p className="text-gray-700 text-base">User Guide</p>
                </div>
              </a>
            </Tilt>
          ))}
        </div>
      </div>
    </>
  );
};

export default PDF;
