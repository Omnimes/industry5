type Props = {
  children: React.ReactNode
}
export const ContainerPage = ({ children }: Props) => {
  return (
    <main className="mx-auto max-w-5xl px-4 py-24">
      <section className="mx-auto w-full text-left">{children}</section>
    </main>
  )
}
