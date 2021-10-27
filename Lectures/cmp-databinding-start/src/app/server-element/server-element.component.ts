import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated, //can also use None, Native Emulated is default and no need to insert
})
export class ServerElementComponent
  implements OnInit, AfterViewInit, AfterContentInit
{
  @Input("srvElement") element: { type: string; name: string; content: string };
  @ViewChild("heading", { static: true }) header: ElementRef;
  @ContentChild("contentParagraph", { static: true }) paragraph: ElementRef;
  constructor() {}

  ngOnInit(): void {
    console.log("Text Content" + this.header.nativeElement.textContent);
    console.log('This is a Content Text: '+this.paragraph.nativeElement.textContent);
  }


  ngAfterContentInit(){
    console.log('This is a Content Text: '+this.paragraph.nativeElement.textContent);
  }
  
  ngAfterViewInit() {
    console.log("Text Content" + this.header.nativeElement.textContent);
  }

 
}
