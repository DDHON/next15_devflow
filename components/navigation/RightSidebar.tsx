import Image from "next/image";
import Link from "next/link";
import React from "react";

import ROUTES from "@/constants/routes";

import TagCard from "../cards/TagCard";
const hotQuestions = [
  { _id: "1", title: "How to create a custom hook in React?" },
  { _id: "2", title: "How to use React Router?" },
  { _id: "3", title: "How to use React Context?" },
  { _id: "4", title: "How to use React Router?" },
  { _id: "5", title: "How to use React Context?" },
];
const popularTags = [
  {
    _id: "1",
    name: "react",
    questions: "1000",
  },
  {
    _id: "2",
    name: "next.js",
    questions: "1000",
  },
  {
    _id: "3",
    name: "typeScript",
    questions: "1000",
  },
  {
    _id: "4",
    name: "javaScript",
    questions: "1000",
  },
  {
    _id: "5",
    name: "react native",
    questions: "1000",
  },
];
const RightSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[350px]">
      <div className="h3-bold text-dark200_light900">
        <h3>Top Question</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ _id, title }) => (
            <Link
              key={_id}
              href={ROUTES.PROFILE(_id)}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{title}</p>
              <Image
                src="/icons/chevron-right.svg"
                alt="chevron-right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900 gap-4">Popular Tag</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={_id}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
