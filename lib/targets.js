import fetch from "node-fetch";

export async function getAllTargetsData() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-target/`)
  );
  const targets = await res.json();
  const filteredTargets = targets.sort(function (a, b) {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  });
  return filteredTargets;
}

export async function getAllTargetIds() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-target/`)
  );
  const targets = await res.json();
  return targets.map((target) => {
    return {
      params: {
        id: String(target.id),
      },
    };
  });
}

export async function getTargetData(id) {
  const res = await fetch(
    new URL(
      `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-target/${id}/`
    )
  );
  const target = await res.json();
  return target;
}