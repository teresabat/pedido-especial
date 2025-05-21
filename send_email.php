<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $resposta = $_POST['resposta'] ?? 'indefinida';

    $para = 'contatotommymateus@gmail.com';
    $assunto = 'Resposta do Pedido Especial';
    $mensagem = "Olá, tudo bem? Respondei o pedido especial com $resposta";

    $cabecalhos = "From: contatotommymateus@gmail.com\r\n";
    $cabecalhos .= "Reply-To: contatotommymateus@gmail.com\r\n";
    $cabecalhos .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    if (mail($para, $assunto, $mensagem, $cabecalhos)) {
        echo 'Email enviado com sucesso!';
    } else {
        echo 'Falha ao enviar email!';
    }    
}