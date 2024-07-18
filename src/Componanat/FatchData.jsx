import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FatchData = ({ cat }) => {
  const [data, setData] = useState("");

  const fetchData = async () => {
    // yaha per ham ni data ko fatch keya and us ke categories ke jo be ham ni option call kar rahe hen wo data fatch ho jaie gi
    await axios

      .get(
        cat
          ? `https://newsapi.org/v2/top-headlines?country=&category=${cat}&apiKey=19636b15f15b439aa4f6eb0a8ce38c4f`
          : "https://newsapi.org/v2/top-headlines?country=us&apiKey=19636b15f15b439aa4f6eb0a8ce38c4f"
      )

      .then((res) => setData(res.data.articles)); // jab data response men aa gaie to ham useState he help se us data men se aiticales wale data ko apni web per show karengi
  };
  useEffect(() => {
    fetchData();
  }, [cat]);

  return (
    <div className="container my-4">
      <h1> Top Headlinne</h1>

      <div
        className=" cantianer d-flex justify-content-center align-items-center flex-column my-4"
        style={{ minHeight: "100vh" }}
      >
        {data
          ? data.map(
              (
                items,
                index // us data ko map karengi
              ) => (
                <>
                  <div
                    className="container my-3 p-3"
                    style={{ width: "600px", boxShadow: "2px 2px 10px silver" }}
                  >
                    <h5 className="my-4">{items.title}</h5>
                    <div className="my-4 d-flex justify-content-center align-items-center">
                      <img
                        src={items.urlToImage}
                        alt="Sorry Image is Not found"
                        className="img-fluid"
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <p>{items.description}</p>
                    <p>{items.content}</p>
                    <Link to={items.url} target="blank">
                      <button type="button" class="btn btn-primary">
                        {" "}
                        View More..
                      </button>
                    </Link>
                  </div>
                </>
              )
            )
          : "Loading.... Please Wait"}{" "}
      </div>
    </div>
  );
};

export default FatchData;
