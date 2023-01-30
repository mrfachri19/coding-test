import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsId } from "../store";

function Index() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchProductsId(id));
  }, [dispatch, id]);

  const store = useSelector((state) => state.Product.dataProductsId);
  console.log(store);

  return (
    <div className="block">
      <div className="flex mt-20 mx-28">
        <div className="max-w-sm py-10">
          <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
            <img
              src={store?.datas?.thumbnail}
              className={`${store?.datas?.thumbnail ? "" : "hidden"}`}
              alt="img"
            />
          </div>
        </div>
        <div className="py-6 px-8 rounded-lg bg-white">
          <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
            {store?.datas?.title ? store?.datas?.title : "-"}{" "}
          </h1>
          <p className="text-gray-700 tracking-wide font-semibold text-base">
            Description:{" "}
            {store?.datas?.description ? store?.datas?.description : "-"}
          </p>
          <p className="text-gray-700 tracking-wide font-semibold text-base">
            Price: {store?.datas?.price ? store?.datas?.price : "-"} $
          </p>
          <p className="text-gray-700 tracking-wide font-semibold text-base">
            discount Percentage:{" "}
            {store?.datas?.discountPercentage
              ? store?.datas?.discountPercentage
              : "-"}{" "}
            %
          </p>
          <p className="text-gray-700 tracking-wide font-semibold text-base">
            Rating: {store?.datas?.rating ? store?.datas?.rating : "-"}
          </p>
          <p className="text-gray-700 tracking-wide font-semibold text-base">
            Stock: {store?.datas?.stock ? store?.datas?.stock : "-"}
          </p>
          <p className="text-gray-700 tracking-wide font-semibold text-base">
            Brand: {store?.datas?.brand ? store?.datas?.brand : "-"}
          </p>
          <p className="text-gray-700 tracking-wide font-semibold text-base">
            Category: {store?.datas?.category ? store?.datas?.category : "-"}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3">
        {store?.datas?.images?.length > 0 ? (
          store?.datas?.images?.map((item, index) => (
            <div key={index} className="container flex justify-center ">
              <div className="max-w-sm py-10">
                <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                  <img src={item} alt="img" />
                </div>
              </div>
            </div>
          ))
        ) : (
          <h5 className="ml-20"> image not found</h5>
        )}
      </div>
    </div>
  );
}

export default Index;
