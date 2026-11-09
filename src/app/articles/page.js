"use client";

// request: url methods : GET / POST / PUT / DELETE / PATCH ... etc

// response: html / json / etc... : 200, 300 , 400, 500
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status

import { useEffect, useState } from "react";
// hooks

import { EditArticle } from "./editArticle";

export default function Page() {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then((result) => {
        setArticle(result);
      });
  }, []);

  console.log(article);

  return (
    <div className="overflow-x-auto my-16 mx-auto max-w-4xl">
      <h1 className="text-3xl text-center mb-6">Articles</h1>

      <EditArticle />

      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {article.map((article) => (
            <tr key={article.id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>

              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="font-bold">{article.title}</div>

                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>

              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
