import fetch from "node-fetch";

export async function getAllMainTargetsData() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-maintarget/`)
  );
  const maintargets = await res.json();
  const filteredMainTargets = maintargets.sort(function (a, b) {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  });
  return filteredMainTargets;
}

export async function getAllMainTargetIds() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-maintarget/`)
  );
  const maintargets = await res.json();
  return maintargets.map((maintarget) => {
    return {
      params: {
        id: String(maintarget.id),
      },
    };
  });
}

export async function getMainTargetData(id) {
  const res = await fetch(
    new URL(
      `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-maintarget/${id}/`
    )
  );
  const maintarget = await res.json();
  return maintarget;
}

export async function getTop_LeftData(id) {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-top_left/${id}/`)
  );
  const top_left = await res.json();
  return top_left;
}

export async function getTop_CenterData(id) {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-top_center/${id}/`)
  );
  const top_center = await res.json();
  return top_center;
}

export async function getTop_RightData(id) {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-top_right/${id}/`)
  );
  const top_right = await res.json();
  return top_right;
}

export async function getCenter_LeftData(id) {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-center_left/${id}/`)
  );
  const center_left = await res.json();
  return center_left;
}

export async function getCenter_RightData(id) {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-center_right/${id}/`)
  );
  const center_right = await res.json();
  return center_right;
}

export async function getUnder_LeftData(id) {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-under_left/${id}/`)
  );
  const under_left = await res.json();
  return under_left;
}

export async function getUnder_CenterData(id) {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-under_center/${id}/`)
  );
  const under_center = await res.json();
  return under_center;
}

export async function getUnder_RightData(id) {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-under_right/${id}/`)
  );
  const under_right = await res.json();
  return under_right;
}

// /////////////////////////

export async function getTop_Left_SubData(id) {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-top_left_sub/${id}/`)
  );
  const top_left_sub = await res.json();
  return top_left_sub;
}

export async function getTop_Center_SubData(id) {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-top_center_sub/${id}/`)
  );
  const top_center_sub = await res.json();
  return top_center_sub;
}

export async function getTop_Right_SubData(id) {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-top_right_sub/${id}/`)
  );
  const top_right_sub = await res.json();
  return top_right_sub;
}

export async function getCenter_Left_SubData(id) {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-center_left_sub/${id}/`)
  );
  const center_left_sub = await res.json();
  return center_left_sub;
}

export async function getCenter_Right_SubData(id) {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-center_right_sub/${id}/`)
  );
  const center_right_sub = await res.json();
  return center_right_sub;
}

export async function getUnder_Left_SubData(id) {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-under_left_sub/${id}/`)
  );
  const under_left_sub = await res.json();
  return under_left_sub;
}

export async function getUnder_Center_SubData(id) {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-under_center_sub/${id}/`)
  );
  const under_center_sub = await res.json();
  return under_center_sub;
}

export async function getUnder_Right_SubData(id) {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-under_right_sub/${id}/`)
  );
  const under_right_sub = await res.json();
  return under_right_sub;
}
