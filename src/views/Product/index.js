import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store";
import { Input } from "../../components/atoms";

function Index() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  useEffect(() => {
    dispatch(fetchProducts(`${search}`));
  }, [dispatch, search]);

  const store = useSelector((state) => state.Product.dataProducts.datas);
  console.log(store);

  return (
    <div>
      <div className=" mt-24 flex ml-10">
        <h5 className="text-base font-semibold mr-5 mt-3">Pencarian:</h5><Input onchange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="grid grid-cols-3 gap-x-4 gap-y-8 mt-10">
        {store?.length > 0 ? (
          store?.map((item, index) => (
            <div key={index} className="block">
              <div className="container flex justify-center ">
                <div className="max-w-sm py-10">
                  <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg h-[400px]">
                    <img
                      src={item.thumbnail}
                      alt="img"
                      className="w-64 max-h-40"
                    />
                    <div className="py-6 px-8 rounded-lg bg-white">
                      <h1
                        className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer"
                        onClick={() => navigate(`/product/${item.id}`)}
                      >
                        {item.title ? item.title : "-"}{" "}
                      </h1>
                      <p className="text-gray-700 tracking-wide">
                        Description: {item.description ? item.description : "-"}
                      </p>
                      <p className="text-gray-700 tracking-wide">
                        Price: {item.price ? item.price : "-"} $
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h5 className="ml-5"> data not found...</h5>
        )}
      </div>
    </div>
  );
}

export default Index;
