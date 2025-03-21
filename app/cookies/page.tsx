import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function CookiesPage() {
  return (
    <PageLayout>
      <Section>
        <SectionHeading title="Política de Cookies" description="Última atualização: 15 de março de 2025" centered />

        <div className="mt-8 prose prose-lg dark:prose-invert mx-auto">
          <h2>1. O que são Cookies?</h2>
          <p>
            Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo (computador, tablet ou
            celular) quando você visita um site. Eles são amplamente utilizados para fazer os sites funcionarem de
            maneira mais eficiente, bem como fornecer informações aos proprietários do site.
          </p>

          <h2>2. Como Usamos Cookies</h2>
          <p>A Machine Invest utiliza cookies para diversos propósitos, incluindo:</p>
          <ul>
            <li>Manter você conectado durante sua visita</li>
            <li>Lembrar suas preferências e configurações</li>
            <li>Melhorar a velocidade/segurança do site</li>
            <li>Permitir que você compartilhe páginas nas redes sociais</li>
            <li>Fornecer análises sobre como nosso site é usado</li>
            <li>Personalizar nosso conteúdo para você</li>
          </ul>

          <h2>3. Tipos de Cookies que Usamos</h2>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tipo de Cookie</TableHead>
                <TableHead>Propósito</TableHead>
                <TableHead>Duração</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Cookies Essenciais</TableCell>
                <TableCell>
                  Necessários para o funcionamento básico do site. Permitem que você navegue pelo site e use recursos
                  essenciais, como áreas seguras e carrinho de compras.
                </TableCell>
                <TableCell>Sessão / Persistente</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Cookies de Preferências</TableCell>
                <TableCell>
                  Permitem que o site lembre informações que mudam a aparência ou o comportamento do site, como seu
                  idioma preferido ou a região em que você está.
                </TableCell>
                <TableCell>1 ano</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Cookies Estatísticos</TableCell>
                <TableCell>
                  Ajudam a entender como os visitantes interagem com o site, coletando e relatando informações
                  anonimamente.
                </TableCell>
                <TableCell>2 anos</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Cookies de Marketing</TableCell>
                <TableCell>
                  Usados para rastrear visitantes em sites. A intenção é exibir anúncios relevantes e envolventes para o
                  usuário individual.
                </TableCell>
                <TableCell>90 dias</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <h2>4. Controle de Cookies</h2>
          <p>
            Você pode controlar e/ou excluir cookies conforme desejar. Você pode excluir todos os cookies que já estão
            no seu dispositivo e pode configurar a maioria dos navegadores para impedir que eles sejam colocados. No
            entanto, se você fizer isso, talvez tenha que ajustar manualmente algumas preferências sempre que visitar um
            site, e alguns serviços e funcionalidades podem não funcionar.
          </p>

          <h3>Como Gerenciar Cookies em Diferentes Navegadores</h3>
          <ul>
            <li>
              <strong>Google Chrome:</strong> Menu &gt; Configurações &gt; Avançado &gt; Privacidade e segurança &gt;
              Configurações de conteúdo &gt; Cookies
            </li>
            <li>
              <strong>Mozilla Firefox:</strong> Menu &gt; Opções &gt; Privacidade e Segurança &gt; Cookies e dados do
              site
            </li>
            <li>
              <strong>Safari:</strong> Preferências > Privacidade > Cookies e dados do site
            </li>
            <li>
              <strong>Microsoft Edge:</strong> Menu > Configurações > Cookies e permissões do site > Cookies
            </li>
          </ul>

          <h2>5. Cookies de Terceiros</h2>
          <p>
            Alguns cookies são colocados por serviços de terceiros que aparecem em nossas páginas. Eles são usados para
            análise, publicidade e mídia social. Não temos controle sobre esses cookies de terceiros. Para saber mais
            sobre esses cookies e como desativá-los, consulte as políticas de privacidade dos respectivos terceiros.
          </p>

          <h2>6. Alterações nesta Política</h2>
          <p>
            Podemos atualizar nossa Política de Cookies periodicamente. Notificaremos você sobre quaisquer alterações
            publicando a nova Política de Cookies nesta página e atualizando a data de "última atualização" acima.
          </p>

          <h2>7. Contato</h2>
          <p>
            Se você tiver alguma dúvida sobre nossa Política de Cookies, entre em contato conosco pelo e-mail:
            cookies@machineinvest.com.br
          </p>
        </div>
      </Section>
    </PageLayout>
  )
}

