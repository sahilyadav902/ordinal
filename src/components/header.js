import { BsDiscord, BsTwitter, BsGithub } from "react-icons/bs";

export default function Header() {
  //Design for header component
  return (
    <div className="flex flex-col items-center sm:flex-row px-10 sm:px-20 lg:px-40 py-8 justify-between font-[700] text-xl">
      <div className="flex flex-row gap-x-6">
        <div className="">ordx.xyz</div>
        <div className="opacity-[0.4]">by glip.gg</div>
      </div>
      <div className="flex pt-6 sm:pt-2 gap-x-8 text-xl md:text-2xl opacity-[0.5]">
        <a
          href="https://discordapp.com/users/445609996927893504"
          target="_blank"
        >
          <BsDiscord />
        </a>
        <a href="https://twitter.com/sahilyadav902" target="_blank">
          <BsTwitter />
        </a>
        <a href="https://github.com/sahilyadav902" target="_blank">
          <BsGithub />
        </a>
      </div>
    </div>
  );
}
