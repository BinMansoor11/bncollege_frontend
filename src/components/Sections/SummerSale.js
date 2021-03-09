import React, { useState } from "react";
import { useSelector } from "react-redux";
import SingleSummerSale from "./componentsOfTheSection/SingleSummerSale";

function SummerSale(props) {
  const _state = useSelector((state) => state.root);
  const { _campus } = _state;
  const jsonObject = [
    {
      title1: "Feature Book",
      title2: "of the month",
      backgroundImage: "url(assets/img/639x300/img1.jpg)",
      buttonText: "PURCHASE",
      link:
        "https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/shop/v6.html",
      containsImage: true,
      width: "col-lg-6",
    },
    {
      title1: "Best Seller",
      title2: "Books",
      backgroundImage: "url(assets/img/350x300/img1.jpg)",
      buttonText: "PURCHASE",
      link:
        "https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/shop/v6.html",
      containsImage: true,
      width: "col-lg-3",
    },
    {
      title1: "Summer Sale",
      title2: "50%",
      buttonText: "PURCHASE",
      link:
        "https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/shop/v6.html",
      containsImage: false,
      width: "col-lg-3",
    },
  ];
  const [state, setState] = useState({
    SummerSaleDetail: _campus.summer_sale,
  });

  const { SummerSaleDetail } = state;
  const SummerSaleArray = SummerSaleDetail?.map((item) => (
    <SingleSummerSale
      containsImage={item.containsImage}
      title1={item.title1}
      title2={item.title2}
      backgroundImage={item.backgroundImage}
      buttonText={item.buttonText}
      link={item.link}
      width={item.width}
    />
  ));
  return (
    <div>
      <section className="space-bottom-2 space-bottom-lg-3">
        <div className="container">
          <div className="row">{SummerSaleArray}</div>
        </div>
      </section>
    </div>
  );
}

export default SummerSale;
