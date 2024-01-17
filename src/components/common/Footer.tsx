import React from "react";
import data from "@/constants/user.json";

function Footer() {
  return (
    <footer className="text-gray-heavy text-center min-w-[1000px] mb-20">
      <p className="mb-1">본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.</p>
      <p>
        © {new Date().getFullYear()}&nbsp;{data.engName}. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
