import fetch from "node-fetch";

export async function getAllMiddlesData() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-middle/`)
  );
  const middles = await res.json();
  const filteredmiddles = middles.sort(function (a, b) {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  });
  return filteredmiddles;
}

export async function getAllMiddleIds() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-middle/`)
  );
  const middles = await res.json();
  return middles.map((middle) => {
    return {
      params: {
        id: String(middle.id),
      },
    };
  });
}

export async function getMiddlesData(id) {
  const res = await fetch(
    new URL(
      `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-middle/${id}/`
    )
  );
  const middle = await res.json();
  return middle;
}