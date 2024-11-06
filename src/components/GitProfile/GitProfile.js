import Image from "next/image";
import TitleText from "../TitleText/TitleText";
import { useLocalization } from "@/app/context/LocalizationContext";
import Follow from "../Follow/Follow";

export default function GitProfile({ user, repos }) {
  const { localizationData } = useLocalization();

  return (
    <>
      <div className="bg-zinc-400 dark:bg-zinc-600 rounded-xl flex flex-col border-2 border-zinc-500 dark:border-zinc-700">
        <section className="flex flex-row p-4 gap-8 justify-between w-full">
          <div className="flex flex-row gap-8 space-between">
            <a href={user.html_url} target="_blank">
              <Image
                src={user.avatar_url}
                width={170}
                height={170}
                alt="Picture of the author"
                className="rounded-full hover:scale-110 transition-transform duration-300"
              />
            </a>
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-4xl font-pop border-b-2 border-b-red-400 dark:border-b-indigo-500">
                {user.name}
              </h1>
              <h2 className="text-xl">{user.bio}</h2>
              {user.location && (
                <div className="flex flex-row items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h2 className="text-xl">{user.location}</h2>
                </div>
              )}
              {user.hireable && <h2 className="text-xl">Looking for a Job</h2>}
              {user.company && <h2 className="text-xl">{user.company}</h2>}
              {user.email && <h2 className="text-xl">{user.email}</h2>}
              {user.blog && (
                <a
                  href={user.blog}
                  target="_blank"
                  className="text-xl hover:font-bold w-fit"
                >
                  Personal Website
                </a>
              )}
            </div>
          </div>

          <div className="flex flex-row gap-4 items-center hidden md:flex">
            <Follow
              text={localizationData.github_repos.followers}
              number={user.followers}
            />
            <Follow
              text={localizationData.github_repos.following}
              number={user.following}
            />
          </div>

          <div className="flex flex-row items-center gap-4 hidden md:flex">
            <h2 className="text-2xl font-pop">{user.public_repos}</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49"
              height="48"
              viewBox="0 0 98 96"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                fill="#24292f"
              />
            </svg>
          </div>
        </section>
        <section className="bg-zinc-300 dark:bg-zinc-500 rounded-xl flex flex-col p-4">
          <TitleText text={localizationData.github_repos.repos} />
          <div className="flex flex-wrap p-4 gap-4">
            {repos.map((repo, index) => (
              <a
                href={repo.html_url}
                target="_blank"
                key={index}
                className="group flex flex-col flex-grow basis-200 gap-4 p-4 border-b-2 border-zinc-400 hover:border-zinc-200 dark:border-zinc-600 dark:hover:border-zinc-400 shadow-lg bg-zinc-400 dark:bg-zinc-600 rounded-xl min-w-64 transition-colors duration-300"
              >
                <div className="flex flex-row justify-between items-center gap-4">
                  <div className="text-xl md:text-2xl font-kanit border-b-2 border-b-red-400 dark:border-b-indigo-500 transition-transform duration-300 group-hover:scale-110">
                    {repo.name}
                  </div>
                  {!repo.private && (
                    <p className="border rounded-xl text-sm md:text-md px-2 dark:border-zinc-500 border-zinc-200">
                      {localizationData.github_repos.public}
                    </p>
                  )}
                </div>
                <h2>{repo.language}</h2>
                <h2 className="text-lg">{repo.description}</h2>
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
