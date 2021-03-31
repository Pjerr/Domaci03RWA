import { fromEvent, Subscription } from "../node_modules/rxjs/index";
import {scan} from "../node_modules/rxjs/operators/index";

function clickBtn()
{
    const label=document.getElementById("label");
    const button=document.getElementById("btn");
    const click = fromEvent(button, 'click')
    .pipe(scan(count=> count + 1,0))
    .subscribe(count => {switch(count){
        case(1) : label.innerHTML="Click!"; break;
        case(2) : label.innerHTML="Double click!"; break;
        case(3) : label.innerHTML="Triple click!"; break;
        case(4) : label.innerHTML="Dominating!"; break;
        case(5) : label.innerHTML="Rampage!!"; break;
        case(6) : label.innerHTML="Monster click!!!"; break;
        case(7) : label.innerHTML="Legendary!!!!"; break;
        case(8) : label.innerHTML="You broke the button. Are you happy now?";
                  button.hidden=true;
                  break;
        default: console.log("You were not supposed to see this!");
                 unsub(click);
    }});
}

function unsub(sub:Subscription)
{
    sub.unsubscribe();
}

clickBtn();