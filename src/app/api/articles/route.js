export async function GET(request) {
  const res = await fetch("https://dev.to/api/articles/me/all", {
    headers: { api_key: process.env.DEVTO_API_KEY },
  });

  const result = await res.json();

  return Response.json(result);
}

export async function POST(request) {
  const { title, markdown, tags } = await request.json();

  const res = await fetch("https://dev.to/api/articles", {
    method: "POST",
    body: JSON.stringify({
      article: {
        title: title,
        published: true,
        body_markdown: markdown,
        tags: tags,
      },
    }),

    headers: {
      "Content-Type": "application/json",
      api_key: process.env.DEVTO_API_KEY,
    },
  });

  const result = await res.json();

  console.log(result);

  return Response.json({ message: "success" });
}

//hi my name is yuki
