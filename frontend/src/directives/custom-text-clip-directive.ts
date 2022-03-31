import { Directive } from "@angular/core";
import { ClassDirective } from "@angular/flex-layout";

const selector = `[ngClass.xs.textClip]`;
const inputs = ['ngClass.xs.textClip'];

@Directive({ selector, inputs })
export class CustomTextClipDirective extends ClassDirective {
  protected override inputs = inputs;
}
