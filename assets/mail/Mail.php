<?php 
class Mail {
  private $fromMail;
  private $subject;
  private $typeOfService;
  private $message;
  
  public function __construct($fromMail, $subject, $typeOfService, $message) {
    $this->fromMail = $fromMail;
    $this->subject = $subject;
    $this->typeOfService = $typeOfService;
    $this->message = $message;
  }
  
  public function getFromMail(): String {
    return $this->fromMail;
  }
  
  public function getSubject(): String {
    return $this->subject;
  }
  
  public function getTypeOfService(): String {
    return $this->typeOfService;
  }
  
  public function getMessage(): String {
    return $this->message;
  }  
}
