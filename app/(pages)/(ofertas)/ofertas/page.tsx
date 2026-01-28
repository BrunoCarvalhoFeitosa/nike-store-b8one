import { Metadata } from "next"
import { Breadcrumb } from "@/app/components/common/Breadcrumb"
import { Title } from "@/app/components/plp/Title"
import { Banner } from "@/app/components/plp/Banner"
import { Controls } from "@/app/components/plp/Controls"
import { Content } from "@/app/components/plp/Content"

export const metadata: Metadata = {
  title: "Ofertas da Semana | Nike.com",
  description: "Confira as melhores ofertas da semana com descontos imperdíveis em diversos produtos.",
  authors: [{ name: "Bruno Carvalho Feitosa", url: "https://github.com/brunocarvalhofeitosa"}]
}

const OffersPage = () => {
  return (
    <main>
      <Banner />
      <Breadcrumb />
      <Title text="Ofertas da semana" />
      <Controls />
      <Content />
    </main>
  )
}

export default OffersPage
