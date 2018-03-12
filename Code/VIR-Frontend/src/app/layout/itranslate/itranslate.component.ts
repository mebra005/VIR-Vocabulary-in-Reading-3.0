import { Component, Input, NgModule, OnInit} from '@angular/core';
import { iTranslation } from '../../shared'
import { iTranslateService } from '../../shared/services'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-itranslate',
  templateUrl: './itranslate.component.html',
  styleUrls: ['./itranslate.component.scss'],
  
})
export class ItranslateComponent implements OnInit {
  @Input() textArea: string;
  @Input() target: string;
  targetDisplay:string;
  itranslation:iTranslation;
  data:any;
  t:any;
  t1:any;
  t2:any;
  optionsSelect: Array<any>;

  
  constructor(private _itranslate:iTranslateService) { }

  ngOnInit() {
    this.targetDisplay='';
    this.optionsSelect = [
    { value: 'af', label: 'Afrikaans' },
    { value: 'sq', label: 'Albanian' },
    { value: 'am', label: 'Amharic' },
    { value: 'ar', label: 'Arabic' },
    { value: 'hy', label: 'Armenian' },
    { value: 'az', label: 'Azeerbaijani' },
    { value: 'eu', label: 'Basque' },
    { value: 'bs', label: 'Bosnian' },
    { value: 'bg', label: 'Bulgarian' },
    { value: 'ca', label: 'Catalan' },
    { value: 'zh-CN', label: 'Chinese' },
    { value: 'hr', label: 'Croatian' },
    { value: 'cs', label: 'Czech' },
    { value: 'da', label: 'Danish' },
    { value: 'nl', label: 'Dutch' },
    { value: 'en', label: 'English' },
    { value: 'et', label: 'Estonian' },
    { value: 'fi', label: 'Finnish' },
    { value: 'fr', label: 'French' },
    { value: 'gl', label: 'Galician' },
    { value: 'ka', label: 'Georgian' },
    { value: 'de', label: 'German' },
    { value: 'el', label: 'Greek' },
    { value: 'ht', label: 'Haitian Creole' },
    { value: 'haw', label: 'Hawaiian' },
    { value: 'iw', label: 'Hebrew' },
    { value: 'hi', label: 'Hindi' },
    { value: 'hmn', label: 'Hmong' },
    { value: 'hu', label: 'Hungarian' },
    { value: 'is', label: 'Icelandic' },
    { value: 'id', label: 'Indonesian' },
    { value: 'ga', label: 'Irish' },
    { value: 'it', label: 'Italian' },
    { value: 'ja', label: 'Japanese' },
    { value: 'kk', label: 'Kazakh' },
    { value: 'ko', label: 'Korean' },
    { value: 'ku', label: 'Kurdish' },
    { value: 'ky', label: 'Kyrgyz' },
    { value: 'lo', label: 'Lao' },
    { value: 'la', label: 'Latin' },
    { value: 'lv', label: 'Latvian' },
    { value: 'lt', label: 'Lithuanian' },
    { value: 'lb', label: 'Luxembourgish' },
    { value: 'mk', label: 'Macedonian' },
    { value: 'ms', label: 'Malay' },
    { value: 'mn', label: 'Mongolian' },
    { value: 'my', label: 'Myanmar' },
    { value: 'ne', label: 'Nepali' },
    { value: 'no', label: 'Norwegian' },
    { value: 'ps', label: 'Pashto' },
    { value: 'fa', label: 'Persian' },
    { value: 'po', label: 'Polish' },
    { value: 'pt', label: 'Portuguese' },
    { value: 'pa', label: 'Punjabi' },
    { value: 'ro', label: 'Romanian' },
    { value: 'ru', label: 'Russian' },
    { value: 'sm', label: 'Samoan' },
    { value: 'gd', label: 'Scots Gaelic' },
    { value: 'sr', label: 'Serbian' },
    { value: 'si', label: 'Sinhala' },
    { value: 'sk', label: 'Slovak' },
    { value: 'sl', label: 'Slovenian' },
    { value: 'so', label: 'Somali' },
    { value: 'es', label: 'Spanish' },
    { value: 'se', label: 'Sundanese' },
    { value: 'sw', label: 'Swahili' },
    { value: 'sv', label: 'Swedish' },
    { value: 'tl', label: 'Tagalog' },
    { value: 'tg', label: 'Tajik' },
    { value: 'ta', label: 'Tamil' },
    { value: 'te', label: 'Telugu' },
    { value: 'th', label: 'Thai' },
    { value: 'tr', label: 'Turkish' },
    { value: 'uk', label: 'Ukrainian' },
    { value: 'uz', label: 'Uzbek' },
    { value: 'vi', label: 'Vietnamese' },
    { value: 'cy', label: 'Welsh' },
    { value: 'xh', label: 'Xhosa' },
    { value: 'yi', label: 'Yiddish' },
    { value: 'yo', label: 'Yoruba' },
    { value: 'zu', label: 'Zulu' },
     ];
  }

  onClick(){
    console.log(this.textArea);
  }

  changeLang(target:string, targetDisplay:string){
    this.target=target;
    console.log(this.target);
    this.targetDisplay=targetDisplay;
  }

  translate(){
    
    this._itranslate.postTranslation(this.textArea, this.target).subscribe((rec:any)=>{this.data=rec["data"];
      console.log(this.data);
      this.t = this.data["translations"];
      console.log(this.t)
      this.t1 = this.t[0];
      console.log(this.t1["translatedText"]);
      this.t2 = this.t1["translatedText"]


    
    });
    
  }

  


}
