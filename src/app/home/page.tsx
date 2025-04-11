import Home from "@/components/home";
import { redirect } from "next/navigation";

const MainPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const session = await searchParams?.session as string;
  const dataJson = await fetch(
    "https://gx4ppg428c.execute-api.us-east-1.amazonaws.com/dev/hello",
    {
      headers: {
        Authorization: session ?? "",
      },
    }
  );
  const data = await dataJson.json();

  if(!data || data.message === 'The incoming token has expired') {
    return redirect('/')
  }
  
  return <Home message={data.message} session={session} />;
};

export default MainPage;
