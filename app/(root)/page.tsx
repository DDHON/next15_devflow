import Link from "next/link";

import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
const questions = [
  {
    _id: "1",
    title: "how to learn react",
    description: "Question 1 description",
    tags: [
      { _id: "1", name: "css" },
      { _id: "2", name: "react" },
    ],
    author: {
      _id: "1",
      name: "Dhoni",
      image:
        "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How To Learn javascript",
    description: "Question 2 description",
    tags: [
      { _id: "1", name: "javascript" },
      { _id: "2", name: "javascript" },
    ],
    author: {
      _id: "1",
      name: "Edo",
      image:
        "https://static.vecteezy.com/system/resources/previews/004/899/680/non_2x/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date("2021-09-01"),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}
const Home = async ({ searchParams }: SearchParams) => {
  const { query = "", filter = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) => {
    const matchesQuery = question.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesFilter = filter
      ? question.tags[0].name.toLowerCase() === filter.toLowerCase()
      : true;
    return matchesQuery && matchesFilter;
  });
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button className="primary-gradient min-h-[46px] px-4 !text-light-900">
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="icons/search.svg"
          placeholder="Search Questions..."
          otherClasses="flex-1"
        />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};
export default Home;
