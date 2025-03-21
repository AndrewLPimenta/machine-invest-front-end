import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, AlertTriangle, Fingerprint, Server } from "lucide-react"

export default function SegurancaPage() {
  return (
    <PageLayout>
      <Section>
        <SectionHeading
          title="Segurança"
          description="Conheça as medidas que implementamos para proteger seus dados e investimentos."
          centered
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <CardTitle>Criptografia de Ponta a Ponta</CardTitle>
              <CardDescription>Proteção em todas as etapas da comunicação</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Utilizamos criptografia de ponta a ponta em todas as comunicações entre seu dispositivo e nossos
                servidores. Isso significa que suas informações são codificadas durante a transmissão, tornando-as
                ilegíveis para qualquer pessoa que tente interceptá-las.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                <Lock className="h-10 w-10 text-primary" />
              </div>
              <CardTitle>Autenticação de Dois Fatores</CardTitle>
              <CardDescription>Camada extra de proteção para sua conta</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Oferecemos e recomendamos fortemente o uso da autenticação de dois fatores (2FA) para todas as contas.
                Isso adiciona uma camada extra de segurança, exigindo não apenas sua senha, mas também um código
                temporário enviado para seu dispositivo móvel.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                <Eye className="h-10 w-10 text-primary" />
              </div>
              <CardTitle>Monitoramento Contínuo</CardTitle>
              <CardDescription>Vigilância 24/7 contra atividades suspeitas</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Nossa equipe de segurança monitora continuamente nossa plataforma em busca de atividades suspeitas.
                Utilizamos sistemas avançados de detecção de fraudes que podem identificar e bloquear tentativas de
                acesso não autorizado em tempo real.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                <AlertTriangle className="h-10 w-10 text-primary" />
              </div>
              <CardTitle>Alertas de Segurança</CardTitle>
              <CardDescription>Notificações imediatas sobre atividades incomuns</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Você receberá alertas imediatos sobre atividades incomuns em sua conta, como tentativas de login de
                locais desconhecidos, alterações de senha ou transações suspeitas. Isso permite que você tome medidas
                rápidas caso sua conta esteja comprometida.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                <Fingerprint className="h-10 w-10 text-primary" />
              </div>
              <CardTitle>Biometria</CardTitle>
              <CardDescription>Acesso seguro através de reconhecimento biométrico</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Nosso aplicativo suporta autenticação biométrica, permitindo que você faça login e autorize transações
                usando sua impressão digital ou reconhecimento facial, dependendo do seu dispositivo. Isso oferece uma
                combinação ideal de segurança e conveniência.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                <Server className="h-10 w-10 text-primary" />
              </div>
              <CardTitle>Armazenamento Seguro</CardTitle>
              <CardDescription>Proteção de dados em repouso</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Seus dados são armazenados em servidores seguros com múltiplas camadas de proteção física e digital.
                Utilizamos criptografia avançada para proteger informações sensíveis, mesmo quando estão em repouso em
                nossos sistemas.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Dicas de Segurança</CardTitle>
              <CardDescription>Recomendações para manter sua conta ainda mais segura</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <p>
                    <strong>Use senhas fortes e únicas:</strong> Crie senhas complexas com pelo menos 12 caracteres,
                    incluindo letras maiúsculas e minúsculas, números e símbolos. Evite usar a mesma senha em diferentes
                    sites.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <p>
                    <strong>Ative a autenticação de dois fatores:</strong> Esta é uma das medidas mais eficazes para
                    proteger sua conta contra acesso não autorizado.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <p>
                    <strong>Mantenha seu dispositivo seguro:</strong> Mantenha seu sistema operacional e aplicativos
                    atualizados. Instale um software antivírus confiável e faça verificações regulares.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <p>
                    <strong>Verifique regularmente sua conta:</strong> Monitore suas transações e atividades da conta
                    regularmente para identificar qualquer atividade suspeita.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <p>
                    <strong>Cuidado com phishing:</strong> Nunca clique em links suspeitos ou forneça suas credenciais
                    em resposta a e-mails ou mensagens não solicitadas. A Machine Invest nunca solicitará sua senha por
                    e-mail ou telefone.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <p>
                    <strong>Use redes seguras:</strong> Evite acessar sua conta em redes Wi-Fi públicas ou não seguras.
                    Se necessário, use uma VPN confiável.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>
    </PageLayout>
  )
}

