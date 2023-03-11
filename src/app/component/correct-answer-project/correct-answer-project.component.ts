import { TranslateService } from './../../service/translate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correct-answer-project',
  templateUrl: './correct-answer-project.component.html',
  styleUrls: ['./correct-answer-project.component.css'],
})
export class CorrectAnswerProjectComponent implements OnInit {
  content: string =
    "When you enter the answer to the question; It calculates how many seconds have passed in total, how many seconds have passed on average, and how many questions you answered correctly in total. How many questions can you solve before the total time is 30 seconds let's start and see..";
  contentTr: string =
    'Sorunun cevabını girdiğinizde; toplamda kaç saniye geçtiğini, ortalama kaç saniye geçtiğini ve toplamda kaç soruya doğru cevap verdiğiniz hesaplar. Toplam süre 30 saniye olmadan kaç soru çözebilirsin hadi başla ve gör.. ';
  eng: boolean;
  constructor(private translateService: TranslateService) {
    this.eng = translateService.eng;
  }

  ngOnInit(): void {}
}
