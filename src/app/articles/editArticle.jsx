import { useState } from "react";

export function EditArticle() {
  const [title, setTitle] = useState("");
  const [markdown, setMarkdown] = useState("");
  const [tags, setTags] = useState("");

  function submit() {
    fetch("/api/articles", {
      method: "POST",
      body: JSON.stringify({
        title,
        markdown,
        tags: tags
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag !== ""),
      }),
    });
  }

  return (
    <>
      <div className="text-right mb-8">
        <button
          className="btn"
          onClick={() => document.getElementById("edit-article").showModal()}>
          Add New Article
        </button>
      </div>

      <dialog id="edit-article" className="modal">
        <div className="modal-box">
          <input
            type="text"
            placeholder="Type here"
            className="input w-full mb-8"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Tags: javascript, react, webdev"
            className="input w-full mb-8"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />

          <textarea
            className="textarea w-full mb-8"
            placeholder="Bio"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}></textarea>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>

            <button className="btn btn-outline btn-primary" onClick={submit}>
              Publish
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
