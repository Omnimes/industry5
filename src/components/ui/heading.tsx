type Props = {
  children?: React.ReactNode
  text?: string
}

export const HeadingOneTitlePage = ({ text, children }: Props) => {
  return (
    <h1 className="font-heading mb-12 text-2xl tracking-normal text-gray-900 sm:text-3xl md:text-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl dark:text-white">
      <span className="block w-full bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent lg:inline">
        {text}
        {children}
      </span>
    </h1>
  )
}
