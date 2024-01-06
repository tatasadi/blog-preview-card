import cardImage from '../assets/images/illustration-article.svg'
import avatar from '../assets/images/image-avatar.webp'

export default function Card() {
  return (
    <div className="flex w-80 flex-col items-start gap-6 rounded-[1.25rem] border border-black bg-white p-6 shadow-[8px_8px_0_0_#000] lg:w-96">
      <img src={cardImage} alt="Illustration article" />
      <div className="flex flex-col items-start gap-3 self-stretch">
        <div className="bg-yellow flex items-center justify-center gap-2 rounded-[0.25rem] px-3 py-1 text-xs font-extrabold lg:text-sm">
          Learning
        </div>
        <h2 className="text-xs font-medium leading-[1.125rem] lg:text-sm">Published 21 Dec 2023</h2>
        <h1 className="hover:text-yellow cursor-pointer text-xl font-extrabold leading-[1.875rem] lg:text-2xl lg:leading-[2.25rem]">
          HTML & CSS foundations
        </h1>
        <p className="text-medium text-grey text-sm leading-[1.3225rem] lg:text-base lg:leading-6">
          These languages are the backbone of every website, defining structure, content, and presentation.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <img src={avatar} alt="Avatar" className="h-8 w-8 rounded-full" />
        <h3 className="text-sm font-extrabold leading-[1.3125rem]">Greg Hooper</h3>
      </div>
    </div>
  )
}
