import React from "react";
import DetailSection from "./DetailSection";
import detailImage from "@assets/images/detailads.jpg";

function AddressDetail() {
  return (
    <div className="flex  items-start gap-5">
      <DetailSection />
      <img className="rounded-20" src={detailImage} alt="detail ads" />
    </div>
  );
}

export default AddressDetail;
