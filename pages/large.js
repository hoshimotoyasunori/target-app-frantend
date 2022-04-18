import Layout from "../components/Layout";
import Link from "next/link";
import { getAllLargesData } from "../lib/larges";
import { getAllMiddlesData } from "../lib/middles";
import { getAllTasksData } from "../lib/tasks";
import useSWR from "swr";
import { useEffect } from "react";
import StateContextProvider from "../context/StateContext";
import Large from "../components/Large";
import Middle from "../components/Middle";
import Task from "../components/Task";
import LargeForm from "../components/LargeForm";
import MiddleForm from "../components/MiddleForm";
import TaskForm from "../components/TaskForm";

const fetcher = (url) => fetch(url).then((res) => res.json());
const apiLargeUrl = `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-large/`;
const apiMiddleUrl = `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-middle/`;
const apiTaskUrl = `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`;


export default function LargePage({ staticfilteredLarges,staticfilteredMiddles,staticfilteredTasks }) {
  const { data: larges, mutate } = useSWR(apiLargeUrl, fetcher, {
    fallbackData: staticfilteredLarges,
  });
  const { data: middles } = useSWR(apiMiddleUrl, fetcher, {
    fallbackData: staticfilteredMiddles,
  });
  const { data: tasks } = useSWR(apiTaskUrl, fetcher, {
    fallbackData: staticfilteredTasks,
  });
  const filteredLarges = larges?.sort(function (a, b) {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  });
  const filteredMiddles = middles?.sort(function (a, b) {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  });
  const filteredTasks = tasks?.sort(function (a, b) {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  });
  useEffect(() => {
    mutate();
  }, [mutate]);
  // console.log(larges)
  // console.log(filteredLarges)
  // console.log(middles)
  // console.log(filteredMiddles)
  return (
    <StateContextProvider>
      <Layout title="Large">
        <LargeForm largeCreated={mutate} />
        <ul>
          {filteredLarges &&
            filteredLarges.map((large) => (
              <Large key={large.id} large={large} largeDeleted={mutate} />
            ))}
        </ul>
        <MiddleForm middleCreated={mutate} />
        <ul>
          {filteredMiddles &&
            filteredMiddles.map((middle) => (
              <Middle key={middle.id} middle={middle} middleDeleted={mutate} />
            ))}
        </ul>
        <TaskForm taskCreated={mutate} />
        <ul>
          {filteredTasks &&
            filteredTasks.map((task) => (
              <Task key={task.id} task={task} largeDeleted={mutate} />
            ))}
        </ul>
        <Link href="/main">
          <a>
            <span>Back to main</span>
          </a>
        </Link>
      </Layout>
    </StateContextProvider>
  );
}

export async function getStaticProps() {
  const staticfilteredLarges = await getAllLargesData();
  const staticfilteredMiddles = await getAllMiddlesData();
  const staticfilteredTasks = await getAllTasksData();
  return {
    props: { staticfilteredLarges,staticfilteredMiddles,staticfilteredTasks },
    revalidate: 3,
  };
}

