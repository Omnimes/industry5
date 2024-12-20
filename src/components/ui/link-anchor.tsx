export const ArticleHeadingTitle = ({ text }: { text: string }) => {
  return (
    <h2 className="font-heading my-6 text-2xl tracking-normal text-gray-900 sm:text-3xl md:leading-none md:tracking-tight lg:flex lg:flex-col lg:text-2xl dark:text-white">
      <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent lg:inline">
        {text}
      </span>
    </h2>
  )
}
