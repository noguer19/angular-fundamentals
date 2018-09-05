import { Component, Input, /*Output, EventEmitter*/ } from "@angular/core";
import { IEvent } from "./shared";

@Component({
    selector: 'event-thumbnail',
    template: `
        <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
            <h2 [ngStyle]="getStyles()" >{{event?.name}}</h2>
            <div>Date: {{event?.date}}</div>
            <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
                Time: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>
            <div>Price: \${{event?.price}}</div>

            <div [hidden]="!event?.location">
                <span> Location: {{event?.location?.address}} </span>
                <span class="pad-left">
                     {{event?.location?.city}}, {{event?.location?.country}} 
                </span>
            </div>

            <div *ngIf="event?.onlineUrl">
                Online URL: {{ event?.onlineUrl }}
            </div> 
           
    
        </div>
    `,
    styles: [`
        .green { color: #003300 !important;}
        .bold { font-weigth: bold; }
        .thumbnail { min-height: 210px;}
        .pad-left { margin-left: 20px; }
        .well div { color: #bbb; }
    `]
})
export class EventThumbnailComponent{
    @Input() event:IEvent
    // @Output() eventClick = new EventEmitter()

    getStartTimeClass() {
        if (this.event && this.event.time == '8:00 am') {
            //return "green bold"
            return ["green", "bold"]
        }
        return "";
        
        //const isEarlyStart = this.event && this.event.time == '8:00 am'
        //return { green: isEarlyStart, bold: isEarlyStart }

        //All of the above ways are acepted
    }

    getStyles() : any {
        if (this.event.onlineUrl) {
            return { color: "green", "font-weight" : "bold" }
        }
        if (this.event.location) {
            return { color: "skyblue" }
        }
        return {};
    }

    // handleClickMe(){
    //     this.eventClick.emit(this.event.name);
    // }
}