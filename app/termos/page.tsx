import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"

export default function TermosPage() {
  return (
    <PageLayout>
      <Section>
        <SectionHeading title="Termos de Uso" description="Última atualização: 15 de março de 2025" centered />

        <div className="mt-8 prose prose-lg dark:prose-invert mx-auto">
          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao acessar ou usar o site, aplicativo móvel ou qualquer outro produto ou serviço da Machine Invest, você
            concorda em ficar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos,
            não poderá acessar o serviço.
          </p>

          <h2>2. Alterações nos Termos</h2>
          <p>
            Podemos modificar estes termos a qualquer momento, a nosso critério exclusivo. Se fizermos alterações,
            notificaremos você publicando os termos atualizados nesta página e atualizando a data de "última
            atualização" acima. É sua responsabilidade revisar periodicamente estes termos.
          </p>

          <h2>3. Elegibilidade</h2>
          <p>
            Para usar nossos serviços, você deve ter pelo menos 18 anos de idade e possuir a capacidade legal para
            celebrar um contrato vinculativo. Ao usar nossos serviços, você declara e garante que atende a todos os
            requisitos de elegibilidade.
          </p>

          <h2>4. Conta</h2>
          <p>
            Quando você cria uma conta conosco, você deve fornecer informações precisas, completas e atualizadas. Você é
            responsável por manter a confidencialidade de sua conta e senha e por restringir o acesso ao seu computador
            ou dispositivo móvel. Você concorda em aceitar a responsabilidade por todas as atividades que ocorram em sua
            conta.
          </p>

          <h2>5. Serviços</h2>
          <p>
            A Machine Invest oferece uma plataforma para simulação de investimentos, acompanhamento de criptomoedas e
            outros serviços financeiros. Nossos serviços são fornecidos "como estão" e "conforme disponíveis", sem
            garantias de qualquer tipo.
          </p>

          <h2>6. Riscos de Investimento</h2>
          <p>
            Investimentos em criptomoedas e outros ativos financeiros envolvem riscos significativos, incluindo a
            possível perda do principal investido. As informações fornecidas em nossa plataforma não constituem
            aconselhamento financeiro, de investimento ou de qualquer outro tipo.
          </p>

          <h2>7. Propriedade Intelectual</h2>
          <p>
            O conteúdo, recursos e funcionalidades disponíveis em nossos serviços, incluindo, mas não se limitando a
            textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados,
            são de propriedade da Machine Invest ou de seus licenciadores e são protegidos por leis de direitos
            autorais, marcas registradas e outras leis de propriedade intelectual.
          </p>

          <h2>8. Limitação de Responsabilidade</h2>
          <p>
            Em nenhuma circunstância a Machine Invest, seus diretores, funcionários, parceiros, agentes, fornecedores ou
            afiliados serão responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou
            punitivos, incluindo, sem limitação, perda de lucros, dados, uso, boa vontade ou outras perdas intangíveis,
            resultantes de seu acesso ou uso ou incapacidade de acessar ou usar os serviços.
          </p>

          <h2>9. Lei Aplicável</h2>
          <p>
            Estes termos serão regidos e interpretados de acordo com as leis do Brasil, sem considerar suas disposições
            sobre conflitos de leis.
          </p>

          <h2>10. Contato</h2>
          <p>
            Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco pelo e-mail:
            termos@machineinvest.com.br
          </p>
        </div>
      </Section>
    </PageLayout>
  )
}

