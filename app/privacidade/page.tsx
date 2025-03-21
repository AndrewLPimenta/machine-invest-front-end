import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"

export default function PrivacidadePage() {
  return (
    <PageLayout>
      <Section>
        <SectionHeading
          title="Política de Privacidade"
          description="Última atualização: 15 de março de 2025"
          centered
        />

        <div className="mt-8 prose prose-lg dark:prose-invert mx-auto">
          <h2>1. Introdução</h2>
          <p>
            A Machine Invest está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como
            coletamos, usamos, divulgamos e protegemos suas informações pessoais quando você usa nosso site, aplicativo
            móvel e serviços relacionados.
          </p>

          <h2>2. Informações que Coletamos</h2>
          <p>Podemos coletar os seguintes tipos de informações:</p>
          <ul>
            <li>
              <strong>Informações de Identificação Pessoal:</strong> Nome, endereço de e-mail, número de telefone,
              endereço postal, data de nascimento, CPF e outras informações necessárias para verificar sua identidade.
            </li>
            <li>
              <strong>Informações Financeiras:</strong> Detalhes da conta bancária, histórico de transações e outras
              informações financeiras necessárias para fornecer nossos serviços.
            </li>
            <li>
              <strong>Informações de Uso:</strong> Como você interage com nossos serviços, incluindo páginas visitadas,
              tempo gasto no site, cliques e outras ações.
            </li>
            <li>
              <strong>Informações do Dispositivo:</strong> Tipo de dispositivo, sistema operacional, navegador, endereço
              IP e outras informações técnicas.
            </li>
          </ul>

          <h2>3. Como Usamos Suas Informações</h2>
          <p>Usamos suas informações para:</p>
          <ul>
            <li>Fornecer, manter e melhorar nossos serviços</li>
            <li>Processar transações e gerenciar sua conta</li>
            <li>Enviar comunicações relacionadas ao serviço</li>
            <li>Personalizar sua experiência</li>
            <li>Detectar, prevenir e resolver problemas técnicos e de segurança</li>
            <li>Cumprir obrigações legais e regulatórias</li>
          </ul>

          <h2>4. Compartilhamento de Informações</h2>
          <p>Podemos compartilhar suas informações com:</p>
          <ul>
            <li>
              <strong>Prestadores de Serviços:</strong> Empresas que nos ajudam a fornecer nossos serviços, como
              processadores de pagamento e serviços de hospedagem.
            </li>
            <li>
              <strong>Parceiros de Negócios:</strong> Empresas com as quais colaboramos para oferecer produtos ou
              serviços conjuntos.
            </li>
            <li>
              <strong>Autoridades Legais:</strong> Quando exigido por lei, ordem judicial ou processo legal.
            </li>
          </ul>

          <h2>5. Segurança de Dados</h2>
          <p>
            Implementamos medidas de segurança técnicas, administrativas e físicas projetadas para proteger suas
            informações pessoais contra acesso não autorizado, uso indevido ou divulgação. No entanto, nenhum método de
            transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro.
          </p>

          <h2>6. Seus Direitos</h2>
          <p>
            Dependendo da sua localização, você pode ter certos direitos em relação às suas informações pessoais,
            incluindo:
          </p>
          <ul>
            <li>Acessar e receber uma cópia de suas informações pessoais</li>
            <li>Corrigir informações imprecisas ou incompletas</li>
            <li>Excluir suas informações pessoais</li>
            <li>Restringir ou se opor ao processamento de suas informações</li>
            <li>Portabilidade de dados</li>
          </ul>

          <h2>7. Cookies e Tecnologias Semelhantes</h2>
          <p>
            Usamos cookies e tecnologias semelhantes para coletar informações sobre suas atividades em nossos serviços.
            Você pode controlar o uso de cookies através das configurações do seu navegador.
          </p>

          <h2>8. Alterações nesta Política</h2>
          <p>
            Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações
            publicando a nova Política de Privacidade nesta página e atualizando a data de "última atualização" acima.
          </p>

          <h2>9. Contato</h2>
          <p>
            Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco pelo e-mail:
            privacidade@machineinvest.com.br
          </p>
        </div>
      </Section>
    </PageLayout>
  )
}

