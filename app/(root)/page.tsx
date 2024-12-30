import { auth, signOut } from "@/auth";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <>
      <h1 className="text-3xl font-black text-light-500">
        Welcome to the world Next.JS
      </h1>
    </>
  );
};
export default Home;
