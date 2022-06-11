from django.core.mail import send_mail

def enviar_email_confirm(adocao):
    assunto = 'Adoção realizada com sucesso'
    conteudo = f'Parabéns por adotar um pet {adocao.pet.nome} com o valor mensal de {adocao.valor}'
    remetente = 'adoteumpet.py12@gmail.com'
    destinatario = [adocao.email]
    send_mail(assunto, conteudo, remetente, destinatario)