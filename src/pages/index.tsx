export default function Home() {
  return (
    <main className="m-auto flex h-screen w-screen items-center justify-center bg-[#0F172A]">
      <div className="flex flex-col space-y-12">
        <div className="mx-auto flex items-center space-x-10">
          <span className="flex h-36 w-36 items-center justify-center rounded-full bg-white">
            image
          </span>
          <div className="flex flex-col space-y-4">
            <h1 className="text-2xl font-semibold text-white">
              Shunya Hayashi
            </h1>
            <h2 className="text-sm text-white">
              software developer <br /> hhkb lover
            </h2>
          </div>
        </div>
        <div className="flex w-2/3 justify-between">
          <div className="flex flex-col space-y-2">
            <h2 className="text-lg font-semibold text-white">Interests</h2>
            <ul className="ml-3.5 list-disc space-y-1">
              <li className="text-white ">Typescript</li>
              <li className="text-white ">Golang</li>
              <li className="text-white ">GraphQL</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-2">
            <h2 className="text-lg font-semibold text-white">SNS</h2>
            <ul className="ml-3.5  list-disc space-y-1">
              <li className="text-white ">Github</li>
              <li className="text-white ">zenn</li>
              <li className="text-white ">qiita</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
