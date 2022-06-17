<?php
//Variáveis

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Corpo E-mail
$arquivo = "
<style type='text/css'>
    body {
    margin:0px;
    font-family:Verdane;
    font-size:12px;
    color: #000000;
    }
    
    
    </style>
      <html>
          <table width='410' cellpadding='1' cellspacing='1' bgcolor='#FFF'>
              <tr>
                  <td width='100'>Nome:</td>
                  <td>$name</td>
              </tr>
              <tr>
                <td width='100'>E-mail:</td>
                <td>$email</td>
            </tr>
            <tr>
                <td width='100'>Telefone:</td>
                <td>$phone</td>
            </tr>
            <tr>
                <td width='100'>Mensagem:</td>
                <td>$message</td>
            </tr>
          </table>
      </html>
";

//enviar

  // emails para quem será enviado o formulário
  $emailenviar = "dev@eaglesx.com";
  $destino = $emailenviar;
  $assunto = "Contato pelo Site";

  // É necessário indicar que o formato do e-mail é html
  $headers  = 'MIME-Version: 1.0' . "\r\n";
      $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
      $headers .= 'From: $nome <$email>';
  //$headers .= "Bcc: $EmailPadrao\r\n";

  $enviaremail = mail($destino, $assunto, $arquivo, $headers);
  if($enviaremail){
  $mgm = "E-MAIL ENVIADO COM SUCESSO! <br> O link será enviado para o e-mail fornecido no formulário";
  echo " <meta http-equiv='refresh' content='10;URL=contato.html'>";
  } else {
  $mgm = "ERRO AO ENVIAR E-MAIL!";
  echo "";
  }
?>