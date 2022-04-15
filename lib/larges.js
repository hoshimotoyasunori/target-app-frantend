import fetch from "node-fetch";

export async function getAllLargesData() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-large/`)
  );
  const larges = await res.json();
  const filteredlarges = larges.sort(function (a, b) {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  });
  return filteredlarges;
}

export async function getAllLargeIds() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-large/`)
  );
  const larges = await res.json();
  return larges.map((large) => {
    return {
      params: {
        id: String(large.id),
      },
    };
  });
}

export async function getLargeData(id) {
  const res = await fetch(
    new URL(
      `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-large/${id}/`
    )
  );
  const large = await res.json();
  return large;
}