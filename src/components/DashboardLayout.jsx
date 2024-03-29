import { useState } from "react";

import Message from "/assets/icon/message_icon.svg";
import Phone from "/assets/icon/phone_icon.svg";
import { menuItems } from "../../constants";
import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  const [active, setActive] = useState("");
  console.log(active);
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gray-100 px-10">
      <div className="container py-7 h-full">
        <div className="flex items-start justify-between">
          <div className="w-[20%] bg-white h-screen rounded-2xl pt-6 pb-4 flex flex-col justify-between ">
            <div>
              <div className=" flex items-center gap-3 ml-5">
                <Logo />

                <h1 className=" text-base text-[#1572D3] font-semibold">
                  Buy Cars
                </h1>
              </div>
              <div className="w-full h-[1px] bg-[#F4F7FE] my-5"></div>
              <div className="w-full flex flex-col">
                {menuItems.map((e, index) => (
                  <div key={index} className="pl-3 mb-2 flex-1">
                    <Link
                      to={{ pathname: e.path }}
                      onClick={() => setActive(e.path)}
                      className={`${
                        e.path === navigate.asPath ? "bg-[#E1E9FC]" : " "
                      } flex items-center justify-between rounded-l-[10px] cursor-pointer h-full`}
                    >
                      <div className="flex items-center py-2.5 pl-3">
                        <img
                          src={
                            e.path === navigate.asPath
                              ? e.activeIcon
                              : e.inactiveIcon
                          }
                          alt="logo"
                          className={`${
                            e.path === navigate.asPath
                              ? "text-[#2B3674]"
                              : "text-[#323232]"
                          }`}
                        />
                        <span
                          className={`ml-2 text-base font-medium  ${
                            e.path === navigate.asPath
                              ? "text-[#2B3674]"
                              : "text-[#323232]"
                          }`}
                        >
                          {e.name}
                        </span>
                      </div>
                      <div
                        className={`w-[4px] h-12 rounded-3xl text-white ${
                          e.path === navigate.asPath ? "bg-[#336AEA]" : " "
                        } `}
                      ></div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-3 px-4 py-5 bg-[#E1E9FC] rounded ">
              <div className="flex items-center gap-2">
                <img src={Phone} alt="phone icon" />
                <span className="text-base font-medium text-[#2B3674]">
                  Need Help?
                </span>
              </div>
              <h1 className="text-sm font-normal text-[#323232] mt-3 mb-4">
                Our point of contact (POC) will reach out to you within 24 hours
              </h1>
              <div className="flex items-start gap-2">
                <img src={Message} alt="phone icon" />
                <span className="text-sm font-normal text-[#323232] mb-4">
                  Info@topskill.com
                </span>
              </div>
              <div className="flex items-start gap-2">
                <img src={Phone} alt="phone icon" />
                <span className="text-sm font-normal text-[#323232] mb-4">
                  9876543210
                </span>
              </div>
              <button className="py-2 px-3 border border-[#336AEA] text-[15px] font-medium text-[#212121] rounded">
                Get a callback
              </button>
            </div>
          </div>

          <div className="w-[80%] flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
