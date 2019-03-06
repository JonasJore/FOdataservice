<?php 
// TODO: ytterligere logikk for formulering av eposten som skal sendt.
// TODO: all businesslogic skal trekkes ut i en egen controller klasse
// TODO: requestbody skal håndteres på utsiden av denne klassen.
// TODO: sendMail() skal trekkes ut i en egen klasse etterhvert
public class Mail {
  private $mail;
  private $subject;
  private $message;
  private $typeOfService;
  
  public function __construct($mail, $subject, $message, $typeOfService) {
    $this->mail = $mail;
    $this->subject = $subject;
    $this->message = $message;
    $this->typeOfService = $typeOfService;
  }
  
  private function getMail(): String {
    return $this->mail;
  }
  
  private function getSubject(): String {
    return $this->subject;
  }
  
  private function getMessage(): String {
    return $this->message;
  }
  
  private function getTypeOfService(): String {
    return $this->typeOfService;
  }
}

final class MailClientException extends RuntimeException {}
