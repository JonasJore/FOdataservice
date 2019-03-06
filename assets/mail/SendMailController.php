<?php
public class SendMailController {
  
  public function __construct() {
    
  }
  
  public function sendMail($toAdress): void {
    mail(
      $toAdress,
      $this->getSubject(),
      $this->getMessage(),
      'From: Mail sendt kontaktskjema' . '\r\n'.
      'Reply-To: webmaster@fodataservice.com' . '\r\n'.
      'X-Mailer: PHP/' . phpversion()
    );
  }k
}
